import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

const repositories = [
  {
    name: 'college-management-system',
    description: 'A comprehensive web application for managing college operations',
    language: 'Java',
    stars: 5,
    forks: 2,
  },
  {
    name: 'kisancare',
    description: 'Agricultural assistance platform for farmers',
    language: 'JavaScript',
    stars: 3,
    forks: 1,
  },
  {
    name: 'java-dsa-practice',
    description: 'Data structures and algorithms practice in Java',
    language: 'Java',
    stars: 4,
    forks: 0,
  },
  {
    name: 'portfolio-website',
    description: 'Personal portfolio website built with modern web technologies',
    language: 'TypeScript',
    stars: 2,
    forks: 1,
  },
];

const languageColors: Record<string, string> = {
  Java: 'bg-orange-500',
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
  HTML: 'bg-red-500',
  CSS: 'bg-blue-400',
};

const RepoCard = ({
  repo,
  index,
}: {
  repo: typeof repositories[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 hover-lift group ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <Github className="w-5 h-5 text-muted-foreground" />
        <a
          href={`https://github.com/udayvairalkar/${repo.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Code
        </a>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors font-mono">
        {repo.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {repo.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-500'}`}
          />
          <span className="text-xs text-muted-foreground">{repo.language}</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            {repo.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" />
            {repo.forks}
          </span>
        </div>
      </div>
    </div>
  );
};

export const GitHub = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="github" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">GitHub Showcase</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Explore my open-source projects and contributions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {repositories.map((repo, index) => (
            <RepoCard key={repo.name} repo={repo} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/udayvairalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-card border-primary/30 hover:border-primary hover:glow-effect rounded-lg font-medium transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            View Full Profile
            <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
