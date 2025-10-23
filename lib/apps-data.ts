export interface App {
  id: string
  name: string
  version: string
  developer: string
  category: string
  rating: number
  downloads: string
  date: string
  image: string
  badge?: string
  description: string
  size: string
  requirements: string
  screenshots: string[]
  features: string[]
  changelog: string[]
}

export const appsData: App[] = [
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    version: "9.0.86.1358",
    developer: "Spotify AB",
    category: "Música",
    rating: 4.8,
    downloads: "1M+",
    date: "15 de octubre de 2025",
    image: "/spotify-logo.png",
    badge: "Premium",
    description:
      "Spotify Premium Mod te permite disfrutar de música sin límites, sin anuncios y con calidad de audio superior. Descarga tus canciones favoritas y escúchalas sin conexión. Accede a millones de canciones y podcasts de todo el mundo.",
    size: "85 MB",
    requirements: "Android 5.0+",
    screenshots: ["/spotify-app-interface.jpg", "/spotify-playlist-vibe.png", "/spotify-player.jpg"],
    features: [
      "Sin anuncios molestos",
      "Calidad de audio premium",
      "Descargas ilimitadas",
      "Saltos ilimitados",
      "Modo offline disponible",
      "Todas las funciones premium desbloqueadas",
    ],
    changelog: [
      "Mejoras en la interfaz de usuario",
      "Corrección de errores menores",
      "Optimización del rendimiento",
      "Nuevas funciones de personalización",
    ],
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    version: "8.41.51",
    developer: "Google LLC",
    category: "Video",
    rating: 4.9,
    downloads: "5M+",
    date: "15 de octubre de 2025",
    image: "/youtube-logo.png",
    badge: "Premium",
    description:
      "YouTube Premium Mod te ofrece una experiencia sin anuncios, reproducción en segundo plano y descargas de videos. Disfruta de YouTube Music Premium incluido y accede a contenido exclusivo de YouTube Originals.",
    size: "125 MB",
    requirements: "Android 6.0+",
    screenshots: ["/youtube-app-home.jpg", "/youtube-video-player.png", "/youtube-music-concept.png"],
    features: [
      "Sin anuncios en videos",
      "Reproducción en segundo plano",
      "Descargas de videos offline",
      "YouTube Music Premium incluido",
      "Acceso a YouTube Originals",
      "Picture-in-Picture habilitado",
    ],
    changelog: [
      "Mejoras en la reproducción de video",
      "Nueva interfaz de descargas",
      "Optimización de batería",
      "Corrección de bugs",
    ],
  },
  {
    id: "netflix-mod",
    name: "Netflix Mod",
    version: "8.115.0",
    developer: "Netflix, Inc.",
    category: "Entretenimiento",
    rating: 4.7,
    downloads: "2M+",
    date: "14 de octubre de 2025",
    image: "/netflix-logo.png",
    badge: "Premium",
    description:
      "Netflix Mod te permite disfrutar de todo el catálogo de Netflix con funciones premium desbloqueadas. Accede a series, películas y documentales en calidad 4K Ultra HD sin restricciones.",
    size: "95 MB",
    requirements: "Android 5.0+",
    screenshots: ["/netflix-home-screen.jpg", "/netflix-movie-player.jpg", "/netflix-series.jpg"],
    features: [
      "Cuenta premium incluida",
      "Calidad 4K Ultra HD",
      "Descargas ilimitadas",
      "Sin anuncios",
      "Múltiples perfiles",
      "Contenido exclusivo",
    ],
    changelog: [
      "Mejoras en streaming 4K",
      "Nueva sección de recomendaciones",
      "Optimización de descargas",
      "Interfaz actualizada",
    ],
  },
  {
    id: "whatsapp-plus",
    name: "WhatsApp Plus",
    version: "20.50.27",
    developer: "WhatsApp LLC",
    category: "Comunicación",
    rating: 4.6,
    downloads: "10M+",
    date: "15 de octubre de 2025",
    image: "/whatsapp-logo.png",
    badge: "Mod",
    description:
      "WhatsApp Plus es una versión modificada de WhatsApp con funciones adicionales y opciones de personalización avanzadas. Disfruta de temas personalizados, mayor privacidad y funciones exclusivas.",
    size: "55 MB",
    requirements: "Android 4.4+",
    screenshots: ["/whatsapp-chat-interface.jpg", "/whatsapp-themes.jpg", "/whatsapp-settings.jpg"],
    features: [
      "Temas personalizados ilimitados",
      "Ocultar estado en línea",
      "Enviar archivos de hasta 1GB",
      "Más emojis y stickers",
      "Anti-borrado de mensajes",
      "Doble check azul desactivable",
    ],
    changelog: [
      "Nuevos temas agregados",
      "Mejoras en privacidad",
      "Optimización de velocidad",
      "Corrección de errores",
    ],
  },
  {
    id: "tiktok-premium",
    name: "TikTok Premium",
    version: "32.5.4",
    developer: "ByteDance Ltd.",
    category: "Redes Sociales",
    rating: 4.7,
    downloads: "500M+",
    date: "15 de octubre de 2025",
    image: "/social/tiktok.png",
    badge: "Nuevo",
    description:
      "TikTok Premium te ofrece una experiencia mejorada con funciones exclusivas. Descarga videos sin marca de agua, sin anuncios y con herramientas de edición avanzadas.",
    size: "145 MB",
    requirements: "Android 5.0+",
    screenshots: ["/tiktok-feed.jpg", "/tiktok-video-editor.jpg", "/generic-social-media-profile.png"],
    features: [
      "Descargas sin marca de agua",
      "Sin anuncios",
      "Herramientas de edición premium",
      "Filtros exclusivos",
      "Estadísticas avanzadas",
      "Modo oscuro mejorado",
    ],
    changelog: [
      "Nuevos efectos y filtros",
      "Mejoras en el editor",
      "Optimización de rendimiento",
      "Nuevas funciones de IA",
    ],
  },
  {
    id: "instagram-plus",
    name: "Instagram Plus",
    version: "310.0.0.42",
    developer: "Meta Platforms",
    category: "Redes Sociales",
    rating: 4.8,
    downloads: "1B+",
    date: "15 de octubre de 2025",
    image: "/instagram-logo.png",
    badge: "Actualizado",
    description:
      "Instagram Plus es una versión mejorada de Instagram con funciones adicionales de privacidad y descarga. Guarda fotos, videos, historias y reels sin que nadie lo sepa.",
    size: "75 MB",
    requirements: "Android 5.0+",
    screenshots: ["/instagram-feed-mockup.png", "/instagram-stories.jpg", "/instagram-reels-compilation.png"],
    features: [
      "Descargar fotos y videos",
      "Guardar historias y reels",
      "Ver historias anónimamente",
      "Zoom en fotos de perfil",
      "Sin anuncios",
      "Temas personalizados",
    ],
    changelog: ["Mejoras en descargas", "Nueva interfaz de reels", "Optimización de velocidad", "Corrección de bugs"],
  },
  {
    id: "telegram-x",
    name: "Telegram X",
    version: "0.25.10",
    developer: "Telegram FZ-LLC",
    category: "Comunicación",
    rating: 4.9,
    downloads: "100M+",
    date: "14 de octubre de 2025",
    image: "/telegram-logo.jpg",
    badge: "Popular",
    description:
      "Telegram X es la versión experimental de Telegram con una interfaz renovada y funciones avanzadas. Disfruta de mensajería rápida, segura y con cifrado de extremo a extremo. Comparte archivos de hasta 2GB y crea grupos de hasta 200,000 miembros.",
    size: "45 MB",
    requirements: "Android 5.0+",
    screenshots: ["/telegram-chat-interface.jpg", "/telegram-channels.jpg", "/telegram-stickers.jpg"],
    features: [
      "Mensajería ultra rápida",
      "Cifrado de extremo a extremo",
      "Archivos hasta 2GB",
      "Grupos de 200K miembros",
      "Canales ilimitados",
      "Stickers y GIFs personalizados",
    ],
    changelog: [
      "Nueva interfaz mejorada",
      "Optimización de velocidad",
      "Nuevas funciones de privacidad",
      "Corrección de errores",
    ],
  },
  {
    id: "clash-royale-mod",
    name: "Clash Royale Mod",
    version: "4.2.0",
    developer: "Supercell",
    category: "Juegos",
    rating: 4.6,
    downloads: "500M+",
    date: "14 de octubre de 2025",
    image: "/clash-royale-logo.jpg",
    badge: "Mod",
    description:
      "Clash Royale Mod te ofrece gemas ilimitadas, oro infinito y todas las cartas desbloqueadas. Construye tu mazo perfecto y domina la arena con las mejores estrategias. Disfruta de batallas épicas en tiempo real contra jugadores de todo el mundo.",
    size: "180 MB",
    requirements: "Android 5.0+",
    screenshots: ["/clash-royale-battle.jpg", "/clash-royale-cards.jpg", "/clash-royale-arena.jpg"],
    features: [
      "Gemas ilimitadas",
      "Oro infinito",
      "Todas las cartas desbloqueadas",
      "Cofres premium gratis",
      "Sin anuncios",
      "Servidor privado incluido",
    ],
    changelog: [
      "Nuevas cartas agregadas",
      "Balance de juego mejorado",
      "Optimización de rendimiento",
      "Nuevos modos de juego",
    ],
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    version: "3.4.0",
    developer: "Tencent Games",
    category: "Juegos",
    rating: 4.5,
    downloads: "1B+",
    date: "13 de octubre de 2025",
    image: "/generic-battle-royale-logo.png",
    badge: "Juego",
    description:
      "PUBG Mobile es el juego de battle royale más popular del mundo. Salta en paracaídas a una isla, busca armas y equipo, y lucha por ser el último en pie. Disfruta de gráficos impresionantes y jugabilidad intensa en partidas de 100 jugadores.",
    size: "750 MB",
    requirements: "Android 5.1.1+",
    screenshots: ["/pubg-gameplay.jpg", "/pubg-lobby.jpg", "/pubg-weapons.jpg"],
    features: [
      "Gráficos HD realistas",
      "Múltiples modos de juego",
      "Mapas variados",
      "Sistema de clanes",
      "Eventos especiales",
      "Personalización de personajes",
    ],
    changelog: [
      "Nuevo mapa agregado",
      "Nuevas armas y vehículos",
      "Mejoras en gráficos",
      "Optimización de rendimiento",
    ],
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    version: "11.8.0",
    developer: "Bytedance Pte. Ltd.",
    category: "Herramientas",
    rating: 4.8,
    downloads: "500M+",
    date: "13 de octubre de 2025",
    image: "/capcut-logo.jpg",
    badge: "Editor",
    description:
      "CapCut Pro es el editor de video profesional más completo para móviles. Crea videos increíbles con efectos especiales, transiciones suaves, filtros premium y herramientas de edición avanzadas. Todas las funciones premium desbloqueadas sin marca de agua.",
    size: "210 MB",
    requirements: "Android 5.0+",
    screenshots: ["/capcut-editor-interface.jpg", "/capcut-effects.jpg", "/capcut-timeline.jpg"],
    features: [
      "Sin marca de agua",
      "Efectos premium desbloqueados",
      "Transiciones profesionales",
      "Filtros y stickers ilimitados",
      "Edición multicapa",
      "Exportación en 4K",
    ],
    changelog: [
      "Nuevos efectos de IA",
      "Mejoras en la línea de tiempo",
      "Optimización de exportación",
      "Nuevos filtros agregados",
    ],
  },
]

export function getAppById(id: string): App | undefined {
  return appsData.find((app) => app.id === id)
}

export function getSimilarApps(currentAppId: string, category: string, limit = 4): App[] {
  return appsData.filter((app) => app.id !== currentAppId && app.category === category).slice(0, limit)
}

export function getAppsByCategory(category: string): App[] {
  return appsData.filter((app) => app.category.toLowerCase() === category.toLowerCase())
}
