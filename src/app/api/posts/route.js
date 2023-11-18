// patch all categories
import { getAuthSession } from '@/utils/auth';
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
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      // get all posts
      prisma.post.findMany(query),
      // get count of posts
      prisma.post.count({ where: query.where }),
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
};


// Create a post
export const POST = async (req) => {
  // need user session from next auth
  const session = await getAuthSession();

  console.log('session', session);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'Not Authorized' }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
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

// since using server side rendering going to use serach params
