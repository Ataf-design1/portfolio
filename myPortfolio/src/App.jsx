import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Download, ExternalLink, Moon, Sun, GraduationCap, 
  Briefcase, Mail, Code, Rocket, User, Cpu, Phone
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [experience, setExperience] = useState({
    years: 1,
    months: 1,
    days: 28,
    hours: 19,
    minutes: 38,
    seconds: 9
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setExperience(prev => ({
        ...prev,
        seconds: prev.seconds + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'GraphQL', level: 75 },
    { name: 'Tailwind CSS', level: 90 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      color: 'from-blue-500 to-teal-500'
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Web Development',
      company: 'Masai School',
      period: 'Mar 2023 - Dec 2023',
      description: 'Graduated from a rigorous, market-ready full-stack web development course.',
      icon: <GraduationCap className="w-8 h-8" />,
      position: 'left',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web Developer',
      company: 'Midha Education',
      period: 'Jan 2024 - Apr 2024',
      description: 'As a full-stack web developer, I successfully developed and launched three websites.',
      icon: <Briefcase className="w-8 h-8" />,
      position: 'right',
      color: 'from-blue-500 to-teal-500'
    }
  ];

  const TimeCounter = ({ value, label }) => (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-[#1a1f35] px-6 py-4 rounded-lg">
        <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {String(value).padStart(2, '0')}
        </span>
        <p className="text-gray-400 mt-1">{label}</p>
      </div>
    </div>
  );

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="relative px-4 py-2 group text-gray-300 hover:text-white transition-colors"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center items-center">
            <div className="flex gap-4 bg-[#1a1f35] px-6 py-2 rounded-full">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mb-8 inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80"
                alt="Profile"
                className="relative w-48 h-48 rounded-full border-4 border-white/10"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-400">
              A Passionate Full-Stack Web Developer Focused On Crafting Responsive, Ranking Web Apps
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1a1f35] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#252b45] flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#1a1f35]/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Hi, I'm Your Name, a passionate and versatile full-stack web developer with a keen eye for creating elegant solutions.
                I completed my Full Stack Web Development course at Masai School and am currently pursuing my MCA.
              </p>
              <p>
                I specialize in building responsive, high-performance web applications using modern technologies like React,
                Next.js, Node.js, and various cloud services. My approach combines technical expertise with creative problem-solving
                to deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#1a1f35] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#1a1f35]/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative bg-[#0f172a] rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1a1f35] rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Github className="w-4 h-4" /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            My Experience
          </motion.h2>

          {/* Experience Counter */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            <TimeCounter value={experience.years} label="Years" />
            <TimeCounter value={experience.months} label="Months" />
            <TimeCounter value={experience.days} label="Days" />
            <TimeCounter value={experience.hours} label="Hours" />
            <TimeCounter value={experience.minutes} label="Minutes" />
            <TimeCounter value={experience.seconds} label="Seconds" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-16"
              >
                <div className={`absolute top-0 ${exp.position === 'left' ? 'right-1/2 pr-8 text-right' : 'left-1/2 pl-8'} w-1/2`}>
                  <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                    {exp.period}
                  </span>
                </div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${exp.color}`}>
                  <div className="bg-[#0f172a] p-2 rounded-full">
                    {exp.icon}
                  </div>
                </div>
                <div className={`relative ${exp.position === 'left' ? 'mr-1/2 pr-8 text-right' : 'ml-1/2 pl-8'}`}>
                  <div className="group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                    <div className="relative bg-[#1a1f35] p-6 rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.01]">
                      <h3 className={`text-xl font-bold mb-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 mb-2">{exp.company}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#1a1f35]/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    your.email@example.com
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      className="w-10 h-10 bg-[#0f172a] rounded-full flex items-center justify-center hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="w-10 h-10 bg-[#0f172a] rounded-full flex items-center justify-center hover:text-purple-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-[#0f172a] rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-[#0f172a] rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 bg-[#0f172a] rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
}

export default App;