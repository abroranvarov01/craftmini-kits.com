"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductGallery } from "@/components/product-gallery"
import { HowItWorks } from "@/components/how-it-works"
import { InspirationGallery } from "@/components/inspiration-gallery"
import { Reviews } from "@/components/reviews"
import { ComparisonTable } from "@/components/comparison-table"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { CookieBanner } from "@/components/cookie-banner"
import { ColorModeToggle } from "@/components/color-mode-toggle"
import { CursorTrail } from "@/components/cursor-trail"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate background color based on scroll progress
  const getBackgroundStyle = () => {
    const colors = [
      { stop: 0, color: "oklch(0.95 0.08 290)" }, // Lavender light
      { stop: 0.15, color: "oklch(0.85 0.12 35)" }, // Coral-pink
      { stop: 0.35, color: "oklch(0.92 0.08 160)" }, // Mint light
      { stop: 0.55, color: "oklch(0.80 0.12 240)" }, // Sky blue
      { stop: 0.75, color: "oklch(0.95 0.03 80)" }, // Cream/sandy
      { stop: 1, color: "oklch(0.88 0.05 70)" }, // Sand
    ]

    let currentColor = colors[0].color
    for (let i = 0; i < colors.length - 1; i++) {
      if (scrollProgress >= colors[i].stop && scrollProgress < colors[i + 1].stop) {
        const localProgress = (scrollProgress - colors[i].stop) / (colors[i + 1].stop - colors[i].stop)
        // Simple color transition (in production, use proper color interpolation)
        currentColor = scrollProgress < 0.5 ? colors[i].color : colors[i + 1].color
        break
      }
    }

    return {
      backgroundColor: currentColor,
      transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    }
  }

  return (
    <main className="relative min-h-screen" style={getBackgroundStyle()}>
      <CursorTrail />
      <ColorModeToggle />

      <HeroSection />
      <AboutSection />
      <ProductGallery />
      <HowItWorks />
      <InspirationGallery />
      <Reviews />
      <ComparisonTable />
      <WhyChooseUs />
      <CTASection />
      <CookieBanner />
    </main>
  )
}
