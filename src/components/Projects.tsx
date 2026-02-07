import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'College Management System',
    description:
      'A comprehensive web application for managing students, faculty, and courses. Features include user authentication, role-based access, and real-time data management.',
    techStack: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/udayvairalkar/college-management-system',
    live: null,
    featured: true,
  },
  {
    title: 'KisanCare',
    description:
      'A web platform designed to assist farmers with agricultural services, providing information about crops, weather updates, and market prices.',
    techStack: ['Java', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/udayvairalkar/kisancare',
    live: null,
    featured: true,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`glass-card p-8 hover-lift group ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Folder className="w-6 h-6 text-primary" />
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Some of the projects I've built to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#github"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View more on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
