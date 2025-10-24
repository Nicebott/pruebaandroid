import { appsData } from "@/lib/apps-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Download, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SearchBar } from "@/components/search-bar"

interface SearchPageProps {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  const query = q || ""

  // Search in app name, developer, and category
  const searchResults = appsData.filter((app) => {
    const searchTerm = query.toLowerCase()
    return (
      app.name.toLowerCase().includes(searchTerm) ||
      app.developer.toLowerCase().includes(searchTerm) ||
      app.category.toLowerCase().includes(searchTerm) ||
      app.description.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Resultados de búsqueda</h1>
          </div>

          <div className="mb-6">
            <SearchBar initialQuery={query} />
          </div>

          {query && (
            <p className="text-lg text-muted-foreground">
              Buscando: <span className="font-semibold text-foreground">"{query}"</span>
            </p>
          )}

          <p className="mt-2 text-muted-foreground">
            {searchResults.length === 0
              ? "No se encontraron resultados"
              : `${searchResults.length} ${searchResults.length === 1 ? "resultado encontrado" : "resultados encontrados"}`}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {searchResults.map((app) => (
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
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 rounded-full bg-secondary p-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold">No se encontraron resultados</h2>
            <p className="mb-6 text-muted-foreground">
              Intenta con otros términos de búsqueda o explora nuestras categorías
            </p>
            <Link href="/">
              <Button>Explorar aplicaciones</Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
