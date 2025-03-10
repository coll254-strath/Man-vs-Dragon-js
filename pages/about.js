import Head from 'next/head';

export default function AboutPage() {
  const experiences = [
    {
      company: "TechStart Inc.",
      position: "Junior Frontend Developer",
      period: "Jan 2023 - Present",
      description: "Working on customer-facing web applications using React and Next.js. Collaborating with designers and backend developers to implement responsive UI components and integrate with APIs."
    },
    {
      company: "WebDesign Co.",
      position: "Web Development Intern",
      period: "May 2022 - Dec 2022",
      description: "Assisted in the development of websites for small businesses. Gained practical experience with HTML, CSS, JavaScript, and basic React applications."
    }
  ];

  const education = [
    {
      institution: "Tech University",
      degree: "Bachelor of Science in Computer Science",
      period: "2018 - 2022",
      description: "Focused on web development, software engineering, and user interface design. Completed several projects including a social media platform for student communities."
    },
    {
      institution: "Frontend Masters",
      degree: "Web Development Bootcamp",
      period: "2022",
      description: "Intensive 12-week bootcamp covering modern JavaScript frameworks, responsive design principles, and industry best practices."
    }
  ];

  return (
    <>
      <Head>
        <title>About Me | Alex Dev</title>
        <meta name="description" content="Learn more about Alex, a frontend developer with a passion for creating engaging web experiences" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="py-24 px-4 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
              Get to know more about me, my background, and what drives my passion for web development.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <img 
              src="/api/placeholder/400/500" 
              alt="Professional photo of Alex" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="card mt-8">
              <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Name</p>
                  <p className="font-medium">Alex Johnson</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>
                  <p className="font-medium">alex.developer@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Interests</p>
                  <p className="font-medium">Web Development, UI/UX Design, Photography, Hiking</p>
                </div>
              </div>
              <a href="/path/to/resume.pdf" download className="button-primary w-full mt-6 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  I'm Alex, a frontend developer with a passion for creating intuitive and engaging web applications. My journey into coding started when I was in high school, tinkering with HTML and CSS to customize my blog. What started as a hobby quickly developed into a passion, leading me to pursue a degree in Computer Science.
                </p>
                <p>
                  Throughout my academic and professional journey, I've had the opportunity to work on a wide range of projects, from simple landing pages to complex web applications. I enjoy the perfect balance of technical problem-solving and creative design that frontend development offers.
                </p>
                <p>
                  I'm particularly passionate about creating accessible and user-friendly web experiences. I believe that good technology should be available to everyone, regardless of their abilities or technical knowledge. This philosophy guides my approach to design and development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring hiking trails, experimenting with photography, or contributing to open-source projects. I'm always looking for new challenges and opportunities to expand my skills and contribute to meaningful projects.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="card">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.position}</h3>
                        <p className="text-[var(--primary)]">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)]">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="card">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-[var(--primary)]">{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)]">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}