// src/app/api/waitlist/route.ts
import { NextResponse } from "next/server"

interface WaitlistError {
  message: string
  errors?: Record<string, string[]>
}

export async function POST(req: Request) {
  const { email } = await req.json()
  console.log("[waitlist] incoming email:", email)

  const externalRes = await fetch(process.env.NEXT_PUBLIC_WAITLIST_URL!, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })

  console.log("[waitlist] external API responded with status:", externalRes.status)

  // Success → 204 No Content
  if (externalRes.ok) {
    return new NextResponse(null, { status: 204 })
  }

  // Error → parse JSON into our WaitlistError shape
  let errorPayload: WaitlistError
  try {
    errorPayload = (await externalRes.json()) as WaitlistError
  } catch (e) {
    console.error("[waitlist] failed to parse error JSON:", e)
    errorPayload = { message: "Unknown error from external API" }
  }
  console.log("[waitlist] external API error payload:", errorPayload)

  return NextResponse.json(errorPayload, { status: externalRes.status })
}
