export default function Skills() {
    const frontendSkills = [
      { name: "HTML5/CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ];
    
    const otherSkills = [
      { name: "Node.js", level: 65 },
      { name: "TypeScript", level: 70 },
      { name: "UI/UX Design", level: 75 },
      { name: "Git/GitHub", level: 80 },
      { name: "Responsive Design", level: 90 },
    ];
    
    return (
      <section id="skills" className="section bg-[var(--card)]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's a snapshot of my technical skills and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['React', 'JavaScript', 'HTML5', 'CSS3', 'Next.js', 'Tailwind', 'Git', 'Figma', 'Node.js', 'TypeScript'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }