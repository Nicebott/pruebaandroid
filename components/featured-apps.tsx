"use client"

import { Star, Download } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredApps = [
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    version: "9.0.86.1358",
    category: "Música",
    rating: 4.8,
    downloads: "1M+",
    image: "/spotify-logo.png",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    version: "8.41.51",
    category: "Video",
    rating: 4.9,
    downloads: "5M+",
    image: "/youtube-logo.png",
  },
  {
    id: "netflix-mod",
    name: "Netflix Mod",
    version: "8.115.0",
    category: "Entretenimiento",
    rating: 4.7,
    downloads: "2M+",
    image: "/netflix-logo.png",
  },
  {
    id: "whatsapp-plus",
    name: "WhatsApp Plus",
    version: "20.50.27",
    category: "Comunicación",
    rating: 4.6,
    downloads: "10M+",
    image: "/whatsapp-logo.png",
  },
]

export function FeaturedApps() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Aplicaciones Destacadas</h2>
          <Button variant="ghost">Ver todas →</Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredApps.map((app) => (
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
      </div>
    </section>
  )
}
