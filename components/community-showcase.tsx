"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MagicCard } from "@/components/magicui/magic-card"
import { Github, ExternalLink, Heart } from "lucide-react"

const projects = [
  {
    id: "project1",
    name: "Node API Starter",
    author: "sarah-dev",
    stars: 1243,
    description: "Production-ready REST API starter built with Nodon",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["REST API", "Authentication", "PostgreSQL"],
    github: "https://github.com/sarah-dev/node-api-starter",
  },
  {
    id: "project2",
    name: "GraphQL Microservices",
    author: "devteam-io",
    stars: 876,
    description: "Microservices architecture with GraphQL and Nodon",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["GraphQL", "Microservices", "Docker"],
    github: "https://github.com/devteam-io/graphql-microservices",
  },
  {
    id: "project3",
    name: "Serverless Node Functions",
    author: "clouddev",
    stars: 542,
    description: "Serverless functions template built with Nodon",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Serverless", "AWS Lambda", "TypeScript"],
    github: "https://github.com/clouddev/serverless-node-functions",
  },
  {
    id: "project4",
    name: "Real-time Chat API",
    author: "socketmaster",
    stars: 328,
    description: "WebSocket-based chat API built with Nodon",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["WebSockets", "Real-time", "Socket.io"],
    github: "https://github.com/socketmaster/real-time-chat-api",
  },
]

export function CommunityShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community Showcase</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore amazing projects built by the community using Nodon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <MagicCard
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Heart className="w-4 h-4 fill-current" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-800/70 text-slate-300 text-xs rounded-md border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">by @{project.author}</span>
                    <div className="flex items-center space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/70 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/70 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Animated Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 pointer-events-none"
                      ></motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
