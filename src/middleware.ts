import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('accessToken')?.value;
    console.log(token)
    if (!token && pathname !== '/auth-signin') {
        return NextResponse.redirect(new URL('/auth-signin', request.url));
    }
    if (token && pathname === '/auth-signin') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/contact-us/:path*', '/browse-Predictions/:path*', '/auth-signin'],
};