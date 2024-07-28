import redis from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url = await redis.get(id);
  return NextResponse.json({ t: url });
}
