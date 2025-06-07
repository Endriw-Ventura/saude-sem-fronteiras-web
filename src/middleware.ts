import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("saudeToken")?.value;

  console.log(request.nextUrl.pathname);

  const isAuthPage =
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname.startsWith("/registration") ||
    request.nextUrl.pathname.startsWith("/recover") ||
    request.nextUrl.pathname.startsWith("/reset-password") ||
    request.nextUrl.pathname.startsWith("/doctor-registration") ||
    request.nextUrl.pathname.startsWith("/user-registration");

  if (!token && !isAuthPage) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && isAuthPage) {
    const homeUrl = new URL("/home", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
