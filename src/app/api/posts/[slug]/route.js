import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// Single Post
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } }, // increment views when post is viewed
      include: { user: true },
    });

    return new NextResponse(
      JSON.stringify(post, {
        status: 200,
      })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

// since using server side rendering going to use search params to set up query
