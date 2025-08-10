export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      color: "fiery-primary",
      skills: [
        { name: "Java", level: 85, proficiency: "Advanced" },
        { name: "Python", level: 70, proficiency: "Intermediate" },
        { name: "C", level: 75, proficiency: "Intermediate" },
      ]
    },
    {
      title: "Frontend Development",
      icon: "fas fa-palette",
      color: "fiery-secondary",
      skills: [
        { name: "HTML", level: 90, proficiency: "Expert" },
        { name: "CSS", level: 88, proficiency: "Expert" },
        { name: "JavaScript", level: 82, proficiency: "Advanced" },
        { name: "React.js", level: 80, proficiency: "Advanced" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      color: "fiery-accent",
      skills: [
        { name: "Git & GitHub", level: 85, proficiency: "Advanced" },
        { name: "Problem Solving", level: 90, proficiency: "Expert" },
        { name: "Responsive Design", level: 83, proficiency: "Advanced" },
      ]
    }
  ];

  const certifications = [
    { name: "HTML", issuer: "LinkedIn Learning" },
    { name: "CSS", issuer: "LinkedIn Learning" },
    { name: "JavaScript", issuer: "LinkedIn Learning" },
    { name: "Python", issuer: "Great Learning" },
    { name: "Git & GitHub", issuer: "LinkedIn Learning" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'fiery-primary':
        return {
          bg: 'bg-fiery-primary',
          border: 'border-fiery-primary/20',
          glow: 'fiery-glow'
        };
      case 'fiery-secondary':
        return {
          bg: 'bg-fiery-secondary',
          border: 'border-fiery-secondary/20',
          glow: 'secondary-glow'
        };
      case 'fiery-accent':
        return {
          bg: 'bg-fiery-accent',
          border: 'border-fiery-accent/20',
          glow: ''
        };
      default:
        return {
          bg: 'bg-fiery-primary',
          border: 'border-fiery-primary/20',
          glow: 'fiery-glow'
        };
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={index} className={`skill-card bg-bg-secondary p-6 rounded-lg border ${colors.border} transition-all duration-300 hover:scale-105`}>
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto ${colors.glow}`}>
                    <i className={`${category.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-fiery-accent mt-4">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-text-primary">{skill.name}</span>
                        <span className="text-fiery-accent text-sm">{skill.proficiency}</span>
                      </div>
                      <div className="w-full bg-bg-primary rounded-full h-2">
                        <div 
                          className={`${colors.bg} h-2 rounded-full ${colors.glow} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-fiery-accent mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-bg-secondary p-4 rounded-lg border border-fiery-primary/20 text-center hover:scale-105 transition-transform duration-300">
                <i className="fas fa-certificate text-fiery-accent text-2xl mb-2"></i>
                <h4 className="text-text-primary font-semibold">{cert.name}</h4>
                <p className="text-text-secondary text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
