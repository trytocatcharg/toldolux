import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
