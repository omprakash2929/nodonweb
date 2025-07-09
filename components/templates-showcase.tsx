"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/magicui/magic-card"
import { Terminal, Server, Database, Layers, Zap, Copy, Check, ChevronDown } from "lucide-react"

const templates = [
  {
    id: "basic",
    name: "Basic Node.js App",
    mobileTitle: "Basic Node.js",
    icon: Terminal,
    color: "bg-emerald-500",
    description: "Simple Node.js application with essential configurations and modern tooling.",
    mobileDescription: "Simple Node.js app setup",
    features: ["ES Modules", "Hot Reload", "ESLint"],
    mobileFeatures: ["ES Modules", "Hot Reload", "Linting"],
    command: " npx create-nodon@latest my-app --template basic-node",
    mobileCommand: " npx create-nodon@latest my-app --template basic-node",
    preview: `/// app/index.js
import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from Nodon Basic Node.js App!\n')
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
`,
    mobilePreview: `// app/index.js
import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from Nodon Basic Node.js App!\n')
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
`,
    stats: { files: "📁 12 files", size: "💾 2.1 MB", time: "8s" },
  },
  {
    id: "rest",
    name: "REST API with Express & TypeScript",
    mobileTitle: "REST API",
    icon: Server,
    color: "bg-blue-500",
    description: "Production-ready REST API with Express.js, TypeScript, and authentication.",
    mobileDescription: "REST API with TypeScript",
    features: ["Express.js", "TypeScript", "JWT Auth", "Swagger", "Rate Limiting"],
    mobileFeatures: ["Express.js", "TypeScript", "JWT Auth", "Swagger"],
    command: "npx create-nodon@latest my-app --template basic-ts",
    mobileCommand: "npx create-nodon@latest my-app --template basic-ts",
    preview: `// app/api/users.ts
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

interface User {
  id: number
  name: string
  email: string
}

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' }
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const newUser: User = { id: Date.now(), ...req.body }
  users.push(newUser)
  res.status(201).json(newUser)
})

app.listen(4000, () => {
  console.log('REST API running on http://localhost:4000')
})
`,
    mobilePreview: `// app/api/users.ts
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

interface User {
  id: number
  name: string
  email: string
}

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' }
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const newUser: User = { id: Date.now(), ...req.body }
  users.push(newUser)
  res.status(201).json(newUser)
})

app.listen(4000, () => {
  console.log('REST API running on http://localhost:4000')
})
`,
    stats: { files: "📁 24 files", size: "💾 14.2 MB", time: "12s setup time" },
  },
  {
    id: "graphql",
    name: "GraphQL Server Setup",
    mobileTitle: "GraphQL Server",
    icon: Database,
    color: "bg-purple-500",
    description: "Apollo GraphQL server with schema-first approach and type safety.",
    mobileDescription: "GraphQL server with Apollo",
    features: ["Apollo Server", "GraphQL", "Type Definitions", "Resolvers"],
    mobileFeatures: ["Apollo Server", "GraphQL", "Types", "Resolvers"],
    command: "npx create-nodon@latest my-app --template graphql-api-ts",
    mobileCommand: "npx create-nodon@latest my-app --template graphql-api-ts",
    preview: `// app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const typeDefs = \`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    users: [User!]!
  }
\`

const resolvers = {
  Query: {
    users: () => [{ id: '1', name: 'John Doe', email: 'john@example.com' }]
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
export const handler = startServerAndCreateNextHandler(server)`,
    mobilePreview: `// app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server'

const typeDefs = \`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    users: [User!]!
  }
\`

const resolvers = {
  Query: {
    users: () => [
      { 
        id: '1', 
        name: 'John Doe', 
        email: 'john@example.com' 
      }
    ]
  }
}`,
    stats: { files: "📁 18 files", size: "💾 10.8 MB", time: "10s" },
  },
  {
    id: "monorepo",
    name: "Microservices Starter",
    mobileTitle: "Monorepo",
    icon: Layers,
    color: "bg-orange-500",
    description: "Jumpstart scalable, production-ready microservices architecture with Node.js.",
    mobileDescription: "production-ready microservices architecture.",
    features: ["Independent Services", "Shared Utilities", "ESLint", "Scalable Structure"],
    mobileFeatures: ["Independent Services", "Shared Utilities", "ESLint", "Scalable"],
    command: "npx create-nodon@latest my-app --template microservices",
    mobileCommand: "npx create-nodon@latest my-app --template microservices",
    preview: `apps/
├── service-user/
├── service-auth/
├── service-payment/
└── shared/

`,
    mobilePreview: `/apps/
├── service-user/
├── service-auth/
├── service-payment/
└── shared/

`,
    stats: { files: "📁 32 files", size: "💾6.1 MB", time: "13s" },
  },
]

export function TemplatesShowcase() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0])
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [showMobileSelector, setShowMobileSelector] = useState(false)

  const copyCommand = async (command: string) => {
    await navigator.clipboard.writeText(command)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <section className="py-12 md:py-24 px-4 bg-slate-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Supported Templates Showcase</h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Choose from our carefully crafted templates, each optimized for different use cases and ready to deploy
          </p>
        </div>

        {/* Mobile-First Design */}
        <div className="lg:hidden">
          {/* Mobile Template Selector */}
          <div className="mb-6">
            <button
              onClick={() => setShowMobileSelector(!showMobileSelector)}
              className="w-full flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white"
            >
              <div className="flex items-center space-x-3">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", activeTemplate.color)}>
                  <activeTemplate.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{activeTemplate.mobileTitle}</div>
                  <div className="text-xs text-slate-400">{activeTemplate.mobileDescription}</div>
                </div>
              </div>
              <ChevronDown className={cn("w-5 h-5 transition-transform", showMobileSelector && "rotate-180")} />
            </button>

            <AnimatePresence>
              {showMobileSelector && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
                >
                  <div className="p-2 space-y-1">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => {
                          setActiveTemplate(template)
                          setShowMobileSelector(false)
                        }}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3",
                          activeTemplate.id === template.id
                            ? "bg-slate-800/80 border border-emerald-500/30"
                            : "hover:bg-slate-800/50",
                        )}
                      >
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", template.color)}>
                          <template.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm">{template.mobileTitle}</h3>
                          <p className="text-xs text-slate-400">{template.mobileDescription}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Template Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTemplate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MagicCard>
                <div className="p-4">
                  {/* Mobile Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", activeTemplate.color)}>
                      <activeTemplate.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{activeTemplate.mobileTitle}</h3>
                      <p className="text-sm text-slate-400">{activeTemplate.mobileDescription}</p>
                    </div>
                  </div>

                  {/* Mobile Code Preview */}
                  <div className="bg-slate-950 rounded-lg p-3 mb-4 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-slate-500">Code Preview</span>
                    </div>
                    <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
                      <code>{activeTemplate.mobilePreview}</code>
                    </pre>
                  </div>

                  {/* Mobile Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {activeTemplate.mobileFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span className="text-slate-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Stats */}
                  <div className="mb-4 flex items-center justify-between text-xs text-slate-500 bg-slate-900/50 rounded-lg p-3">
                    <span>{activeTemplate.stats.files}</span>
                    <span>{activeTemplate.stats.size}</span>
                    <span className="flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>{activeTemplate.stats.time}</span>
                    </span>
                  </div>

                  {/* Mobile Command */}
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">Terminal Command</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-white h-6 px-2"
                        onClick={() => copyCommand(activeTemplate.mobileCommand)}
                      >
                        {copiedCommand === activeTemplate.mobileCommand ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                    <code className="text-xs text-emerald-400 font-mono block break-all">
                      {activeTemplate.mobileCommand}
                    </code>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Layout (unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* Desktop Template Selector */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setActiveTemplate(template)}
                  className={cn(
                    "w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start space-x-4 border",
                    activeTemplate.id === template.id
                      ? "bg-slate-800/80 border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                      : "bg-slate-900/50 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700",
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg",
                      template.color,
                    )}
                  >
                    <template.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1">{template.name}</h3>
                    <p className="text-sm text-slate-400 mb-3 line-clamp-2">{template.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span>{template.stats.files}</span>
                      <span>{template.stats.size}</span>
                      <span className="flex items-center space-x-1">
                        <Zap className="w-3 h-3" />
                        <span>{template.stats.time}</span>
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Template Preview */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTemplate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MagicCard className="h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={cn("w-12 h-12 rounded-xl flex items-center justify-center", activeTemplate.color)}
                        >
                          <activeTemplate.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{activeTemplate.name}</h3>
                          <p className="text-slate-400">{activeTemplate.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Desktop Code Preview */}
                    <div className="bg-slate-950 rounded-xl p-6 mb-6 overflow-x-auto border border-slate-800">
                      <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                        <code>{activeTemplate.preview}</code>
                      </pre>
                    </div>

                    {/* Desktop Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4">Included Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {activeTemplate.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Command */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                      <code className="text-sm text-emerald-400 font-mono">{activeTemplate.command}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-white"
                        onClick={() => copyCommand(activeTemplate.command)}
                      >
                        {copiedCommand === activeTemplate.command ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="ml-2 text-xs">
                          {copiedCommand === activeTemplate.command ? "Copied!" : "Copy"}
                        </span>
                      </Button>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
