import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Zap, Shield, Code, Globe, Rocket } from "lucide-react"

const features = [
  {
    icon: Terminal,
    title: "Simple CLI Generator",
    description: "Intuitive command-line interface that gets you started in seconds",
  },
  {
    icon: Code,
    title: "Multiple Templates",
    description: "Basic Node.js, REST API, GraphQL, and TypeScript project templates",
  },
  {
    icon: Shield,
    title: "Batteries Included",
    description: "Pre-configured linting, environment setup, logging, and security",
  },
  {
    icon: Rocket,
    title: "Ready to Deploy",
    description: "Production-ready configuration with Docker and CI/CD examples",
  },
  {
    icon: Zap,
    title: "Live Reload",
    description: "Hot reloading during development for faster iteration",
  },
  {
    icon: Globe,
    title: "ESM Ready",
    description: "Modern ES modules support with backward compatibility",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Build</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Nodon comes with all the tools and configurations you need to build modern Node.js applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <feature.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
