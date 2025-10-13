import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany({
      where: { available: true },
      include: { farmer: { select: { name: true, phone: true } } },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })

    if (!user || user.type !== 'FARMER') {
      return NextResponse.json({ error: 'Only farmers can create products' }, { status: 403 })
    }

    const { name, description, price, unit, category, quantity, imageUrl } = await request.json()

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        unit,
        category,
        quantity,
        imageUrl,
        farmerId: user.id
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}