import { Gamepad2, Music, Video, Camera, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  { name: "Juegos", icon: Gamepad2, count: 1250, color: "text-blue-500" },
  { name: "Música", icon: Music, count: 340, color: "text-pink-500" },
  { name: "Video", icon: Video, count: 520, color: "text-red-500" },
  { name: "Fotografía", icon: Camera, count: 680, color: "text-purple-500" },
  { name: "Social", icon: MessageSquare, count: 890, color: "text-green-500" },
]

export function Categories() {
  return (
    <section id="categorias" className="border-t border-border bg-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold">Explorar Categorías</h2>
          <p className="text-muted-foreground">Descubre apps y juegos organizados por categoría</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={`/categoria/${category.name.toLowerCase()}`}>
                <Card className="group cursor-pointer overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex flex-col items-center gap-3 p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                      <Icon className={`h-7 w-7 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} apps</p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
