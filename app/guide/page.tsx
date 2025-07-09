import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Terminal,
  ArrowRight,
  CheckCircle,
  Code,
  Zap,
  Shield,
  Server,
  Database,
  Layers,
  GitBranch,
  MessageCircle,
  Github,
  Twitter,
  ExternalLink,
  Rocket,
  Settings,
  TestTube,
} from "lucide-react"
import Link from "next/link"
import { DocsNavbar } from "@/components/docs-navbar"
import { ScriptCopyButton } from "@/components/magicui/script-copy-button"

export default function GuidePage() {
  const sidebarSections = [
    {
      title: "Introduction",
      items: [
        { name: "Getting Started", href: "#getting-started", active: true },
        { name: "Philosophy", href: "#philosophy" },
        { name: "Why Nodon", href: "#why-nodon" },
      ],
    },
    {
      title: "Guide",
      items: [
        { name: "Features", href: "#features" },
        { name: "Templates", href: "#templates" },
        { name: "Project Examples", href: "#examples" },
        { name: "Best Practices", href: "#best-practices" },
        { name: "Configuration", href: "#configuration" },
      ],
    },
    {
      title: "Templates",
      items: [
        { name: "Basic Node.js", href: "#basic-template" },
        { name: "Basic Type script", href: "#basic-template-ts" },
        { name: "Express REST API", href: "#basic-template-express-rest" },
        { name: "Type scriptREST API", href: "#basic-template-express-rest-ts" },
        { name: "GraphQL Server", href: "#basic-template-graphql-api" },
        { name: "Microservices", href: "#microservices-template" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Contributing", href: "#contributing" },
        { name: "Discord", href: "#discord" },
        { name: "FAQ", href: "#faq" },
      ],
    },
  ]

  const onThisPage = [
    { name: "Overview", href: "#overview" },
    { name: "Quick Start", href: "#quick-start" },
    { name: "Templates", href: "#templates" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Features", href: "#features" },
    { name: "Examples", href: "#examples" },
    { name: "Contributing", href: "#contributing" },
    { name: "Community", href: "#community" },
    { name: "FAQ", href: "#faq" },
  ]

  const templates = [
    {
      name: "Basic Node.js App",
      description: "Minimal Node project with essential tooling",
      icon: Terminal,
      command: "npx create-nodon@latest my-app --template basic-node",
    },
    {
      name: "REST API with Express",
      description: "RESTful API with Express, TypeScript, Auth",
      icon: Server,
      command: "npx create-nodon@latest my-app --template basic-ts",
    },
    {
      name: "GraphQL Server Setup",
      description: "Apollo GraphQL Server with Type Safety",
      icon: Database,
      command: "npx create-nodon@latest my-app --template graphql-api-ts",
    },
    {
      name: "Microservices Starter",
      description: "Scalable microservices with independent services",
      icon: GitBranch,
      command: "npx create-nodon@latest my-app --template microservices",
    },
  ]

  const features = [
    { name: "TypeScript-ready Templates", icon: Code },
    { name: "Pre-configured ESLint & Prettier", icon: Settings },
    { name: "Hot Reload for Development", icon: Zap },
    { name: "Out-of-the-box Testing (Jest)", icon: TestTube },
    { name: "Optional Authentication & API setup", icon: Shield },
    { name: "Monorepo & Microservice Architecture", icon: Layers },
    { name: "CI/CD Ready Structures", icon: GitBranch },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
      <DocsNavbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-slate-700/50 bg-slate-900/30 backdrop-blur-sm">
          <div className="p-6">
            <div className="space-y-6">
              {sidebarSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          className={`block text-sm py-1 px-2 rounded transition-colors ${
                            item.active
                              ? "text-emerald-400 bg-emerald-500/10 font-medium"
                              : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                          }`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 lg:mr-64 pt-16">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo/logo.png" alt="Nodon" className="w-14 h-14" />
                <h1 className="text-4xl font-bold text-white">Nodon Guide</h1>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">🚀 v1.0</Badge>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                The fastest way to bootstrap modern Node.js applications with production-ready templates, minimal
                configuration, and built-in best practices.
              </p>
            </div>

            {/* Overview */}
            <section id="overview" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Nodon (pronounced "no-don", like "node-on") is a build tool that aims to provide a faster and leaner
                  development experience for modern Node.js projects. It consists of two major parts:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      A CLI tool that provides <strong className="text-white">instant project scaffolding</strong> with
                      battle-tested templates
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      A development server with <strong className="text-white">hot reload</strong>, pre-configured to
                      work with modern Node.js features
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Quick Start in Seconds</h2>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-3">Install the CLI globally <span className="text-blue-500"> (optional)</span></h4>
                      <ScriptCopyButton command="npm install -g nodon" />
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Create a new project</h4>
                      <ScriptCopyButton command="npm create-nodon@latest my-app" />
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Start development</h4>
                      <div className="space-y-2">
                        <ScriptCopyButton command="cd my-app" />
                        <ScriptCopyButton command="npm run dev" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Pick from templates like:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {templates.slice(0, 4).map((template, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">{template.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/features"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center space-x-1"
                  >
                    <span>See all templates on nodon.dev</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Why Nodon */}
            <section id="why-nodon" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Nodon?</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Modern Node.js development often involves repetitive setup, boilerplate, and configuration headaches.
                  Nodon solves this by offering:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Battle-tested templates</h4>
                        <p className="text-slate-400 text-sm">For every use case</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Zero-configuration</h4>
                        <p className="text-slate-400 text-sm">Project scaffolding</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Best practices by default</h4>
                        <p className="text-slate-400 text-sm">ESLint, Prettier, TypeScript, Testing</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Layers className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Scalable structures</h4>
                        <p className="text-slate-400 text-sm">For monorepos & microservices</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Rocket className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Lightning-fast</h4>
                        <p className="text-slate-400 text-sm">Project bootstrapping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Philosophy */}
            <section id="philosophy" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Project Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-emerald-400" />
                      <span>Simplicity First</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      We believe setting up projects should be instant. Nodon abstracts the complexity so you can focus
                      on building.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      <span>Best Practices by Default</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Security, code quality, and developer experience are baked in, following the latest community
                      standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Layers className="w-5 h-5 text-emerald-400" />
                      <span>Flexibility & Scalability</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      From basic scripts to complex monorepos and microservices — Nodon adapts to your project size.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Code className="w-5 h-5 text-emerald-400" />
                      <span>Familiar Tech Stack</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Powered by Node.js, TypeScript, and modern tooling you're already familiar with.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Features Overview */}
            <section id="features" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Features Overview</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg backdrop-blur-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Available Templates */}
            <section id="templates" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Available Templates</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-slate-700/50 rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="text-left p-4 text-white font-semibold border-b border-slate-700/50">Template</th>
                      <th className="text-left p-4 text-white font-semibold border-b border-slate-700/50">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates.map((template, index) => (
                      <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <template.icon className="w-5 h-5 text-emerald-400" />
                            <span className="text-white font-medium">{template.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-slate-300">{template.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Examples */}
            <section id="examples" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Project Examples</h2>

              <div className="space-y-8">
                <div id="basic-template">
                  <h3 className="text-xl font-semibold text-white mb-4">🟢 Basic Project Example</h3>
                  <ScriptCopyButton command="npx create-nodon@latest my-app --template basic-node" className="mb-4" />
                  <p className="text-slate-300 mb-4">Navigate and start:</p>
                 <Card className="bg-slate-950/50 border-slate-700/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`my-app/
├── index.js            # Entry point of the application
├── package.json        # Project metadata and dependencies
├── .gitignore          # Files to exclude from git
`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                <div id="basic-template-ts">
                  <h3 className="text-xl font-semibold text-white mb-4">🔵 Basic Node.js + TypeScript (basic-ts)</h3>
                  <ScriptCopyButton command="npx create-nodon@latest my-app --template basic-ts" className="mb-4" />
                  <p className="text-slate-300 mb-4">Navigate and start:</p>
                  <Card className="bg-slate-950/50 border-slate-700/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`my-app/
├── src/
│   └── index.ts        # Entry point (TypeScript)
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and dependencies
├── .gitignore          # Files to exclude from git
`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                <div id="basic-template-express-rest">
                  <h3 className="text-xl font-semibold text-white mb-4">🟠 Advanced REST API (Node + Express)</h3>
                  <ScriptCopyButton command="npx create-nodon@latest my-app --template express-rest-api" className="mb-4" />
                  <p className="text-slate-300 mb-4">Navigate and start:</p>
                   <Card className="bg-slate-950/50 border-slate-700/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`my-app/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── db/             # Database connection logic
│   ├── middlewares/    # Express middlewares
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── app.js          # Express app setup
├── .env.example        # Example environment variables
├── .gitignore          # Files to exclude from git
├── package.json        # Project metadata and dependencies
`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                <div id="basic-template-express-rest-ts">
                  <h3 className="text-xl font-semibold text-white mb-4">🔵 Advanced REST API (Express + TypeScript)</h3>
                  <ScriptCopyButton command="npx create-nodon@latest my-app --template express-rest-ts" className="mb-4" />
                  <p className="text-slate-300 mb-4">Navigate and start:</p>
                   <Card className="bg-slate-950/50 border-slate-700/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`my-app/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── db/             # Database connection logic
│   ├── middlewares/    # Express middlewares
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── app.ts          # Express app setup (TypeScript)
├── .env.example        # Example environment variables
├── .gitignore          # Files to exclude from git
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                <div id="basic-template-graphql-api">
                  <h3 className="text-xl font-semibold text-white mb-4">🔴 GraphQL API Server (Express + TypeScript)</h3>
                  <ScriptCopyButton command="npx create-nodon@latest my-app --template graphql-api-ts" className="mb-4" />
                  <p className="text-slate-300 mb-4">Navigate and start:</p>
                 <Card className="bg-slate-950/50 border-slate-700/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`my-app/
├── src/
│   ├── config/         # Configuration files
│   ├── db/             # Database connection logic
│   ├── graphql/        # GraphQL schema and resolvers
│   ├── middlewares/    # Express middlewares
│   ├── utils/          # Utility functions
│   └── server.ts       # Express & Apollo Server setup
├── .env.example        # Example environment variables
├── .gitignore          # Files to exclude from git
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                <div id="microservices-template">
                  <h3 className="text-xl font-semibold text-white mb-4">🟠 Microservices Example</h3>
                  <ScriptCopyButton
                    command="npx create-nodon@latest my-app --template microservices"
                    className="mb-4"
                  />
                  <p className="text-slate-300 mb-4">Bootstraps independent services with shared utilities:</p>
                  <Card className="bg-slate-950/50 border-slate-700/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`my-app/
├── auth-service/       # Authentication microservice
├── gateway/            # API Gateway or entry point
├── shared/             # Shared libraries and utilities
├── user-service/       # User management microservice
├── .gitignore          # Files to exclude from git
├── docker-compose.yml  # Multi-container Docker setup
├── cli.ts              # CLI setup to run services
`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                 <p className="text-slate-300 mb-4">Navigate and start:</p>
                 <div className="space-y-2">
                    <ScriptCopyButton command="cd my-app" />
                    <ScriptCopyButton command="npm run dev" />
                  </div>
              </div>
            </section>

            {/* Contributing */}
            <section id="contributing" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Contributing</h2>
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-slate-300 mb-4">
                    We love contributions! Help improve templates or suggest new ones:
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Link href="https://github.com/omprakash2929/Nodon" className="flex items-center space-x-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Community */}
            <section id="community" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Community</h2>
              <p className="text-slate-300 mb-6">
                Need help or want to showcase your project? Join the Nodon community:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white font-semibold">Discord Server</h3>
                    </div>
                    <p className="text-slate-400 mb-4">Join our community for help and discussions</p>
                    <Button
                      variant="outline"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                    >
                      <Link href="https://discord.gg/32QKxVcG">Join Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Twitter className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white font-semibold">Follow on Twitter</h3>
                    </div>
                    <p className="text-slate-400 mb-4">Stay updated with the latest news</p>
                    <Button
                      variant="outline"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                    >
                      <Link href="https://x.com/omprakash29_">@nodon_dev</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">FAQ</h2>
              <div className="space-y-6">
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Q: Can I customize templates?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">Yes! Templates are designed to be modified to fit your needs.</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Q: Does Nodon support CI/CD?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Microservice & Monorepo templates are CI/CD ready. More integrations coming soon.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Q: How fast is Nodon?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">Bootstrapping takes seconds — forget about hours of manual setup.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Ready to Build */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-emerald-500/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to Build?</h2>
                  <p className="text-slate-300 mb-6">Kickstart your next Node.js project today:</p>
                  <ScriptCopyButton command="npm create-nodon@latest my-app" className="max-w-md mx-auto mb-6" />
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Link href="/features" className="flex items-center space-x-2">
                        <span>Explore Features</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600/50 text-slate-300 hover:bg-slate-800/50 bg-transparent"
                    >
                      <Link href="https://github.com/omprakash2929/Nodon" className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <aside className="hidden xl:block w-64 fixed right-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto border-l border-slate-700/50 bg-slate-900/30 backdrop-blur-sm">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">On this page</h3>
            <ul className="space-y-2">
              {onThisPage.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block text-sm text-slate-400 hover:text-white transition-colors py-1">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
