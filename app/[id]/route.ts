import redis from "@/lib/redis";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const url = await redis.get(id);
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, message: "Shortened URL not found" },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
    return NextResponse.redirect(url, 302);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}
