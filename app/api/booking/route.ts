import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: handle booking submission (email, DB, etc.)
    return NextResponse.json(
      { ok: true, received: body },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "booking endpoint live" },
    { status: 200 }
  );
}
