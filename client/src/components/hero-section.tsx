import { useImageUpload } from "@/hooks/use-image-upload";

export default function HeroSection() {
  const { currentImage, uploading, handleImageUpload } = useImageUpload();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-text-secondary text-lg mb-2">Hi, I'm</h3>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Kathir Velan R</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-text-secondary mb-6">
                Full-Stack Web Developer & React Enthusiast
              </h2>
            </div>
            
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              Aspiring Full-Stack Web Developer with strong passion for front-end technologies and proven expertise in React.js. 
              Mechanical Engineering student committed to delivering innovative solutions and building responsive, user-centric applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToContact}
                className="bg-fiery-primary hover:bg-fiery-secondary px-8 py-3 rounded-lg text-white font-semibold fiery-glow hover:secondary-glow transition-all duration-300"
              >
                Contact Me
              </button>
              <button 
                onClick={scrollToProjects}
                className="border-2 border-fiery-accent text-fiery-accent hover:bg-fiery-accent hover:text-bg-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a 
                href="https://linkedin.com/in/kathirvelan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-fiery-accent text-2xl transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://github.com/kathirvelan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-fiery-accent text-2xl transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-fiery-accent text-2xl transition-colors duration-300"
              >
                <i className="fas fa-blog"></i>
              </a>
              <a 
                href="https://hackerrank.com/kathirvelan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-fiery-accent text-2xl transition-colors duration-300"
              >
                <i className="fab fa-hackerrank"></i>
              </a>
              <a 
                href="https://leetcode.com/kathirvelan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-fiery-accent text-2xl transition-colors duration-300"
              >
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-bg-secondary border-4 border-fiery-primary fiery-glow">
                <img 
                  src={currentImage?.url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"} 
                  alt="Kathir Velan R - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
                {uploading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-white">
                      <i className="fas fa-spinner fa-spin text-2xl"></i>
                      <p className="mt-2">Uploading...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Image Upload Button */}
              <div className="absolute bottom-4 right-4">
                <label className="profile-upload cursor-pointer bg-fiery-primary hover:bg-fiery-secondary p-3 rounded-full text-white transition-all duration-300">
                  <i className="fas fa-camera"></i>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                </label>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-fiery-accent rounded-full pulse-glow"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-fiery-secondary rounded-full pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
