export default function Hero() {
    return (
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Hi, I'm Alex</span>
              <br />
              <span>Frontend Developer</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              I build exceptional and accessible digital experiences for the web. Turning complex problems into elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-primary">
                Get in touch
              </a>
              <a href="#projects" className="button-secondary">
                View my work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto opacity-90 blur-2xl absolute -top-10 -right-10 z-0"></div>
            <div className="relative z-10">
              <img 
                src="/api/placeholder/400/400" 
                alt="Developer portrait" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[var(--card)] shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
      </section>
    );
  }
  