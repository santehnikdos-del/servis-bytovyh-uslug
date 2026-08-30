import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Страницу входа не закрываем
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  const correctToken = createHash("sha256")
    .update(adminPassword)
    .digest("hex");

  const sessionToken = request.cookies.get("admin_session")?.value;

  if (sessionToken !== correctToken) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};