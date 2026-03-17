import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Check if the request is for the Medisure LLC domain
  const isMedisureDomain = hostname.includes('medisurellc.com');

  if (isMedisureDomain) {
    // If we're at the root of the medisure domain, rewrite to the /medisure page
    if (url.pathname === '/') {
      url.pathname = '/medisure';
      return NextResponse.rewrite(url);
    }
  }

  // Otherwise, proceed as normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
