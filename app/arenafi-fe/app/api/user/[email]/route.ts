import { NextResponse } from "next/server";
import { prisma } from "@/lib/utils";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email =  (await params).email;
    console.log(email);
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
        deleted: false
      },
      select: {
        id: true,
        name: true,
        email: true,
        walletAddress: true,
        connectedWallet: true,
        createdAt: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
