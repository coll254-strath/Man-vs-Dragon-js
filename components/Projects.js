export default function Projects() {
    const projects = [
      {
        title: "E-commerce Dashboard",
        description: "A responsive dashboard for online store owners with analytics and inventory management",
        tags: ["React", "Chart.js", "Tailwind CSS"],
        image: "/api/placeholder/600/400"
      },
      {
        title: "Recipe Finder App",
        description: "Web app that helps users find recipes based on ingredients they have at home",
        tags: ["Next.js", "API Integration", "Responsive Design"],
        image: "/api/placeholder/600/400"
      },
      {
        title: "Personal Finance Tracker",
        description: "Helps users track expenses, set budgets, and visualize spending habits",
        tags: ["React", "Firebase", "Material UI"],
        image: "/api/placeholder/600/400"
      }
    ];
    
    return (
      <section id="projects" className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was an opportunity to solve problems and create engaging user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:shadow-lg">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <a href="#" className="text-white font-medium">View Project →</a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/projects" className="button-primary">
            View All Projects
          </a>
        </div>
      </section>
    );
  }