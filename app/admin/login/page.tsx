'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      router.push('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B3A62] to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-[#D66B7F] mb-2">P</div>
            <h1 className="text-2xl font-bold text-[#8B3A62] mb-2">Pahnawa Admin</h1>
            <p className="text-gray-600">Login to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F] focus:ring-1 focus:ring-[#D66B7F]"
                placeholder="admin@pahnawa.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F] focus:ring-1 focus:ring-[#D66B7F]"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-[#D66B7F] hover:text-[#8B3A62] transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D66B7F] text-white font-semibold py-3 rounded-lg hover:bg-[#8B3A62] transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm mb-4">Demo Credentials:</p>
            <div className="bg-gray-50 p-4 rounded-lg text-center text-xs">
              <p className="text-gray-600"><span className="font-semibold">Email:</span> admin@pahnawa.com</p>
              <p className="text-gray-600"><span className="font-semibold">Password:</span> admin123</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-gray-600 hover:text-[#D66B7F] transition-colors text-sm">
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
