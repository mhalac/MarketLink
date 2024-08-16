export default function nada(){
  
}
/*
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the request is for an HTML file
  if (url.pathname.endsWith('.html')) {
    // Redirect to the root page or another TSX route
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Continue processing other requests
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};*/
