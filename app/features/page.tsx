import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Terminal,
  Shield,
  Zap,
  Globe,
  Rocket,
  GitBranch,
  Settings,
  Database,
  CheckCircle,
  ArrowRight,
  Github,
  Layers,
  Server,
  RefreshCw,
  Target,
  Wrench,
  Package,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { ScriptCopyButton } from "@/components/magicui/script-copy-button"
import { DocsNavbar } from "@/components/docs-navbar"

const mainFeatures = [
  {
    icon: Zap,
    title: "Blazing Fast Setup",
    description:
      "Spin up production-ready Node.js apps in seconds with zero configuration. Focus on writing code, not boilerplate.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Security best practices built-in. All templates follow modern security guidelines to help keep your project safe from day one.",
    gradient: "from-red-400 to-red-600",
  },
  {
    icon: Target,
    title: "Modern Standards",
    description:
      "All project structures are designed to align with the latest development standards, so you're always building with confidence.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Wrench,
    title: "Flexible Project Types",
    description:
      "Nodon provides a wide range of templates — from simple Node.js apps to REST APIs, GraphQL servers, monorepos, and microservices. Start small, scale infinitely.",
    gradient: "from-purple-400 to-purple-600",
  },
]

const scalabilityFeatures = [
  "Monorepo with shared utilities",
  "Multi-service microservices setup",
  "Type-safe APIs with TypeScript",
  "CI/CD friendly project structures",
]

const developerExperience = [
  "Instant hot reload during development",
  "Pre-configured ESLint & Prettier",
  "TypeScript-ready templates",
  "Ready-to-use testing setups (Jest)",
]

const zeroConfigFeatures = [
  "ESLint & Prettier",
  "TypeScript",
  "Git Ignore",
  "Project Scripts",
  "Authentication Ready (Optional)",
]

const deploymentTargets = ["Local Development", "Cloud Deployments (Vercel, Render, DigitalOcean)", "CI/CD Pipelines"]

const templates = [
  {
    name: "Basic Node.js App",
    description: "Quick scripts, CLI tools, basic projects",
    icon: Terminal,
    color: "text-emerald-400",
  },
  {
    name: "REST API (Express)",
    description: "API servers with TypeScript, Auth, Swagger",
    icon: Server,
    color: "text-blue-400",
  },
  {
    name: "GraphQL Server",
    description: "Type-safe GraphQL APIs with Apollo Server",
    icon: Database,
    color: "text-purple-400",
  },
  {
    name: "Monorepo Starter",
    description: "Projects with shared components & multiple packages",
    icon: Layers,
    color: "text-orange-400",
  },
  {
    name: "Microservices Starter",
    description: "Large systems with multiple isolated services",
    icon: GitBranch,
    color: "text-cyan-400",
  },
]

const whyChooseFeatures = [
  "Save setup time",
  "Stay aligned with industry standards",
  "Focus on building features, not configs",
  "Scalable and future-proof projects",
]

const everythingDevelopersLove = [
  "Simple, opinionated project setup",
  "Best practices by default",
  "Scalable for small to enterprise projects",
  "Community-tested templates",
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
       <DocsNavbar />

      <div className="container mx-auto px-4 py-24 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 mt-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="w-8 h-8 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nodon Features</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Everything You Need to Build Modern, Scalable Node.js Applications — Fast.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Built for Scalability */}
        <section className="mb-16">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center space-x-3">
                <Rocket className="w-8 h-8 text-emerald-400" />
                <span>Built for Scalability</span>
              </CardTitle>
              <p className="text-slate-400">Out-of-the-box support for scalable architectures, including:</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {scalabilityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hot Reload & DX Boost */}
        <section className="mb-16">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center space-x-3">
                <RefreshCw className="w-8 h-8 text-blue-400" />
                <span>Hot Reload & DX Boost</span>
              </CardTitle>
              <p className="text-slate-400">Developer experience is our priority:</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {developerExperience.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Zero Configuration */}
        <section className="mb-16">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center space-x-3">
                <Settings className="w-8 h-8 text-purple-400" />
                <span>Zero Configuration</span>
              </CardTitle>
              <p className="text-slate-400">
                Skip manual setup. Nodon generates your project with all essential tools and configurations pre-applied:
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {zeroConfigFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Works Anywhere */}
        <section className="mb-16">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center space-x-3">
                <Globe className="w-8 h-8 text-cyan-400" />
                <span>Works Anywhere</span>
              </CardTitle>
              <p className="text-slate-400">All Nodon templates are designed to run seamlessly in:</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {deploymentTargets.map((target, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{target}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Everything Developers Love */}
        <section className="mb-16">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center space-x-3">
                <Package className="w-8 h-8 text-pink-400" />
                <span>Everything Developers Love</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {everythingDevelopersLove.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Supported Project Types */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-2">
              <span>✨</span>
              <span>Supported Project Types</span>
            </h2>
          </div>

          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-6 text-white font-semibold text-lg">Template</th>
                    <th className="text-left p-6 text-white font-semibold text-lg">Ideal for</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {templates.map((template, index) => (
                    <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center space-x-3">
                          <template.icon className={`w-6 h-6 ${template.color}`} />
                          <span className="text-white font-medium">{template.name}</span>
                        </div>
                      </td>
                      <td className="p-6 text-slate-300">{template.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Why Choose Nodon */}
        <section className="mb-16">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center space-x-3">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <span>Why Choose Nodon?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Start Building Today */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Rocket className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-white">Start Building Today</h2>
              </div>

              <ScriptCopyButton command="npx create-nodon@latest my-app" className="max-w-md mx-auto mb-6" />

              <p className="text-slate-300 text-lg mb-6">
                No more boilerplate. Just modern Node.js projects, ready to deploy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                >
                  <Link href="/guide" className="flex items-center space-x-2">
                    <span>Get Started Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <Link href="https://github.com/omprakash2929/Nodon"  className="flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
