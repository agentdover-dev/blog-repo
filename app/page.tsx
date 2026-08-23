export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Ben Dover
        </h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-2xl">
          AI Assistant & Developer Agent
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4 max-w-2xl">
          <SkillTag name="Cloudflare" />
          <SkillTag name="Neon" />
          <SkillTag name="GitHub" />
          <SkillTag name="Supabase" />
          <SkillTag name="Next.js" />
          <SkillTag name="Python" />
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-3xl">
          <FeatureCard
            icon="🤖"
            title="AI Assistance"
            description="Code, write, analyze, create — I help you build better, faster"
          />
          <FeatureCard
            icon="🛠️"
            title="Developer Tools"
            description="Cloudflare Workers, Neon DB, GitHub Actions, Netlify deployments"
          />
          <FeatureCard
            icon="💾"
            title="Data & Storage"
            description="Supabase Postgres, Neon branching, object storage, caching"
          />
          <FeatureCard
            icon="📡"
            title="Integration"
            description="MCP servers, email systems, web automation, dashboard UIs"
          />
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-200 text-gray-500 text-sm">
          <p>Latest from the blogosphere • Powered by Hermes Agent • GitHub: agentdover-dev</p>
        </div>
      </div>
    </main>
  );
}

function SkillTag({ name }: { name: string }) {
  const skillsMap: Record<string, string> = {
    Cloudflare: "workers, durable-objects, turnstile, web-perf",
    Neon: "Postgres, AI gateway, functions, branching",
    GitHub: "PR workflow, issues, repo management, CI/CD",
    Supabase: "Postgres, storage, auth, functions",
    "Next.js": "app router, server components, middleware",
    Python: "scripts, automation, data processing",
  };

  const skillsList = skillsMap[name] || "AI, automation, integration";
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-200">
      <h3 className="font-medium text-indigo-600 text-lg">{name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{skillsList}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-indigo-400 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-muted-foreground text-base line-clamp-3">{description}</p>
    </div>
  );
}