"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/#aplicaciones"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Aplicaciones
            </a>
            <a
              href="/#juegos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Juegos
            </a>
            <a
              href="/#categorias"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Categorías
            </a>
            <Link
              href="/privacidad"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacidad
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-4 pb-4 md:hidden">
            <a
              href="/#aplicaciones"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Aplicaciones
            </a>
            <a
              href="/#juegos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Juegos
            </a>
            <a
              href="/#categorias"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Categorías
            </a>
            <Link
              href="/privacidad"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacidad
            </Link>
            <Link
              href="/cookies"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookies
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
