import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Code, Target } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A dedicated developer with a passion for creating impactful software solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-80 md:w-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-2xl blur-2xl animate-pulse-glow" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 glass-card">
                  <img
                    src={profilePhoto}
                    alt="Uday Vairalkar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Information Technology Engineering student with a strong foundation in programming
                and software development. My journey in tech started with curiosity about
                how applications work, which led me to dive deep into Java and web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my B.Tech in Information Technology, I focus on building
                practical applications that solve real-world problems. I believe in writing
                clean, maintainable code and continuously learning new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new frameworks, contributing to
                open-source projects, and keeping up with the latest tech trends.
              </p>

              {/* Education & Goals Cards */}
              <div className="space-y-4">
                <div className="glass-card p-5 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Education</h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <p>🎓 B.Tech in Information Technology <span className="text-primary">(Pursuing)</span></p>
                        <p>📜 Diploma in Computer Engineering</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Focus Areas</h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <p>💻 Full-Stack Web Development</p>
                        <p>☕ Java Application Development</p>
                        <p>🔧 Software Engineering Practices</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Career Goal</h3>
                      <p className="text-muted-foreground text-sm">
                        To become a skilled software developer contributing to
                        innovative projects at a leading tech company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
