// app/api/posts/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Post from "../../../models/Post";

export async function GET() {
  await connectToDatabase();

  try {
    const posts = await Post.find({});
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectToDatabase();

  try {
    const data = await req.json();
    const newPost = new Post(data);
    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
