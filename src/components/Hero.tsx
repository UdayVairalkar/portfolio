import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
            <span className="gradient-text text-glow">Uday Vairalkar</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up delay-200">
            Aspiring Software Developer
            <span className="text-primary"> | </span>
            Java & Web Developer
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-300 leading-relaxed">
            Computer Engineering student passionate about building efficient, scalable applications.
            Currently pursuing B.Tech in Information Technology with hands-on experience in Java and web technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up delay-400">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover-lift glow-effect"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 glass-card border-primary/30 hover:border-primary/60 rounded-lg font-medium transition-all duration-300 hover-lift"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-up delay-500">
            <a
              href="https://github.com/udayvairalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/udayvairalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:usvairalkar293@gmail.com"
              className="p-3 glass-card rounded-full hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
