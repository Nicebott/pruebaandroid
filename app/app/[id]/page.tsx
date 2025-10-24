import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { AppDetail } from "@/components/app-detail"
import { getAppById } from "@/lib/apps-data"
import { ScrollToTop } from "@/components/scroll-to-top"

export default async function AppPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const app = getAppById(id)

  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <AppDetail app={app} />
    </div>
  )
}
