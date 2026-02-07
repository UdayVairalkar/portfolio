import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  { name: 'Core Java', level: 90, category: 'Languages' },
  { name: 'Advanced Java', level: 80, category: 'Languages' },
  { name: 'C', level: 75, category: 'Languages' },
  { name: 'C++', level: 70, category: 'Languages' },
  { name: 'HTML', level: 95, category: 'Web' },
  { name: 'CSS', level: 90, category: 'Web' },
  { name: 'JavaScript', level: 80, category: 'Web' },
  { name: 'OOP', level: 85, category: 'Concepts' },
  { name: 'Git & GitHub', level: 85, category: 'Tools' },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 hover-lift ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-foreground">{skill.name}</h3>
        <span className="text-primary font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 300}ms`,
          }}
        />
      </div>
      <span className="text-xs text-muted-foreground mt-2 inline-block">{skill.category}</span>
    </div>
  );
};

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['MySQL', 'REST APIs', 'Problem Solving', 'Data Structures', 'Algorithms'].map(
              (item, i) => (
                <span
                  key={item}
                  className="px-4 py-2 glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
