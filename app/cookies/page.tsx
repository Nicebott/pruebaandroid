import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <h1 className="mb-6 text-4xl font-bold">Política de Cookies</h1>
          <p className="mb-8 text-muted-foreground">Última actualización: 23 de octubre de 2025</p>

          <Card className="p-8">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">1. ¿Qué son las Cookies?</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                  web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y
                  proporcionar información a los propietarios del sitio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">2. Tipos de Cookies que Utilizamos</h2>

                <h3 className="mb-3 text-xl font-semibold">2.1 Cookies Esenciales</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web. Sin ellas, el sitio no puede
                  funcionar correctamente.
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Cookies de sesión para mantener tu sesión activa</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias de idioma</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">2.2 Cookies de Rendimiento</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Estas cookies recopilan información sobre cómo los visitantes usan el sitio web, como qué páginas
                  visitan con más frecuencia.
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Google Analytics para análisis de tráfico</li>
                  <li>Cookies de seguimiento de errores</li>
                  <li>Cookies de tiempo de carga de página</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">2.3 Cookies de Funcionalidad</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Estas cookies permiten que el sitio web recuerde las elecciones que haces para proporcionar
                  funcionalidad mejorada y personalización.
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Preferencias de tema (modo claro/oscuro)</li>
                  <li>Configuración de búsqueda guardada</li>
                  <li>Historial de navegación reciente</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">2.4 Cookies de Publicidad</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Estas cookies se utilizan para mostrar anuncios relevantes para ti y tus intereses.
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Google AdSense para publicidad personalizada</li>
                  <li>Cookies de redes sociales para compartir contenido</li>
                  <li>Cookies de remarketing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">3. Cookies de Terceros</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Google Analytics:</strong> Para analizar el uso del sitio web
                  </li>
                  <li>
                    <strong>Google AdSense:</strong> Para mostrar anuncios relevantes
                  </li>
                  <li>
                    <strong>Redes Sociales:</strong> Facebook, Twitter, Instagram para botones de compartir
                  </li>
                  <li>
                    <strong>CDN:</strong> Para entregar contenido de manera más rápida
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">4. Duración de las Cookies</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">Las cookies pueden ser:</p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Cookies de sesión:</strong> Se eliminan cuando cierras el navegador
                  </li>
                  <li>
                    <strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante un período específico o
                    hasta que las elimines manualmente
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">5. Cómo Controlar las Cookies</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están
                  en tu dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen.
                </p>

                <h3 className="mb-3 text-xl font-semibold">Configuración del Navegador</h3>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                  </li>
                  <li>
                    <strong>Edge:</strong> Configuración → Privacidad → Cookies
                  </li>
                </ul>

                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Ten en cuenta que si bloqueas o eliminas las cookies, algunas funciones del sitio pueden no funcionar
                  correctamente.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">6. Cookies y Dispositivos Móviles</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  En dispositivos móviles, puedes gestionar las cookies a través de la configuración de tu navegador
                  móvil. También puedes desactivar el seguimiento publicitario en la configuración de tu dispositivo:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>iOS:</strong> Ajustes → Privacidad → Publicidad → Limitar seguimiento
                  </li>
                  <li>
                    <strong>Android:</strong> Ajustes → Google → Anuncios → Desactivar personalización
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">7. Actualizaciones de esta Política</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestras prácticas
                  o por razones legales. Te recomendamos revisar esta página regularmente.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">8. Más Información</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en:
                </p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:cookies@appstore.com" className="text-primary hover:underline">
                    cookies@appstore.com
                  </a>
                </p>
                <p className="mt-4 text-muted-foreground">
                  Para más información sobre privacidad, consulta nuestra{" "}
                  <a href="/privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </p>
              </section>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
