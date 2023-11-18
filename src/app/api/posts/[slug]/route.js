// patch all categories
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// Single Post
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
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

  // try {
  //   const [posts, count] = await prisma.$transaction([
  //     prisma.post.findMany({query}),
  //     prisma.post.count(),
  //     // prisma.post.count({ where: query.where }),
  //   ]);
  //   return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  // } catch (err) {
  //   console.log(err);
  //   return new NextResponse(
  //     JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
  //   );
  // }
  // };
};

// since using server side rendering going to use serach params
