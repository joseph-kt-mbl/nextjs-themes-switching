// app/api/set-theme/route.js (handles theme setting action)
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const formData = await request.formData();
  const theme = formData.get('theme');
  const redirectTo = formData.get('redirectTo') || '/';

  if (theme) {
    // Set the theme cookie
    cookies().set({
      name: 'colortheme',
      value: theme,
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  // Redirect to the requested page
  return NextResponse.redirect(new URL(redirectTo, request.url), 303);
}