import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

import { getAuthSession } from "@/utils/auth";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  // return new NextResponse(JSON.stringify({postSlug}))

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    // console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A COMMENT 
export const POST = async (req) => {
  const session = await getAuthSession();

  // console.log(session)

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const commentedUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    })
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
      // data: { ...body, userEmail: session.user.email, user: { where: {} } },
    });

    console.log(comment)

    return new NextResponse(JSON.stringify({ body, commentedUser }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};