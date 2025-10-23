import { Star, Download, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const latestApps = [
  {
    id: "tiktok-premium",
    name: "TikTok Premium",
    version: "32.5.4",
    developer: "ByteDance Ltd.",
    date: "15 de octubre de 2025",
    rating: 4.7,
    downloads: "500M+",
    image: "/social/tiktok.png",
    badge: "Nuevo",
  },
  {
    id: "instagram-plus",
    name: "Instagram Plus",
    version: "310.0.0.42",
    developer: "Meta Platforms",
    date: "15 de octubre de 2025",
    rating: 4.8,
    downloads: "1B+",
    image: "/instagram-logo.png",
    badge: "Actualizado",
  },
  {
    id: "telegram-x",
    name: "Telegram X",
    version: "0.25.10",
    developer: "Telegram FZ-LLC",
    date: "14 de octubre de 2025",
    rating: 4.9,
    downloads: "100M+",
    image: "/telegram-logo.png",
    badge: "Popular",
  },
  {
    id: "clash-royale-mod",
    name: "Clash Royale Mod",
    version: "4.2.0",
    developer: "Supercell",
    date: "14 de octubre de 2025",
    rating: 4.6,
    downloads: "500M+",
    image: "/clash-royale-logo.jpg",
    badge: "Mod",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    version: "3.4.0",
    developer: "Tencent Games",
    date: "13 de octubre de 2025",
    rating: 4.5,
    downloads: "1B+",
    image: "/generic-battle-royale-logo.png",
    badge: "Juego",
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    version: "11.8.0",
    developer: "Bytedance Pte. Ltd.",
    date: "13 de octubre de 2025",
    rating: 4.8,
    downloads: "500M+",
    image: "/capcut-logo.png",
    badge: "Editor",
  },
]

export function LatestUpdates() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold">Últimas Actualizaciones</h2>
          <p className="text-muted-foreground">Las apps y juegos más recientes agregados a nuestra colección</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestApps.map((app) => (
            <Link key={app.id} href={`/app/${app.id}`}>
              <Card className="group overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                <div className="flex gap-4 p-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-secondary">
                    <img src={app.image || "/placeholder.svg"} alt={app.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-balance text-base font-semibold leading-tight group-hover:text-primary">
                        {app.name}
                      </h3>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {app.badge}
                      </Badge>
                    </div>

                    <p className="mb-1 text-sm text-muted-foreground">v{app.version}</p>
                    <p className="mb-2 truncate text-xs text-muted-foreground">{app.developer}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {app.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {app.downloads}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border bg-secondary/50 px-6 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {app.date}
                    </div>
                    <Button size="sm" variant="ghost" className="h-8 text-xs font-semibold">
                      Ver más
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" variant="outline">
            Cargar más aplicaciones
          </Button>
        </div>
      </div>
    </section>
  )
}
