import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { NextResponse } from "next/server";
import { env } from "process";

export default auth(async (req) => {
  if (!req.auth && publicRoutes.includes(req.nextUrl.pathname)) {
    const url = req.url.replace(req.nextUrl.pathname, "/auth/signin");
    return Response.redirect(url);
  }

  // Implement login to allow some origins to access data on this app
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/uzar"],
};

export const publicRoutes = ["/uzar"];
