import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, email } = await req.json();

  const externalRes = await fetch(
    "https://api.imeer.com.au/user/auth/verify-reset-token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, email }),
    }
  );

  let payload;

  try {
    payload = await externalRes.json();
  } catch {
    payload = { valid: false, message: "Invalid response from verification API" };
  }

  return NextResponse.json(payload, { status: externalRes.status });
}