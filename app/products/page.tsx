import { ProductGallery } from "@/components/product-gallery"


export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-4 text-lavender-dark italic">Our Products</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Discover our collection of artistic mini craft kits designed to inspire creativity and bring color to your
          life.
        </p>
        <ProductGallery />
        
      </div>
    </main>
  )
}
