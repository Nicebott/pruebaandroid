"use client"

import type React from "react"

import { useState } from "react"
import { Search, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buscando:", searchQuery)
  }

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        {/* Animated gaming icons */}
        <div className="absolute left-[10%] top-[20%] animate-float">
          <svg className="h-16 w-16 text-primary/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18V6Z" />
            <circle cx="12" cy="10" r="1.5" />
            <circle cx="12" cy="14" r="1.5" />
          </svg>
        </div>

        <div className="absolute right-[15%] top-[30%] animate-float-delayed">
          <svg className="h-20 w-20 text-accent/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        <div className="absolute bottom-[25%] left-[20%] animate-float">
          <svg className="h-12 w-12 text-primary/15" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        <div className="absolute bottom-[20%] right-[10%] animate-float-delayed">
          <svg className="h-14 w-14 text-accent/15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
        </div>

        <div className="absolute left-[60%] top-[15%] animate-float">
          <svg className="h-10 w-10 text-primary/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 12C17.5 14.4853 15.4853 16.5 13 16.5C10.5147 16.5 8.5 14.4853 8.5 12C8.5 9.51472 10.5147 7.5 13 7.5C15.4853 7.5 17.5 9.51472 17.5 12Z" />
            <path d="M6 12C6 8.68629 8.68629 6 12 6V18C8.68629 18 6 15.3137 6 12Z" />
          </svg>
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Apps y Juegos Gratis para tu Android
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground sm:text-xl">
            Encuentra lo mejor en Aplicaciones premium y Juegos modificados APK para Android. ¡Gracias por preferirnos!
          </p>

          <form onSubmit={handleSearch} className="mx-auto mb-8 flex max-w-2xl gap-2">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Busca una aplicación o juego..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 bg-card pr-4 text-base"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8 text-base font-semibold">
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </form>

          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">Síguenos en:</span>
            <a
              href="https://t.me/appstore_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0088cc] text-white transition-transform hover:scale-110 hover:shadow-lg hover:shadow-[#0088cc]/50"
              aria-label="Telegram"
            >
              <Send className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
