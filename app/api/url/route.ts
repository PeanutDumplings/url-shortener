import { type NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import redis from "@/lib/redis";
import { z } from "zod";

const urlSchema = z.object({
  url: z.string().url(),
});

export async function POST(request: NextRequest) {
  let body: { url: string };

  try {
    const jsonBody = await request.json();
    body = urlSchema.parse(jsonBody);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid URL format" },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid body" },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }

  try {
    const id = nanoid(8);
    await redis.set(id, body.url);
    return NextResponse.json(
      {
        success: true,
        message: "Successfully shortened URL",
        url: {
          id,
          shortened: `http://localhost:3000/${id}`,
          lengthened: body.url,
        },
      },
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}
