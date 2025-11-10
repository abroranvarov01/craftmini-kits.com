import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header" // Import the Header component
import { Footer } from "@/components/footer" // Import Footer component
import "./globals.css"

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "600"],
	variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	weight: ["700"],
	style: ["italic"],
	variable: "--font-serif",
})

export const metadata: any = {
	title: "CraftMini Kits - Art in Motion. Color in Every Scroll.",
	description: "Small Kits. Big Creativity. Handpicked DIY mini-kits that bring your art to life.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
				<Header />
				{children}
				<Footer /> {/* Add Footer component */}
				<Analytics />
			</body>
		</html>
	)
}
