import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
 // update user's auth session
 const response = await updateSession(request);

 // Get the pathname of the request
 const { pathname } = request.nextUrl;

 // Create Supabase client to check authentication
 const supabase = createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
   cookies: {
    getAll() {
     return request.cookies.getAll();
    },
    setAll(cookiesToSet) {
     cookiesToSet.forEach(({ name, value, options }) => {
      request.cookies.set(name, value);
      response.cookies.set(name, value, options);
     });
    },
   },
  }
 );

 // Get the user session
 const {
  data: { user },
 } = await supabase.auth.getUser();

 // Define protected routes (dashboard routes)
 const isProtectedRoute = pathname.startsWith("/dashboard");

 // Define auth routes (login, register, etc.)
 const isAuthRoute =
  pathname.startsWith("/login") ||
  pathname.startsWith("/register") ||
  pathname.startsWith("/onboarding");

 // If user is not authenticated and trying to access protected route
 if (!user && isProtectedRoute) {
  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
 }

 // If user is authenticated and trying to access auth routes
 if (user && isAuthRoute) {
  const dashboardUrl = new URL("/dashboard", request.url);
  return NextResponse.redirect(dashboardUrl);
 }

 return response;
}

export const config = {
 matcher: [
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * Feel free to modify this pattern to include more paths.
   */
  "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
 ],
};
