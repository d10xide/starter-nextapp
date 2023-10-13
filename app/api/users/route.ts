import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing some input!", { status: 400 });
    }

    const exist = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (exist) {
      return new NextResponse("User is registered", { status: 400 });
    }

    const username = email;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        username,
        hashedPassword,
      },
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error!", { status: 500 });
  }
}
