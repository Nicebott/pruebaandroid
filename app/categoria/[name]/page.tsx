import { notFound } from "next/navigation"
import { appsData } from "@/lib/apps-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Download } from "lucide-react"
import Link from "next/link"

interface CategoryPageProps {
  params: Promise<{
    name: string
  }>
}

const categoryMap: Record<string, string> = {
  juegos: "Juegos",
  música: "Música",
  video: "Video",
  fotografía: "Fotografía",
  social: "Redes Sociales",
  compras: "Compras",
  herramientas: "Herramientas",
  educación: "Educación",
  comunicación: "Comunicación",
  entretenimiento: "Entretenimiento",
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = await params
  const decodedName = decodeURIComponent(name)
  const categoryName = categoryMap[decodedName] || decodedName

  const filteredApps = appsData.filter((app) => app.category.toLowerCase() === categoryName.toLowerCase())

  if (filteredApps.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">{categoryName}</h1>
          <p className="text-muted-foreground">
            {filteredApps.length} {filteredApps.length === 1 ? "aplicación encontrada" : "aplicaciones encontradas"}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredApps.map((app) => (
            <Link key={app.id} href={`/app/${app.id}`}>
              <Card className="group overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  {app.badge && <Badge className="absolute right-2 top-2 bg-primary">{app.badge}</Badge>}
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold group-hover:text-primary">{app.name}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{app.developer}</p>
                  <div className="mb-3 flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">{app.rating}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{app.downloads}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{app.date}</p>
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
