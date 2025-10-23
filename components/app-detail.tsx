"use client"

import { Star, Download, Calendar, HardDrive, Smartphone, ChevronLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import type { App } from "@/lib/apps-data"
import { getSimilarApps } from "@/lib/apps-data"

interface AppDetailProps {
  app: App
}

export function AppDetail({ app }: AppDetailProps) {
  const similarApps = getSimilarApps(app.id, app.category)

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Botón de regreso */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        {/* Header de la app */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              {/* Icono de la app */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-background shadow-lg">
                <img src={app.image || "/placeholder.svg"} alt={app.name} className="h-full w-full object-cover" />
              </div>

              {/* Información principal */}
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold md:text-4xl">{app.name}</h1>
                  {app.badge && (
                    <Badge variant="secondary" className="text-sm">
                      {app.badge}
                    </Badge>
                  )}
                </div>

                <p className="mb-4 text-lg text-muted-foreground">{app.developer}</p>

                <div className="mb-6 flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="h-5 w-5 fill-primary" />
                      <span className="text-lg font-bold">{app.rating}</span>
                    </div>
                    <span className="text-muted-foreground">Calificación</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-bold">{app.downloads}</div>
                      <div className="text-xs text-muted-foreground">Descargas</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <HardDrive className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-bold">{app.size}</div>
                      <div className="text-xs text-muted-foreground">Tamaño</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-bold">{app.requirements}</div>
                      <div className="text-xs text-muted-foreground">Requisitos</div>
                    </div>
                  </div>
                </div>

                {/* Botón de descarga principal */}
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="gap-2 text-lg font-bold">
                    <Download className="h-5 w-5" />
                    Descargar v{app.version}
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    <Calendar className="h-5 w-5" />
                    {app.date}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {/* Screenshots */}
            <Card className="mb-8 p-6">
              <h2 className="mb-4 text-2xl font-bold">Capturas de pantalla</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {app.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-border bg-secondary transition-transform hover:scale-105"
                  >
                    <img
                      src={screenshot || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>

            {/* Tabs con información */}
            <Card className="p-6">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                  <TabsTrigger value="features">Características</TabsTrigger>
                  <TabsTrigger value="changelog">Novedades</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <h3 className="mb-3 text-xl font-bold">Acerca de {app.name}</h3>
                  <p className="leading-relaxed text-muted-foreground">{app.description}</p>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <h3 className="mb-4 text-xl font-bold">Características principales</h3>
                  <ul className="space-y-3">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="changelog" className="mt-6">
                  <h3 className="mb-4 text-xl font-bold">Qué hay de nuevo en v{app.version}</h3>
                  <ul className="space-y-3">
                    {app.changelog.map((change, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed text-muted-foreground">{change}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Información adicional */}
            <Card className="p-6">
              <h3 className="mb-4 text-lg font-bold">Información</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="mb-1 font-semibold">Categoría</div>
                  <Badge variant="secondary">{app.category}</Badge>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Versión</div>
                  <div className="text-muted-foreground">{app.version}</div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Desarrollador</div>
                  <div className="text-muted-foreground">{app.developer}</div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Última actualización</div>
                  <div className="text-muted-foreground">{app.date}</div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Tamaño</div>
                  <div className="text-muted-foreground">{app.size}</div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Requisitos</div>
                  <div className="text-muted-foreground">{app.requirements}</div>
                </div>
              </div>
            </Card>

            {/* Botón de descarga secundario */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <h3 className="mb-3 text-lg font-bold">¿Listo para descargar?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Descarga {app.name} ahora y disfruta de todas sus funciones premium.
              </p>
              <Button size="lg" className="w-full gap-2 font-bold">
                <Download className="h-5 w-5" />
                Descargar APK
              </Button>
            </Card>
          </div>
        </div>

        {/* Apps similares */}
        {similarApps.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Apps similares</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {similarApps.map((similarApp) => (
                <Link key={similarApp.id} href={`/app/${similarApp.id}`}>
                  <Card className="group overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-secondary">
                          <img
                            src={similarApp.image || "/placeholder.svg"}
                            alt={similarApp.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                          <Star className="h-3 w-3 fill-primary" />
                          {similarApp.rating}
                        </div>
                      </div>

                      <h3 className="mb-1 text-balance text-base font-semibold group-hover:text-primary">
                        {similarApp.name}
                      </h3>
                      <p className="mb-1 text-sm text-muted-foreground">v{similarApp.version}</p>
                      <p className="text-xs text-muted-foreground">{similarApp.category}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
