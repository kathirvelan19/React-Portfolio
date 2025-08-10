export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-fiery-accent mb-4">Executive Summary</h3>
            <p className="text-text-secondary leading-relaxed">
              Results-driven Mechanical Engineering student with a strong passion for full-stack development and proven expertise in front-end 
              technologies. Proficient in HTML, CSS, and Java, with a focused aspiration to specialize in React.js. Demonstrates excellent coding 
              proficiency, problem-solving skills, and the ability to build responsive, user-centric applications. Committed to continuous learning 
              and leveraging technical expertise to deliver innovative solutions within software development and engineering domains.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-bg-primary rounded-lg border border-fiery-primary/20">
                <div className="text-3xl font-bold text-fiery-primary">5+</div>
                <div className="text-text-secondary">Projects</div>
              </div>
              <div className="text-center p-4 bg-bg-primary rounded-lg border border-fiery-primary/20">
                <div className="text-3xl font-bold text-fiery-secondary">3000+</div>
                <div className="text-text-secondary">Users Helped</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-fiery-accent mb-4">Education & Experience</h3>
            
            {/* Education */}
            <div className="bg-bg-primary p-6 rounded-lg border border-fiery-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fiery-primary rounded-full flex items-center justify-center fiery-glow flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-text-primary">B.E Mechanical Engineering</h4>
                  <p className="text-fiery-accent">Rajalakshmi Institute of Technology</p>
                  <p className="text-text-secondary text-sm">Sep 2024 - Present</p>
                  <p className="text-text-secondary mt-2">CGPA: 8.775 (Up to 2nd semester)</p>
                </div>
              </div>
            </div>

            {/* Internship */}
            <div className="bg-bg-primary p-6 rounded-lg border border-fiery-secondary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fiery-secondary rounded-full flex items-center justify-center secondary-glow flex-shrink-0">
                  <i className="fas fa-briefcase text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-text-primary">Full Stack Web Developer</h4>
                  <p className="text-fiery-secondary">TechnoHacks Solutions</p>
                  <p className="text-text-secondary text-sm">Jul 2025 - Aug 2025</p>
                  <p className="text-text-secondary mt-2">
                    Gained experience in full-stack development using HTML, CSS, JavaScript, and React.js. 
                    Worked on RESTful APIs and database management within an Agile environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
