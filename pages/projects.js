import Head from 'next/head';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A responsive dashboard for online store owners with analytics and inventory management",
      tags: ["React", "Chart.js", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      longDescription: "This e-commerce dashboard provides store owners with real-time analytics, inventory management, and customer insights. The responsive interface allows for easy access on any device, while the intuitive design makes complex data easy to understand."
    },
    {
      title: "Recipe Finder App",
      description: "Web app that helps users find recipes based on ingredients they have at home",
      tags: ["Next.js", "API Integration", "Responsive Design"],
      image: "/api/placeholder/600/400",
      longDescription: "This recipe finder application allows users to input ingredients they already have and receive personalized recipe suggestions. The app integrates with a third-party recipe API and provides filtering options for dietary restrictions and cuisine types."
    },
    {
      title: "Personal Finance Tracker",
      description: "Helps users track expenses, set budgets, and visualize spending habits",
      tags: ["React", "Firebase", "Material UI"],
      image: "/api/placeholder/600/400",
      longDescription: "A comprehensive personal finance application that helps users track expenses, set and monitor budgets, and visualize spending patterns. The app features secure authentication, data encryption, and cloud storage for accessing financial data from any device."
    },
    {
      title: "Weather App",
      description: "A clean, intuitive weather application with 7-day forecasts and location-based data",
      tags: ["JavaScript", "API Integration", "CSS Animations"],
      image: "/api/placeholder/600/400",
      longDescription: "This weather application provides current conditions and 7-day forecasts for any location. Features include animated weather icons, location-based automatic weather updates, and the ability to save favorite locations for quick access."
    },
    {
      title: "Task Management System",
      description: "A Kanban-style project management tool for teams and individuals",
      tags: ["React", "Redux", "Node.js"],
      image: "/api/placeholder/600/400",
      longDescription: "A flexible task management system with Kanban boards for visualizing workflow. Users can create projects, assign tasks, set deadlines, and track progress. The application includes features like drag-and-drop organization, task filtering, and team collaboration tools."
    },
    {
      title: "Portfolio Website Template",
      description: "A customizable portfolio template for creative professionals",
      tags: ["HTML/CSS", "JavaScript", "Responsive Design"],
      image: "/api/placeholder/600/400",
      longDescription: "A modern, customizable portfolio template designed for creative professionals. The template features a clean, minimalist design with smooth animations, project showcases, and contact forms. Easily adaptable to different creative fields."
    }
  ];

  return (
    <>
      <Head>
        <title>Projects | Alex Dev</title>
        <meta name="description" content="Explore my projects and work as a frontend developer" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="py-24 px-4 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills and experience in frontend development.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:shadow-lg">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-4">{project.longDescription}</p>
              <a href="#" className="text-[var(--primary)] font-medium hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
