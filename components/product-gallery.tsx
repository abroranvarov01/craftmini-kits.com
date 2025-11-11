"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    slug: "dimensions-counted-cross-stitch-kit",
    name: "Dimensions Counted Cross Stitch Kit",
    price: "$24.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/919Ui+wqJWL._AC_SX679_.jpg",
    amazonUrl:
      "https://amzn.to/4oEqE0w",
  },
  {
    slug: "freebloss-macrame-kit-beginners",
    name: "FREEBLOSS Macrame Kit for Beginners",
    price: "$32.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71TQl8FK8BL._AC_SX679_.jpg",
    amazonUrl: "https://amzn.to/3XlhbPw",
  },
  {
    slug: "howemon-unscented-candle-set",
    name: "Howemon Unscented Candle Set",
    price: "$19.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61z1f5xSpcL._AC_SX679_PIbundle-40,TopRight,0,0_SH20_.jpg",
    amazonUrl:
      "https://amzn.to/49LJ4aY",
  },
  {
    slug: "artistro-watercolor-paint-set",
    name: "ARTISTRO Watercolor Paint Set",
    price: "$19.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81vkeAwaSHL._AC_SY879_PIbundle-48,TopRight,0,0_SH20_.jpg",
    amazonUrl:
      "https://amzn.to/4hWMiKU",
  },
  {
    slug: "inscraft-embroidery-starter-kit",
    name: "INSCRAFT Embroidery Starter Kit",
    price: "$23.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/91G9WBs4HbL._AC_SX679_.jpg",
    amazonUrl:
      "https://amzn.to/47AKHHg",
  },
  {
    slug: "aestd-st-polymer-clay-kit",
    name: "Aestd-ST Polymer Clay Kit",
    price: "$22.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81ByuR6rikL._AC_SX679_.jpg",
    amazonUrl: "https://amzn.to/497v1wd",
  },
  {
    slug: "embroidery-kit-beginners",
    name: "Embroidery Kit for Beginners",
    price: "$29.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71ENtwRIXxL._AC_SX679_.jpg",
    amazonUrl:
      "https://amzn.to/4nKfdmF",
  },
  {
    slug: "jexine-darning-mushroom-kit",
    name: "Jexine Darning Mushroom Kit",
    price: "$34.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71bm5-dQYEL._AC_SX679_.jpg",
    amazonUrl: "https://amzn.to/3X9a257",
  },
  {
    slug: "origami-paper-art-kit",
    name: "Origami Paper Art Kit",
    price: "$18.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71eDGoe3b5L._AC_SX679_.jpg",
    amazonUrl: "https://amzn.to/3LDXFLA",
  },
]

export function ProductGallery() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">Your Palette Awaits</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            Discover our curated collection of mini craft kits, each one a gateway to creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <Card
                className="card-breathe color-glow bg-white/60 backdrop-blur-sm border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <CardTitle className="text-xl text-charcoal font-semibold text-balance">{product.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? "fill-coral text-coral" : "fill-none text-charcoal/20"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <Button className="watercolor-btn bg-lavender hover:bg-lavender-dark text-white rounded-full w-full">
                    View Kit
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
