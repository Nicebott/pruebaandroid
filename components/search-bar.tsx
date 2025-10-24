"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchBarProps {
  initialQuery?: string
}

export function SearchBar({ initialQuery = "" }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
      <Input
        type="text"
        placeholder="Busca una aplicación o juego..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-14 rounded-full border-2 border-secondary bg-card pr-14 text-base shadow-lg transition-all focus:border-primary focus:shadow-xl focus:shadow-primary/20"
      />
      <Button type="submit" size="icon" className="absolute right-1 top-1 h-12 w-12 rounded-full">
        <Search className="h-5 w-5" />
      </Button>
    </form>
  )
}
