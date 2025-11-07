import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Star, Package, Sparkles, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const products = [
  {
    slug: "dimensions-counted-cross-stitch-kit",
    name: "Dimensions Counted Cross Stitch Kit",
    price: "$24.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/919Ui+wqJWL._AC_SX679_.jpg",
    amazonUrl:
      "https://www.amazon.com/Dimensions-Needlecrafts-Collection-Counted-Treasured/dp/B00114THOY?tag=craftmini-20",
    description:
      "Create beautiful cross-stitch art with this complete kit from Dimensions. Perfect for beginners and experienced crafters alike.",
    features: [
      "Complete kit with all materials",
      "Detailed instructions included",
      "High-quality threads and fabric",
      'Finished size: 5" x 7"',
    ],
  },
  {
    slug: "freebloss-macrame-kit-beginners",
    name: "FREEBLOSS Macrame Kit for Beginners",
    price: "$32.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71TQl8FK8BL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/FREEBLOSS-Macrame-Beginners-Tapestry-Birthday/dp/B0CMD8XK4S?tag=craftmini-20",
    description:
      "Learn the beautiful art of macrame with this comprehensive beginner-friendly kit. Create stunning wall hangings and decorative pieces.",
    features: [
      "Premium cotton cord",
      "Step-by-step video tutorials",
      "Multiple project patterns",
      "Perfect for home decor",
    ],
  },
  {
    slug: "howemon-unscented-candle-set",
    name: "Howemon Unscented Candle Set",
    price: "$19.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61z1f5xSpcL._AC_SX679_PIbundle-40,TopRight,0,0_SH20_.jpg",
    amazonUrl:
      "https://www.amazon.com/Howemon-Unscented-Witchcraft-Meditation-Decoration/dp/B0FFMBKFGY?tag=craftmini-20",
    description:
      "Craft your own beautiful candles with this complete candle-making kit. Unscented wax perfect for meditation and relaxation.",
    features: [
      "Food-grade paraffin wax",
      "Multiple wick sizes included",
      "Safe and non-toxic",
      "Great for gifts and meditation",
    ],
  },
  {
    slug: "artistro-watercolor-paint-set",
    name: "ARTISTRO Watercolor Paint Set",
    price: "$19.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81vkeAwaSHL._AC_SY879_PIbundle-48,TopRight,0,0_SH20_.jpg",
    amazonUrl:
      "https://www.amazon.com/Artistro-Watercolor-Including-Fluorescent-Hobbyists/dp/B08D2DJPD3?tag=craftmini-20",
    description:
      "Premium watercolor paint set with vibrant colors including fluorescent options. Perfect for artists and hobbyists.",
    features: ["48 vibrant colors", "Fluorescent colors included", "High pigmentation", "Professional quality"],
  },
  {
    slug: "inscraft-embroidery-starter-kit",
    name: "INSCRAFT Embroidery Starter Kit",
    price: "$23.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/91G9WBs4HbL._AC_SX679_.jpg",
    amazonUrl:
      "https://www.amazon.com/Inscraft-Embroidery-Including-Instructions-Beginners/dp/B087RB2K2B?tag=craftmini-20",
    description:
      "Complete embroidery starter kit with everything you need to begin your embroidery journey. Includes patterns and instructions.",
    features: ["50+ color threads", "5 embroidery hoops", "Pattern transfers", "Beginner-friendly instructions"],
  },
  {
    slug: "aestd-st-polymer-clay-kit",
    name: "Aestd-ST Polymer Clay Kit",
    price: "$22.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81ByuR6rikL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Aestd-ST-Modeling-Non-Toxic-Non-Stick-Sculpting/dp/B08QZ69GJM?tag=craftmini-20",
    description:
      "Create amazing polymer clay creations with this comprehensive kit. Non-toxic and perfect for jewelry, figurines, and more.",
    features: ["50 vibrant clay colors", "Non-toxic and safe", "Sculpting tools included", "Bake-to-harden formula"],
  },
  {
    slug: "embroidery-kit-beginners",
    name: "Embroidery Kit for Beginners",
    price: "$29.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71ENtwRIXxL._AC_SX679_.jpg",
    amazonUrl:
      "https://www.amazon.com/Embroidery-Beginners-Patterns-Instructions-Beginner/dp/B0D1Y28SQB?tag=craftmini-20",
    description:
      "Perfect embroidery kit for those just starting out. Includes beautiful patterns and comprehensive instructions.",
    features: ["Pre-printed patterns", "Quality embroidery floss", "Multiple hoop sizes", "Video tutorials available"],
  },
  {
    slug: "jexine-darning-mushroom-kit",
    name: "Jexine Darning Mushroom Kit",
    price: "$34.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71bm5-dQYEL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Jexine-Darning-Mushroom-Speedweve-Handcraft/dp/B0DW4136NB?tag=craftmini-20",
    description:
      "Traditional darning mushroom kit for mending and visible mending projects. Eco-friendly way to repair your favorite garments.",
    features: [
      "Solid wood mushroom",
      "Complete darning supplies",
      "Visible mending techniques",
      "Sustainable crafting",
    ],
  },
  {
    slug: "origami-paper-art-kit",
    name: "Origami Paper Art Kit",
    price: "$18.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71eDGoe3b5L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Origami-220pcs-Colors-Double-instruction/dp/B0CM66MXNJ?tag=craftmini-20",
    description:
      "Complete origami paper set with 220 sheets in beautiful colors and patterns. Create stunning paper art with included instructions.",
    features: ["220 sheets of paper", "Double-sided designs", "Multiple sizes included", "Instruction booklet"],
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender/20 via-mint/10 to-coral/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-coral to-lavender rounded-full blur-3xl opacity-50" />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal text-balance">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating ? "fill-coral text-coral" : "fill-none text-charcoal/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-charcoal/70 font-light">({product.rating}.0)</span>
              </div>

              {/* Price */}
              
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-charcoal flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-lavender" />
                About This Kit
              </h2>
              <p className="text-charcoal/70 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-charcoal flex items-center gap-2">
                <Package className="h-5 w-5 text-mint" />
                What's Included
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-charcoal/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Link href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  size="lg"
                  className="w-full watercolor-btn bg-coral hover:bg-coral-light text-white px-8 py-6 text-lg rounded-full shadow-lg group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Buy on Amazon
                    <ExternalLink className="h-5 w-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-coral via-lavender to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </Button>
              </Link>

              <p className="text-xs text-charcoal/50 text-center">
                As an Amazon Associate, we earn from qualifying purchases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
