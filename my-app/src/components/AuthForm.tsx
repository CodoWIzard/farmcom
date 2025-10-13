'use client'

import { useState } from 'react'

interface AuthFormProps {
  type: 'login' | 'register'
  onSubmit: (data: any) => void
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: 'BUYER',
    phone: '',
    address: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className=\"space-y-4 max-w-md mx-auto\">\n      <div>\n        <label className=\"block text-sm font-medium text-gray-700\">Email</label>\n        <input\n          type=\"email\"\n          required\n          className=\"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md\"\n          value={formData.email}\n          onChange={(e) => setFormData({ ...formData, email: e.target.value })}\n        />\n      </div>\n\n      <div>\n        <label className=\"block text-sm font-medium text-gray-700\">Password</label>\n        <input\n          type=\"password\"\n          required\n          className=\"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md\"\n          value={formData.password}\n          onChange={(e) => setFormData({ ...formData, password: e.target.value })}\n        />\n      </div>\n\n      {type === 'register' && (\n        <>\n          <div>\n            <label className=\"block text-sm font-medium text-gray-700\">Name</label>\n            <input\n              type=\"text\"\n              required\n              className=\"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md\"\n              value={formData.name}\n              onChange={(e) => setFormData({ ...formData, name: e.target.value })}\n            />\n          </div>\n\n          <div>\n            <label className=\"block text-sm font-medium text-gray-700\">User Type</label>\n            <select\n              className=\"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md\"\n              value={formData.userType}\n              onChange={(e) => setFormData({ ...formData, userType: e.target.value })}\n            >\n              <option value=\"BUYER\">Buyer</option>\n              <option value=\"FARMER\">Farmer</option>\n            </select>\n          </div>\n\n          <div>\n            <label className=\"block text-sm font-medium text-gray-700\">Phone</label>\n            <input\n              type=\"tel\"\n              className=\"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md\"\n              value={formData.phone}\n              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}\n            />\n          </div>\n\n          <div>\n            <label className=\"block text-sm font-medium text-gray-700\">Address</label>\n            <textarea\n              className=\"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md\"\n              value={formData.address}\n              onChange={(e) => setFormData({ ...formData, address: e.target.value })}\n            />\n          </div>\n        </>\n      )}\n\n      <button\n        type=\"submit\"\n        className=\"w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700\"\n      >\n        {type === 'login' ? 'Login' : 'Register'}\n      </button>\n    </form>\n  )\n}