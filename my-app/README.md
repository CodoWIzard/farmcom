# FarmCom - Local Farm Marketplace

A modern marketplace connecting local farmers with buyers, built with Next.js, MySQL, and Stripe.

## Features

- **User Authentication**: JWT-based auth for farmers and buyers
- **Product Management**: Farmers can list crops, livestock, and produce
- **Order System**: Secure ordering with Stripe payment integration
- **Real-time Messaging**: Socket.io for farmer-buyer communication
- **Responsive Design**: Modern, minimalistic UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: MySQL
- **Payments**: Stripe API
- **Real-time**: Socket.io
- **Authentication**: JWT with bcrypt

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local` and update with your credentials:
   ```
   DATABASE_URL="mysql://username:password@localhost:3306/farmcom"
   JWT_SECRET="your-jwt-secret-key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
   ```

3. **Set up database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create product (farmers only)

### Orders
- `POST /api/orders` - Create order with Stripe payment

## Database Schema

- **Users**: Farmers and buyers with profiles
- **Products**: Crops, livestock with pricing and availability
- **Orders**: Purchase orders with Stripe integration
- **Messages**: Real-time messaging between users

## Project Structure

```
src/
├── app/
│   ├── api/          # API routes
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable components
├── lib/             # Utilities and configurations
│   ├── auth.ts      # Authentication helpers
│   ├── prisma.ts    # Database client
│   ├── stripe.ts    # Stripe configuration
│   └── types.ts     # TypeScript definitions
└── prisma/
    └── schema.prisma # Database schema
```

## Next Steps

1. Add Socket.io server for real-time messaging
2. Implement file upload for product images
3. Add search and filtering for products
4. Create farmer and buyer dashboards
5. Add order tracking and notifications