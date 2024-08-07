// app/api/restricted/route.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession(req, authOptions);

  if (session) {
    return new Response(
      JSON.stringify({
        content:
          "これは保護されたコンテンツです。あなたはサインインしているのでアクセスできます。",
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        error:
          "このページの保護されたコンテンツを見るには、サインインする必要があります。",
      }),
      { status: 401 }
    );
  }
}
