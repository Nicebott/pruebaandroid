import { appsData } from "@/lib/apps-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AllAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Todas las Aplicaciones</h1>
          <p className="text-muted-foreground">{appsData.length} aplicaciones y juegos disponibles</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {appsData.map((app) => (
            <Link key={app.id} href={`/app/${app.id}`}>
              <Card className="group overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-secondary">
                      <img
                        src={app.image || "/placeholder.svg"}
                        alt={app.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      <Star className="h-3 w-3 fill-primary" />
                      {app.rating}
                    </div>
                  </div>

                  <h3 className="mb-1 text-balance text-lg font-semibold group-hover:text-primary">{app.name}</h3>
                  <p className="mb-1 text-sm text-muted-foreground">v{app.version}</p>
                  <p className="mb-4 text-xs text-muted-foreground">{app.category}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Download className="h-3 w-3" />
                      {app.downloads}
                    </div>
                    <Button size="sm" className="font-semibold">
                      Descargar
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
