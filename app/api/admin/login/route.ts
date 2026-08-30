import { NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password =
      typeof body?.password === "string" ? body.password : "";

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD не настроен");

      return NextResponse.json(
        { error: "Ошибка авторизации" },
        {
          status: 500,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const enteredBuffer = Buffer.from(password);
    const expectedBuffer = Buffer.from(adminPassword);

    const passwordMatches =
      enteredBuffer.length === expectedBuffer.length &&
      timingSafeEqual(enteredBuffer, expectedBuffer);

    if (!passwordMatches) {
      return NextResponse.json(
        { error: "Неверный пароль" },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const sessionToken = createHash("sha256")
      .update(adminPassword)
      .digest("hex");

    const response = NextResponse.json(
      { success: true },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    response.cookies.set("admin_session", sessionToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { error: "Ошибка авторизации" },
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}