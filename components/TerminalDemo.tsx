import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation delay={1200}>&gt; npm create nodon@latest my-app</TypingAnimation>

      <AnimatedSpan delay={3000} className="text-green-500">
        🚀 Welcome to Nodon CLI!
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-white">
        ? 📂 Select a project template: (Use arrow keys)
      </AnimatedSpan>

      {/* Template Options with realistic pause between each */}
      <AnimatedSpan delay={4500} className="text-white">
        ❯ 🟢 Basic Node.js
      </AnimatedSpan>

      <AnimatedSpan delay={4700} className="text-white pl-[15px]">
         🔵 Basic Node + TypeScript
      </AnimatedSpan>

      <AnimatedSpan delay={4900} className="text-white  pl-[15px]">
         🟠 Advanced REST API (Node + Express)
      </AnimatedSpan>

      <AnimatedSpan delay={5100} className="text-white  pl-[15px] ">
         🟠 Advanced REST API (Express + TypeScript)
      </AnimatedSpan>

      <AnimatedSpan delay={5300} className="text-white  pl-[15px]">
         🔴 GraphQL API Server (Express + TypeScript)
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-white  pl-[15px]">
         🟠 Microservices Starter (Multi Service)
      </AnimatedSpan>

      {/* File creation process */}
      <AnimatedSpan delay={6500} className="text-blue-500">
        📂 Creating template files...
      </AnimatedSpan>

      <AnimatedSpan delay={7500} className="text-green-500">
        ✅ Template Created to C:\my-app
      </AnimatedSpan>

      {/* Dependencies Installation */}
      <AnimatedSpan delay={8000} className="text-blue-500">
        📦 Installing dependencies...
      </AnimatedSpan>

      <AnimatedSpan delay={9500} className="text-green-500">
        ✅ Dependencies installed!
      </AnimatedSpan>

      <AnimatedSpan delay={10000} className="text-green-500">
        🎉 Project created successfully!
      </AnimatedSpan>

      {/* Final instructions */}
      <AnimatedSpan delay={11000} className="text-blue-500">
        👉 cd my-app
      </AnimatedSpan>

      <AnimatedSpan delay={11500} className="text-blue-500">
        👉 npm run dev    # Start dev server (JS)
      </AnimatedSpan>

      <TypingAnimation delay={12500} className="text-muted-foreground">
        Happy coding! 🚀
      </TypingAnimation>
    </Terminal>
  );
}
