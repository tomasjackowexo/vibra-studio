import { NextResponse, type NextRequest } from "next/server";
import { UTM_COOKIE, UTM_MAX_AGE_SECONDS, hasUtm, mergeUtm, parseUtmCookie, readUtmFromSearchParams } from "@/lib/utm";

export function middleware(request: NextRequest) {
  const incoming = readUtmFromSearchParams(request.nextUrl.searchParams);
  if (!hasUtm(incoming)) return NextResponse.next();

  const current = parseUtmCookie(request.cookies.get(UTM_COOKIE)?.value);
  const response = NextResponse.next();
  response.cookies.set(UTM_COOKIE, JSON.stringify(mergeUtm(current, incoming)), {
    maxAge: UTM_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
    httpOnly: true,
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|og|.*\\..*).*)"],
};
