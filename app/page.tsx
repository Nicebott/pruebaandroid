import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedApps } from "@/components/featured-apps"
import { LatestUpdates } from "@/components/latest-updates"
import { Categories } from "@/components/categories"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedApps />
      <Categories />
      <LatestUpdates />
      <Footer />
    </div>
  )
}
