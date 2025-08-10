export default function ProjectsSection() {
  const projects = [
    {
      title: "RIT GPA & CGPA Calculator",
      status: "Completed",
      description: "Developed a responsive web-based GPA & CGPA Calculator specifically for Rajalakshmi Institute of Technology students. The application enables users to input grades and credits to compute accurate GPA/CGPA using the university's official formula.",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievements: [
        "Helped over 3000+ students streamline academic tracking",
        "Improved calculation accuracy and reduced manual errors",
        "Received positive feedback for UI/UX design"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Netflix Clone Web Page",
      status: "Completed",
      description: "A responsive front-end development project that replicates Netflix's homepage interface. Built to practice and enhance front-end web development skills, focusing on UI/UX design and responsive layouts across various device sizes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievements: [
        "Interactive navigation menus and buttons",
        "Responsive design across all device sizes",
        "Smooth hover effects and transitions"
      ],
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const getTechColor = (tech: string) => {
    switch (tech) {
      case 'HTML':
        return 'bg-fiery-primary/20 text-fiery-primary';
      case 'CSS':
        return 'bg-fiery-secondary/20 text-fiery-secondary';
      case 'JavaScript':
        return 'bg-fiery-accent/20 text-fiery-accent';
      default:
        return 'bg-fiery-primary/20 text-fiery-primary';
    }
  };

  return (
    <section id="projects" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Project Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="project-card bg-bg-primary p-8 rounded-lg border border-fiery-primary/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-fiery-accent">{project.title}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'text-fiery-primary bg-fiery-primary/20' 
                        : 'text-fiery-secondary bg-fiery-secondary/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Key Features:</h4>
                    <ul className="text-text-secondary space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <i className="fas fa-check text-fiery-accent mt-1 mr-2 flex-shrink-0"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button className="bg-fiery-primary hover:bg-fiery-secondary px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300">
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </button>
                    <button className="border border-fiery-accent text-fiery-accent hover:bg-fiery-accent hover:text-bg-primary px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                      <i className="fab fa-github mr-2"></i>Source Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <img 
                  src={project.image}
                  alt={`${project.title} Interface`}
                  className="rounded-lg shadow-lg w-full h-auto border border-fiery-primary/20"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-fiery-accent mb-8">Achievements</h3>
          <div className="bg-bg-primary p-8 rounded-lg border border-fiery-accent/20">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-fiery-accent rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-trophy text-bg-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-fiery-accent mb-2">30 Days HackerRank Challenge</h4>
                <p className="text-text-secondary text-sm mb-4">January 2025 - March 2025</p>
                <p className="text-text-secondary leading-relaxed">
                  Successfully completed the 30 Days of Code challenge on HackerRank, solving 64 coding problems in Java. 
                  The challenge focused on core programming concepts such as data types, loops, conditionals, 
                  object-oriented programming, arrays, recursion, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
