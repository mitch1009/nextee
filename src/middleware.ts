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
  if (req.headers.get("origin")) {
    const allowedOrigins = (env.ALLOWED_ORIGINS ?? "").split(",");
    const origin = req.headers.get("origin") ?? "";
    if (allowedOrigins.includes(origin)) {
      const session = (await auth()) as Session;
      if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/uzar"],
};

export const publicRoutes = ["/uzar"];
