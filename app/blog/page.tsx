import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Code, Users, TrendingUp, BookOpen } from "lucide-react"
import Link from "next/link"
import { DocsNavbar } from "@/components/docs-navbar"

const blogPosts = [
  {
    id: "introducing-nodon",
    title: "Introducing Nodon: The Future of Node.js Project Generation",
    excerpt:
      "Say goodbye to hours of boilerplate setup. Nodon brings you production-ready Node.js projects in seconds with battle-tested templates and modern best practices.",
    content: `
# Introducing Nodon: The Future of Node.js Project Generation

Building modern Node.js applications shouldn't start with hours of configuration and boilerplate setup. That's why we created **Nodon** - a revolutionary project generator that gets you from idea to production-ready code in seconds.

## The Problem We're Solving

Every Node.js developer knows the pain:
- Setting up TypeScript configurations
- Configuring ESLint and Prettier
- Setting up testing frameworks
- Creating proper project structures
- Implementing security best practices

These repetitive tasks eat into valuable development time and often lead to inconsistent project setups across teams.

## Enter Nodon

Nodon eliminates this friction with:

### ⚡ Lightning-Fast Setup
\`\`\`bash
npx create-nodon@latest my-app
cd my-app
npm run dev
\`\`\`

That's it. Your project is ready with hot reload, TypeScript, testing, and all modern tooling configured.

### 🛡️ Security by Default
Every template includes:
- Secure headers configuration
- Input validation
- Authentication scaffolding
- CORS protection
- Rate limiting

### 🏗️ Scalable Architecture
From simple scripts to enterprise microservices:
- Basic Node.js apps
- REST APIs with Express
- GraphQL servers
- Monorepo setups
- Microservices architecture

## What Makes Nodon Different

Unlike other generators, Nodon focuses on:
1. **Zero Configuration** - Everything works out of the box
2. **Modern Standards** - Always up-to-date with latest practices
3. **Flexibility** - Easy to customize and extend
4. **Community-Driven** - Templates tested by real developers

## Get Started Today

Ready to revolutionize your Node.js development workflow?

\`\`\`bash
npx create-nodon@latest my-awesome-project
\`\`\`

Join thousands of developers who've already made the switch to faster, more reliable project setup.

---

*Have questions or want to contribute? Join our [Discord community](https://discord.gg/nodon) or check out our [GitHub repository](https://github.com/nodon/nodon).*
    `,
    author: "Sarah Chen",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2025-01-15",
    readTime: "5 min read",
    tags: ["Announcement", "Getting Started", "Node.js"],
    category: "Product",
    featured: true,
  },
  {
    id: "nodejs-best-practices-2025",
    title: "Node.js Best Practices for 2025: A Complete Guide",
    excerpt:
      "Discover the latest Node.js best practices that every developer should follow in 2025. From security to performance, we cover everything you need to know.",
    content: `
# Node.js Best Practices for 2025: A Complete Guide

As we move into 2025, the Node.js ecosystem continues to evolve rapidly. Here are the essential best practices every Node.js developer should follow.

## 1. Embrace ES Modules

ES Modules are now the standard. Update your \`package.json\`:

\`\`\`json
{
  "type": "module"
}
\`\`\`

## 2. Use TypeScript for Type Safety

TypeScript isn't optional anymore - it's essential for maintainable code:

\`\`\`typescript
interface User {
  id: string
  email: string
  createdAt: Date
}

async function createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
  // Implementation
}
\`\`\`

## 3. Implement Proper Error Handling

Always handle errors gracefully:

\`\`\`typescript
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})
\`\`\`

## 4. Security First

- Use helmet for security headers
- Implement rate limiting
- Validate all inputs
- Keep dependencies updated

## 5. Performance Optimization

- Use clustering for CPU-intensive tasks
- Implement caching strategies
- Optimize database queries
- Use compression middleware

## 6. Testing Strategy

Implement comprehensive testing:
- Unit tests with Jest
- Integration tests
- E2E tests with Playwright
- API testing with Supertest

## Conclusion

Following these practices ensures your Node.js applications are secure, performant, and maintainable. Nodon templates implement all these best practices by default, so you can focus on building features instead of configuration.
    `,
    author: "Marcus Rodriguez",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2025-01-12",
    readTime: "8 min read",
    tags: ["Best Practices", "Node.js", "TypeScript", "Security"],
    category: "Tutorial",
    featured: false,
  },
  {
    id: "rest-vs-graphql-2025",
    title: "REST vs GraphQL in 2025: Which Should You Choose?",
    excerpt:
      "An in-depth comparison of REST and GraphQL APIs in 2025. Learn when to use each approach and how Nodon templates can help you get started quickly.",
    content: `
# REST vs GraphQL in 2025: Which Should You Choose?

The API landscape has evolved significantly, and choosing between REST and GraphQL is more nuanced than ever. Let's break down when to use each approach.

## REST APIs: Still Going Strong

### When to Choose REST:
- Simple CRUD operations
- Caching is important
- Team familiarity
- Mobile apps with limited queries

### REST Best Practices 2025:
\`\`\`typescript
// Modern REST with TypeScript
app.get('/api/users/:id', async (req: Request<{id: string}>, res: Response) => {
  const user = await userService.findById(req.params.id)
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(user)
})
\`\`\`

## GraphQL: The Flexible Alternative

### When to Choose GraphQL:
- Complex data relationships
- Multiple client types
- Real-time subscriptions
- Rapid prototyping

### GraphQL Example:
\`\`\`typescript
const typeDefs = \`
  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }
  
  type Query {
    user(id: ID!): User
  }
\`
\`\`\`

## Performance Considerations

### REST Advantages:
- HTTP caching
- CDN friendly
- Simpler monitoring

### GraphQL Advantages:
- Reduced over-fetching
- Single endpoint
- Strong typing

## Getting Started with Nodon

Nodon makes it easy to start with either approach:

### REST API Template:
\`\`\`bash
npx create-nodon@latest my-api --template rest
\`\`\`

### GraphQL Template:
\`\`\`bash
npx create-nodon@latest my-graphql --template graphql
\`\`\`

Both templates include:
- TypeScript configuration
- Authentication setup
- Testing framework
- Docker configuration
- CI/CD pipelines

## Conclusion

There's no one-size-fits-all answer. Consider your team's expertise, project requirements, and long-term maintenance when choosing. The good news? With Nodon, you can quickly prototype both approaches and see what works best for your use case.
    `,
    author: "Emily Johnson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2025-01-10",
    readTime: "6 min read",
    tags: ["REST", "GraphQL", "API Design", "Comparison"],
    category: "Tutorial",
    featured: true,
  },
  {
    id: "monorepo-microservices-guide",
    title: "Monorepos vs Microservices: A Practical Guide",
    excerpt:
      "Explore the pros and cons of monorepos and microservices architectures. Learn how to choose the right approach for your team and project scale.",
    content: `
# Monorepos vs Microservices: A Practical Guide

Choosing the right architecture for your project can make or break your development experience. Let's explore when to use monorepos vs microservices.

## Monorepos: Unified Development

### Benefits:
- Shared code and utilities
- Consistent tooling
- Atomic commits across services
- Simplified dependency management

### When to Use Monorepos:
- Small to medium teams
- Tightly coupled services
- Shared business logic
- Rapid development cycles

### Nodon Monorepo Template:
\`\`\`bash
npx create-nodon@latest my-monorepo --template monorepo
\`\`\`

Structure:
\`\`\`
apps/
├── web/          # Next.js frontend
├── api/          # Express API
└── admin/        # Admin dashboard

packages/
├── ui/           # Shared UI components
├── utils/        # Shared utilities
└── config/       # Shared configurations
\`\`\`

## Microservices: Independent Scaling

### Benefits:
- Independent deployments
- Technology diversity
- Team autonomy
- Fault isolation

### When to Use Microservices:
- Large teams
- Different scaling requirements
- Independent release cycles
- Complex business domains

### Nodon Microservices Template:
\`\`\`bash
npx create-nodon@latest my-services --template microservices
\`\`\`

Structure:
\`\`\`
services/
├── user-service/     # User management
├── auth-service/     # Authentication
├── payment-service/  # Payment processing
└── notification-service/

shared/
├── types/           # Shared TypeScript types
├── utils/           # Common utilities
└── proto/           # Protocol buffers
\`\`\`

## Making the Right Choice

### Start with Monorepo if:
- Team size < 10 developers
- Services share significant code
- You need rapid iteration
- Deployment complexity is a concern

### Move to Microservices when:
- Team size > 20 developers
- Services have different scaling needs
- You need independent deployments
- You have strong DevOps capabilities

## Hybrid Approach

Many successful companies use a hybrid approach:
- Monorepo for shared libraries
- Separate repositories for services
- Shared tooling and CI/CD

## Conclusion

Both architectures have their place. Start simple with a monorepo and evolve to microservices as your team and requirements grow. Nodon provides templates for both approaches, making it easy to experiment and find what works best for your team.
    `,
    author: "David Kim",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2025-01-08",
    readTime: "7 min read",
    tags: ["Architecture", "Monorepo", "Microservices", "Scaling"],
    category: "Architecture",
    featured: false,
  },
  {
    id: "nodon-community-update",
    title: "Nodon Community Update: 50k Downloads and Growing!",
    excerpt:
      "Celebrating our community milestones and sharing what's coming next for Nodon. Thank you to all our contributors and users!",
    content: `
# Nodon Community Update: 50k Downloads and Growing!

We're thrilled to share some exciting milestones and updates from the Nodon community!

## 🎉 Community Milestones

### 50,000+ Downloads
We've officially crossed 50,000 downloads! This incredible milestone shows the growing adoption of Nodon in the Node.js community.

### 2,800+ GitHub Stars
Our GitHub repository has reached 2,800+ stars, making us one of the fastest-growing Node.js tools.

### 150+ Contributors
Thanks to our amazing community, we now have over 150 contributors helping make Nodon better every day.

## 🚀 Recent Updates

### New Templates
- **Serverless Functions**: Deploy to AWS Lambda, Vercel, and Netlify
- **Discord Bots**: Complete Discord bot setup with slash commands
- **CLI Tools**: Build command-line applications with ease

### Enhanced Features
- Improved TypeScript support
- Better error handling
- Enhanced security configurations
- Updated dependencies

## 📊 Usage Statistics

Our most popular templates:
1. **REST API** (35% of projects)
2. **Basic Node.js** (28% of projects)
3. **GraphQL Server** (18% of projects)
4. **Monorepo** (12% of projects)
5. **Microservices** (7% of projects)

## 🌟 Community Highlights

### Featured Projects
- **TaskFlow API** by @sarah-dev: A project management API built with Nodon's REST template
- **ChatBot Framework** by @alex-codes: A reusable chatbot framework using our microservices template
- **E-commerce Backend** by @shop-builder: A complete e-commerce solution

### Community Contributions
Special thanks to our top contributors:
- @marcus-dev: Enhanced GraphQL templates
- @emily-codes: Improved documentation
- @david-builds: Added Docker optimizations

## 🔮 What's Coming Next

### Q1 2025 Roadmap
- **React Native Templates**: Mobile app development
- **Deno Support**: Modern JavaScript runtime
- **Enhanced Testing**: Better test coverage and examples
- **Performance Monitoring**: Built-in observability

### Community Initiatives
- **Nodon Conf 2025**: Our first virtual conference
- **Template Contest**: Win prizes for the best community templates
- **Mentorship Program**: Connect experienced developers with newcomers

## 🤝 Get Involved

### Ways to Contribute
- **Submit Templates**: Share your project templates
- **Improve Documentation**: Help make our docs better
- **Report Issues**: Help us fix bugs and improve stability
- **Spread the Word**: Share Nodon with your network

### Join Our Community
- **Discord**: [discord.gg/nodon](https://discord.gg/nodon)
- **GitHub**: [github.com/nodon/nodon](https://github.com/nodon/nodon)
- **Twitter**: [@nodon_dev](https://twitter.com/nodon_dev)

## 💝 Thank You

None of this would be possible without our incredible community. Every download, star, contribution, and piece of feedback helps make Nodon better for everyone.

Here's to the next 50,000 downloads and beyond! 🚀

---

*Want to be featured in our next community update? Share your Nodon project on Twitter with #NodonBuilds*
    `,
    author: "Nodon Team",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2025-01-05",
    readTime: "4 min read",
    tags: ["Community", "Milestones", "Updates", "Thank You"],
    category: "Community",
    featured: false,
  },
  {
    id: "typescript-tips-2025",
    title: "Advanced TypeScript Tips for Node.js Developers",
    excerpt:
      "Level up your TypeScript skills with these advanced tips and tricks specifically for Node.js development. From utility types to decorators.",
    content: `
# Advanced TypeScript Tips for Node.js Developers

TypeScript has become essential for Node.js development. Here are advanced tips to make your code more robust and maintainable.

## 1. Utility Types for Better APIs

### Partial and Required
\`\`\`typescript
interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// Update user with partial data
function updateUser(id: string, updates: Partial<User>) {
  // Implementation
}

// Ensure all fields are provided
function createUser(data: Required<User>) {
  // Implementation
}
\`\`\`

### Pick and Omit
\`\`\`typescript
// Create user input (exclude id)
type CreateUserInput = Omit<User, 'id'>

// Public user data (exclude sensitive fields)
type PublicUser = Pick<User, 'id' | 'name' | 'avatar'>
\`\`\`

## 2. Advanced Generic Patterns

### Conditional Types
\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T }
  : { data: T }

// Usage
const stringResponse: ApiResponse<string> = { message: "Success" }
const dataResponse: ApiResponse<User> = { data: user }
\`\`\`

### Mapped Types
\`\`\`typescript
type Timestamps<T> = {
  [K in keyof T]: T[K]
} & {
  createdAt: Date
  updatedAt: Date
}

type UserWithTimestamps = Timestamps<User>
\`\`\`

## 3. Decorators for Clean Code

### Method Decorators
\`\`\`typescript
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey} with args:\`, args)
    return originalMethod.apply(this, args)
  }
}

class UserService {
  @Log
  async createUser(userData: CreateUserInput) {
    // Implementation
  }
}
\`\`\`

## 4. Type Guards for Runtime Safety

\`\`\`typescript
function isUser(obj: any): obj is User {
  return obj && 
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string'
}

// Usage
if (isUser(data)) {
  // TypeScript knows data is User type
  console.log(data.name)
}
\`\`\`

## 5. Module Augmentation

Extend existing types:
\`\`\`typescript
declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}

// Now req.user is typed
app.use((req, res, next) => {
  req.user = getCurrentUser()
  next()
})
\`\`\`

## 6. Template Literal Types

\`\`\`typescript
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type Endpoint = \`/api/\${string}\`

function apiCall<T>(method: HttpMethod, endpoint: Endpoint): Promise<T> {
  // Implementation
}

// Usage - endpoint must start with /api/
apiCall('GET', '/api/users') // ✅
apiCall('GET', '/users')     // ❌ Type error
\`\`\`

## 7. Branded Types for Type Safety

\`\`\`typescript
type UserId = string & { __brand: 'UserId' }
type Email = string & { __brand: 'Email' }

function createUserId(id: string): UserId {
  return id as UserId
}

function sendEmail(email: Email, userId: UserId) {
  // Implementation
}

// Prevents mixing up string types
const id = createUserId('123')
const email = 'user@example.com' as Email
sendEmail(email, id) // ✅
sendEmail(id, email) // ❌ Type error
\`\`\`

## Conclusion

These advanced TypeScript patterns help create more maintainable and type-safe Node.js applications. All Nodon templates include these patterns by default, so you can start with best practices from day one.

Ready to try these patterns? Create a new TypeScript project:
\`\`\`bash
npx create-nodon@latest my-ts-app --template typescript
\`\`\`
    `,
    author: "Alex Thompson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2025-01-03",
    readTime: "9 min read",
    tags: ["TypeScript", "Advanced", "Node.js", "Best Practices"],
    category: "Tutorial",
    featured: false,
  },
]

const categories = ["All", "Product", "Tutorial", "Architecture", "Community"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
       <DocsNavbar />

      <div className="container mx-auto px-4 py-24 max-w-7xl mt-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-8 h-8 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nodon Blog</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and updates from the Nodon team and community. Learn about Node.js best practices,
            project architecture, and the latest in modern web development.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                category === "All"
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <span>Featured Posts</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Featured</Badge>
                      <Badge variant="secondary" className="bg-slate-800/50 text-slate-300">
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="border-slate-600/50 text-slate-400 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorAvatar || "/placeholder.svg"}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <div className="flex items-center space-x-2 text-xs text-slate-400">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <Clock className="w-3 h-3 ml-2" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Link href={`/blog/${post.id}`} className="flex items-center space-x-1">
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <Clock className="w-6 h-6 text-blue-400" />
            <span>Recent Posts</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="border-slate-600/50 text-slate-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.authorAvatar || "/placeholder.svg"}
                        alt={post.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-4 border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:text-white bg-transparent"
                  >
                    <Link href={`/blog/${post.id}`} className="flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Users className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
              </div>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
                Get the latest Nodon updates, tutorials, and Node.js best practices delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Subscribe</Button>
              </div>
              <p className="text-slate-400 text-sm mt-3">No spam, unsubscribe at any time. We respect your privacy.</p>
            </CardContent>
          </Card>
        </section>

        {/* Community Links */}
        <section className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Join Our Community</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
              >
                <Link href="https://discord.gg/nodon" className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Discord Community</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-slate-600/50 text-slate-300 hover:bg-slate-800/50 bg-transparent"
              >
                <Link href="https://github.com/nodon/nodon" className="flex items-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
              >
                <Link href="https://twitter.com/nodon_dev" className="flex items-center space-x-2">
                  <span>@</span>
                  <span>Follow on Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
