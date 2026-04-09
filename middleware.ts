import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const dedicatedLandscapingHosts = new Set([
  "southernbrolandscaping.com",
  "www.southernbrolandscaping.com",
]);

const dedicatedPathRedirects = new Map<string, string>([
  ["/landscaping", "/"],
  ["/landscaping/contact", "/contact"],
  ["/landscaping/thank-you", "/thank-you"],
  ["/brands/southern-bro-landscaping", "/"],
]);

const dedicatedPathRewrites = new Map<string, string>([
  ["/", "/landscaping"],
  ["/contact", "/landscaping/contact"],
  ["/thank-you", "/landscaping/thank-you"],
]);

function shouldBypass(pathname: string) {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    /\/[^/]+\.[^/]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (!host || !dedicatedLandscapingHosts.has(host)) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;

  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  const redirectPath = dedicatedPathRedirects.get(pathname);

  if (redirectPath) {
    return NextResponse.redirect(new URL(`${redirectPath}${search}`, request.url), 308);
  }

  const rewritePath = dedicatedPathRewrites.get(pathname);

  if (rewritePath) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewritePath;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.redirect(new URL(`/${search}`, request.url), 308);
}

export const config = {
  matcher: ["/:path*"],
};
