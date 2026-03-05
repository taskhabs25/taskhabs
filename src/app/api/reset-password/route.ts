import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, email, password } = await req.json();

  const externalRes = await fetch(
    "https://api.imeer.com.au/user/auth/reset-password",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, email, password }),
    }
  );

  let payload;

  try {
    payload = await externalRes.json();
  } catch {
    payload = { message: "Unknown response from reset API" };
  }

  return NextResponse.json(payload, { status: externalRes.status });
}