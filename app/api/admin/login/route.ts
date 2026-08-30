import { NextResponse } from "next/server";
import { createHash } from "crypto";

export async function POST(request: Request) {
  const { password } = await request.json();

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD не настроен" },
      { status: 500 }
    );
  }

  if (password !== adminPassword) {
    return NextResponse.json(
      { error: "Неверный пароль" },
      { status: 401 }
    );
  }

  const sessionToken = createHash("sha256")
    .update(adminPassword)
    .digest("hex");

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin_session", sessionToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}