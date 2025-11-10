import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "dimensions-counted-cross-stitch-kit",
  "freebloss-macrame-kit-beginners",
  "howemon-unscented-candle-set",
  "artistro-watercolor-paint-set",
  "inscraft-embroidery-starter-kit",
  "aestd-st-polymer-clay-kit",
  "embroidery-kit-beginners",
  "jexine-darning-mushroom-kit",
  "origami-paper-art-kit",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://flowstart.fit")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("mini", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/star"],
};
