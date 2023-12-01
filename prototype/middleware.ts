import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    if (request.nextUrl.pathname.startsWith('/login')) {
        response.cookies.set({
            name: 'customer',
            value: 'login',
            path: '/login',
          })
    }
    if (request.nextUrl.pathname.startsWith('/register')) {
        response.cookies.set({
            name: 'customer',
            value: 'register',
            path: '/register',
          })
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login/:path*','/register/:path*']
}