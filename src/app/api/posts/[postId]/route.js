import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { postId } = params  // get from the folder [postId]
  // console.log(params)

  try {
    // const post = await prisma.post.findUnique({
    //   where: { id: postId },
    //   include: { user: true }
    // })

    // * To increase the number of view of a post
    const post = await prisma.post.update({
      where: { id: postId },
      data: { views: { increment: 1 } },
      include: { user: true }
    })

    return new NextResponse(JSON.stringify(post, { status: 200 }))
  } catch (error) {
    console.log(error)

    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    )
  }
}