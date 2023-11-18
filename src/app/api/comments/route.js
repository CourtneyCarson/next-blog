// patch all categories
import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// Get all comments for a single post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get('postSlug');

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
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};

// Create a comment on a single post
export const POST = async (req) => {
  // need user session from next auth
  const session = await getAuthSession();

  console.log('session', session)

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'Not Authorized' }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return new NextResponse(
      JSON.stringify(comment, {
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
