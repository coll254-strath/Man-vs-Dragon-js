export default function About() {
    return (
      <section id="about" className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/api/placeholder/500/600" 
              alt="About me" 
              className="rounded-xl shadow-lg w-full object-cover h-full max-h-[500px]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              I'm a passionate frontend developer with a background in design. I enjoy creating intuitive and dynamic user experiences that solve real-world problems.
            </p>
            <p className="text-[var(--text-secondary)] mb-6">
              Having worked on various projects from e-commerce platforms to interactive web applications, I'm constantly looking to expand my skills and stay on top of the latest web technologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Problem Solver</h4>
                  <p className="text-sm text-[var(--text-secondary)]">I enjoy tackling complex challenges with creative solutions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100 dark:bg-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Detail-Oriented</h4>
                  <p className="text-sm text-[var(--text-secondary)]">I focus on the small details that make big differences</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 dark:bg-green-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Quick Learner</h4>
                  <p className="text-sm text-[var(--text-secondary)]">I adapt to new technologies and environments rapidly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }