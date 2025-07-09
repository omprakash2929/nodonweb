const sponsors = [
  { name: "Vercel", logo: "/placeholder.svg?height=40&width=120" },
  { name: "GitHub", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Node.js Foundation", logo: "/placeholder.svg?height=40&width=120" },
  { name: "npm", logo: "/placeholder.svg?height=40&width=120" },
  { name: "MongoDB", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Redis", logo: "/placeholder.svg?height=40&width=120" },
]

export function SponsorsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by the Community</h2>
          <p className="text-slate-400 text-lg">
            Supported by leading companies and organizations in the Node.js ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
