import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_BASE!;

export async function GET() {
  try {
    const res = await fetch(`${API}/api/studio/stm-post/`, { cache: "no-store" });
    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream fetch failed", status: res.status, body: text },
        { status: 502 }
      );
    }

    return new NextResponse(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Proxy error", message: String(err?.message || err) },
      { status: 502 }
    );
  }
}
