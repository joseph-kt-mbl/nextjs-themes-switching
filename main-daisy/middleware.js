// middleware.js (handles incoming requests, similar to hooks.server.ts)
import { NextResponse } from 'next/server';

export function middleware(request) {
  let theme = null;
  const { cookies, nextUrl } = request;
  
  // Check for theme in query parameters
  const newTheme = nextUrl.searchParams.get('theme');
  // Check for theme in cookies
  const cookieTheme = cookies.get('colortheme')?.value;

  if (newTheme) {
    theme = newTheme;
  } else if (cookieTheme) {
    theme = cookieTheme;
  }

  // Return early if no theme is set
  if (!theme) {
    return NextResponse.next();
  }

  // Create a response object
  const response = NextResponse.next();
  
  // If we're using the search param approach, we can set the cookie here too
  if (newTheme) {
    response.cookies.set({
      name: 'colortheme',
      value: newTheme,
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  // We'll need to handle the HTML transformation in a different way,
  // as Next.js middleware doesn't directly support HTML transforms
  
  return response;
}

// Specify which paths this middleware will run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};