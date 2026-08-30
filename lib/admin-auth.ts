import { createHash } from "crypto";
import { cookies } from "next/headers";

export async function isAdmin() {
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    return false;
  }

  const expected = createHash("sha256")
    .update(password)
    .digest("hex");

  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  return session === expected;
}
