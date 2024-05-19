import { auth } from "@/lib/auth"

export default auth((req) => { 
  if (!req.auth && publicRoutes.includes(req.nextUrl.pathname)) {
    const url = req.url.replace(req.nextUrl.pathname, "/auth/signin")
    return Response.redirect(url)
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", '/uzar'],
}

export const publicRoutes = ['/uzar']