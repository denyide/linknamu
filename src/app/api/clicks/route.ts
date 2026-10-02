import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const count = await incrementClick(id);
    if (count === null) {
      return NextResponse.json(
        { error: "MONGODB_URI가 설정되지 않았습니다." },
        { status: 503 },
      );
    }
    return NextResponse.json({ id, count });
  } catch (error) {
    console.error("클릭 수를 저장하지 못했습니다:", error);
    return NextResponse.json({ error: "클릭 수 저장에 실패했습니다." }, { status: 500 });
  }
}
