import Link from "next/link"
import { Send, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary-foreground">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">AppStore</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Tu fuente confiable para descargar las mejores aplicaciones y juegos modificados para Android.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Síguenos en:</span>
              <a
                href="https://t.me/appstore_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0088cc] text-white transition-transform hover:scale-110 hover:shadow-lg hover:shadow-[#0088cc]/50"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/juegos" className="text-muted-foreground transition-colors hover:text-primary">
                  Juegos
                </Link>
              </li>
              <li>
                <Link href="/categoria/música" className="text-muted-foreground transition-colors hover:text-primary">
                  Música
                </Link>
              </li>
              <li>
                <Link href="/categoria/video" className="text-muted-foreground transition-colors hover:text-primary">
                  Video
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/fotografía"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Fotografía
                </Link>
              </li>
              <li>
                <Link href="/categoria/social" className="text-muted-foreground transition-colors hover:text-primary">
                  Redes Sociales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-muted-foreground transition-colors hover:text-primary">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidad" className="text-muted-foreground transition-colors hover:text-primary">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground transition-colors hover:text-primary">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-primary">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/descargo" className="text-muted-foreground transition-colors hover:text-primary">
                  Descargo de Responsabilidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">© 2025 AppStore. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:contacto@appstore.com" className="hover:text-primary">
                contacto@appstore.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
