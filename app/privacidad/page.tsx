import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacidadPage() {
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

          <h1 className="mb-6 text-4xl font-bold">Política de Privacidad</h1>
          <p className="mb-8 text-muted-foreground">Última actualización: 23 de octubre de 2025</p>

          <Card className="p-8">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">1. Introducción</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  En AppStore, nos comprometemos a proteger tu privacidad y garantizar la seguridad de tu información
                  personal. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu
                  información cuando utilizas nuestro sitio web y servicios.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">2. Información que Recopilamos</h2>
                <h3 className="mb-3 text-xl font-semibold">2.1 Información que nos proporcionas</h3>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Dirección de correo electrónico cuando te suscribes a nuestro boletín</li>
                  <li>Comentarios y opiniones que compartes en nuestro sitio</li>
                  <li>Información de contacto cuando nos envías consultas</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">2.2 Información recopilada automáticamente</h3>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Dirección IP y ubicación geográfica aproximada</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de navegación</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">3. Cómo Usamos tu Información</h2>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  Utilizamos la información recopilada para los siguientes propósitos:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Personalizar tu experiencia en el sitio</li>
                  <li>Enviar actualizaciones y notificaciones sobre nuevas aplicaciones</li>
                  <li>Responder a tus consultas y solicitudes de soporte</li>
                  <li>Analizar el uso del sitio para mejorar nuestro contenido</li>
                  <li>Prevenir fraudes y garantizar la seguridad del sitio</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">4. Compartir Información</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes
                  circunstancias:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Con proveedores de servicios que nos ayudan a operar el sitio (hosting, análisis, etc.)</li>
                  <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
                  <li>Con tu consentimiento explícito</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">5. Cookies y Tecnologías de Seguimiento</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Puedes controlar el uso de
                  cookies a través de la configuración de tu navegador. Para más información, consulta nuestra{" "}
                  <a href="/cookies" className="text-primary hover:underline">
                    Política de Cookies
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">6. Seguridad de los Datos</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso
                  no autorizado, pérdida o alteración. Sin embargo, ningún método de transmisión por Internet es 100%
                  seguro.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">7. Tus Derechos</h2>
                <p className="mb-3 leading-relaxed text-muted-foreground">Tienes derecho a:</p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">8. Menores de Edad</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Nuestro sitio no está dirigido a menores de 13 años. No recopilamos intencionalmente información de
                  menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">9. Cambios a esta Política</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios
                  significativos publicando la nueva política en esta página con una fecha de actualización revisada.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">10. Contacto</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:
                </p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:privacidad@appstore.com" className="text-primary hover:underline">
                    privacidad@appstore.com
                  </a>
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
