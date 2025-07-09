"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/magicui/magic-card"
import { Terminal, Server, Database, Code } from "lucide-react"

const templates = [
  {
    id: "basic",
    name: "Basic Node.js",
    icon: Terminal,
    color: "bg-emerald-500",
    description: "Simple Node.js application with essential configurations",
    features: ["ES Modules", "Dotenv", "Nodemon", "Jest", "ESLint"],
    command: "nodon create my-app --template basic",
    preview: `
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Nodon!');
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
`,
  },
  {
    id: "rest",
    name: "REST API",
    icon: Server,
    color: "bg-blue-500",
    description: "Express.js REST API with middleware and routing",
    features: ["Express.js", "JWT Auth", "Middleware", "Swagger", "Rate Limiting"],
    command: "nodon create my-api --template rest",
    preview: `
import express from 'express';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import { errorHandler } from './middleware/error.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorHandler);

export default app;
`,
  },
  {
    id: "graphql",
    name: "GraphQL Server",
    icon: Database,
    color: "bg-purple-500",
    description: "Apollo GraphQL server with schema and resolvers",
    features: ["Apollo Server", "GraphQL", "Type Definitions", "Resolvers", "Context"],
    command: "nodon create my-graphql --template graphql",
    preview: `
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(\`🚀 Server ready at \${url}\`);
`,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: Code,
    color: "bg-cyan-500",
    description: "Full TypeScript setup with type definitions",
    features: ["TypeScript", "Type Definitions", "TSConfig", "ESLint", "Jest"],
    command: "nodon create my-ts-app --template typescript",
    preview: `
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

interface User {
  id: number;
  name: string;
  email: string;
}

app.get('/users', (req: Request, res: Response) => {
  const users: User[] = [
    { id: 1, name: 'John', email: 'john@example.com' }
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
`,
  },
]

export function TemplateShowcase() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0])

  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Template</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start with the perfect foundation for your Node.js project
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Template Selector */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setActiveTemplate(template)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start space-x-4",
                    activeTemplate.id === template.id
                      ? "bg-slate-800/80 border border-slate-700"
                      : "bg-slate-900/50 border border-slate-800 hover:bg-slate-800/50",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                      template.color,
                    )}
                  >
                    <template.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{template.name}</h3>
                    <p className="text-sm text-slate-400">{template.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Template Preview */}
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
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div
                          className={cn("w-10 h-10 rounded-lg flex items-center justify-center", activeTemplate.color)}
                        >
                          <activeTemplate.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{activeTemplate.name}</h3>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Code Preview */}
                    <div className="bg-slate-950 rounded-lg p-4 mb-6 overflow-x-auto">
                      <pre className="text-sm text-slate-300 font-mono">
                        <code>{activeTemplate.preview}</code>
                      </pre>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Included Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeTemplate.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Command */}
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-sm text-emerald-400 font-mono">{activeTemplate.command}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-white"
                        onClick={() => navigator.clipboard.writeText(activeTemplate.command)}
                      >
                        Copy
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
