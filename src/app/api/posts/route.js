// patch all categories
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');

  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    return new NextResponse(
      JSON.stringify(posts, {
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

// since using server side rendering going to use serach params
