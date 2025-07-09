import { Button } from "@/components/ui/button"
import { Github, ArrowRight, Zap, Shield, Code, CheckCircle, Star,Rocket,Puzzle,Package } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { DockNavbar } from "@/components/dock-navbar"
import { MagicCard } from "@/components/magicui/magic-card"
import TerminalDemo from "@/components/TerminalDemo"
import { HowItWorks } from "@/components/how-it-works"
import { TemplatesShowcase } from "@/components/templates-showcase"
import { ComparisonSection } from "@/components/comparison-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"


export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast Setup",
      description: "Spin up production-ready Node.js apps instantly with minimal configuration.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Built-in security best practices so your project is protected right out of the box.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Code,
      title: "Modern Standards",
      description: "Start with clean, scalable project structures aligned with today's development best practices.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Rocket,
      title: " Zero Configuration",
      description: "Skip the boilerplate — start coding immediately with pre-configured project templates.",
      gradient: "from-red-400 to-purple-500",
    },
    {
      icon: Puzzle,
      title: "Flexible Project Types",
      description: "From simple Node.js scripts to advanced REST APIs and GraphQL servers — Nodon covers all use cases.",
      gradient: "from-green-400 to-yellow-500",
    },{
      icon: Package,
      title: "Built for Scalability",
      description: "Project structures and tools designed to grow with your application — no rewrites required.",
      gradient: "from-amber-900 to-orange-500",
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at Vercel",
      content: "Nodon saved me hours of setup time. The templates are exactly what I needed.",
      avatar: "/avatar/av1.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Lead at GitHub",
      content: "The best Node.js generator I've used. Clean, fast, and follows all the best practices.",
      avatar: "/avatar/av2.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Full Stack Developer",
      content: "Finally, a tool that gets Node.js project setup right. Highly recommended!",
      avatar: "/avatar/av3.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
      <DockNavbar />

      {/* Hero Section */}
      <HeroSection />
{/* How It Works */}
      <HowItWorks />

      {/* Templates Showcase */}
      <TemplatesShowcase />
      {/* Features Grid */}
      <section className="py-24 px-4 bg-slate-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Build Modern Apps</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Nodon equips you with ready-to-use templates, security best practices, and powerful tools to build scalable Node.js projects in seconds — not hours
            </p>
          </div>
      
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MagicCard key={index} className="group cursor-pointer">
                <div className="p-8">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

 <ComparisonSection />
      {/* Code Example Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started in Seconds</h2>
            <p className="text-slate-400 text-lg">Three simple commands to bootstrap your Node.js project</p>
          </div>

          <MagicCard className="max-w-2xl mx-auto">
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm font-mono">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">npm create nodon@latest</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-center space-x-3 text-sm font-mono">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">cd my-app</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-center space-x-3 text-sm font-mono">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">npm run dev</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>
          </MagicCard>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Developers</h2>
            <p className="text-slate-400 text-lg">See what developers are saying about Nodon</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MagicCard key={index} className="group">
                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      {/* <p className="text-slate-400 text-sm">{testimonial.role}</p> */}
                    </div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      {/* <SponsorsSection /> */}
<FaqSection />
  <FinalCTASection />

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <MagicCard className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using Nodon to bootstrap their Node.js projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:scale-105 transition-transform duration-200"
              >
                <Link href="/guide" className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:scale-105 transition-transform duration-200"
              >
                <Link  target="_blank" href="https://github.com/omprakash2929/Nodon" className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </Link>
              </Button>
            </div>
          </MagicCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80 py-12 px-4 mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6  flex items-center justify-center">
               <img src="/logo/logo.png" alt="" />
              </div>
              <span className="text-white font-semibold">Nodon © 2025</span>
            </div>

            <div className="flex items-center space-x-6 text-slate-400">
              <span>MIT License</span>
              <Link href="https://github.com/omprakash2929/Nodon"  target="_blank" className="hover:text-white transition-colors">
                GitHub Repo
              </Link>
              <Link href="/guide" className="hover:text-white transition-colors">
                Docs
              </Link>
              <Link href="https://discord.gg/32QKxVcG"  target="_blank" className="hover:text-white transition-colors">
                Community
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
