// patch all categories
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');
  const cat = searchParams.get('cat');

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && {catSlug: cat})
    }
  };

  try {
    const [posts, count] = await prisma.$transaction([
      // get all posts
      prisma.post.findMany(query),
      // get count of posts
      prisma.post.count({where: query.where}),
    ]);

    return new NextResponse(
      JSON.stringify(
        { posts, count },
        {
          status: 200,
        }
      )
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
