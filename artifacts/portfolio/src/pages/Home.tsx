import { motion } from "framer-motion";
import { ArrowRight, Code2, GraduationCap, Layout, MapPin, Search, Star, Terminal, Database, Cpu, Smartphone } from "lucide-react";
import { useEffect } from "react";

const ANIM_STAGGER = 0.1;

export default function Home() {
  // Ensure dark mode is active
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground font-sans">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-white cursor-pointer" onClick={() => scrollTo('top')}>
            DV.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 rounded-none bg-white text-background text-sm font-bold tracking-wide hover:bg-secondary transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main id="top" className="pt-32">
        
        {/* HERO */}
        <section className="min-h-[80vh] grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto px-6 relative py-12">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 z-10 order-2 md:order-1"
          >
            <h2 className="text-secondary font-mono tracking-widest text-sm uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-secondary" />
              Full-Stack Developer & CS Student
            </h2>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-white tracking-tight mb-8">
              Divyanshu<br />Verma
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Enthusiastic Computer Science student building scalable backend systems, AI integrations, and real-world full-stack applications.
            </p>
            
            <div className="mt-12 flex items-center gap-6">
              <button 
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-3 px-6 py-4 bg-secondary text-background font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="text-sm font-bold uppercase tracking-wider text-white hover:text-secondary transition-colors"
              >
                Get in touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-5 z-10 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative group w-64 aspect-[9/16] md:w-72">
              {/* Decorative background shape */}
              <div className="absolute inset-0 border border-secondary/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              
              {/* Profile Image container */}
              <div className="w-full h-full overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm relative">
                <img 
                  src="/profile.jpg" 
                  alt="Divyanshu Verma" 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32 bg-card/30 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="font-serif text-4xl text-white mb-4">About Me</h2>
              <div className="w-8 h-[2px] bg-secondary" />
            </div>
            <div className="md:col-span-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light mb-8"
              >
                I am a dedicated Computer Science student with a strong foundation in programming and full-stack development. I enjoy building real-world applications and exploring the intersections of scalable backend architecture and artificial intelligence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid sm:grid-cols-2 gap-8 text-sm"
              >
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Education</h4>
                  <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                  <p className="text-muted-foreground">SRMCEM, Lucknow (3rd Year)</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Focus</h4>
                  <p className="text-muted-foreground">Backend Systems & AI</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-32 max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-16 text-center">Technical Arsenal</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "C++ / Java", icon: Code2 },
              { name: "Python", icon: Terminal },
              { name: "JavaScript", icon: Code2 },
              { name: "MERN Stack", icon: Layout },
              { name: "Flask", icon: Terminal },
              { name: "MySQL / MongoDB", icon: Database },
              { name: "Flutter", icon: Smartphone },
              { name: "AI Integration", icon: Cpu },
              { name: "Git / GitHub", icon: Code2 },
              { name: "OOP & DSA", icon: Code2 },
              { name: "REST APIs", icon: Search },
              { name: "Problem Solving", icon: Star },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 border border-white/5 bg-card/20 flex flex-col items-center justify-center text-center gap-4 hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
              >
                <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                <span className="font-mono text-sm tracking-tight text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-32 bg-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div>
                <h2 className="font-serif text-4xl text-white mb-4">Experience</h2>
                <div className="w-8 h-[2px] bg-secondary" />
              </div>
            </div>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 group"
              >
                <div className="md:col-span-1 text-sm font-mono text-muted-foreground pt-1">
                  10 Days Internship
                </div>
                <div className="md:col-span-3 pb-12 border-b border-white/10 group-last:border-none">
                  <h3 className="text-2xl font-serif text-white mb-2">Web Development Intern</h3>
                  <p className="text-secondary font-mono text-sm mb-6">SRDT</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Focused on full-stack development using Flask backend, frontend technologies, and MySQL integration. Gained hands-on experience in building robust database-driven applications.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 group"
              >
                <div className="md:col-span-1 text-sm font-mono text-muted-foreground pt-1">
                  Internship
                </div>
                <div className="md:col-span-3 pb-12 border-b border-white/10 group-last:border-none">
                  <h3 className="text-2xl font-serif text-white mb-2">Mobile Application Developer</h3>
                  <p className="text-secondary font-mono text-sm mb-6">L&T EduTech</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Learned Flutter basics and mobile app development concepts, translating ideas into cross-platform applications and engaging user interfaces.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-4">Selected Work</h2>
          <div className="w-8 h-[2px] bg-secondary mb-16" />

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative block h-full"
            >
              <div className="h-full border border-white/10 bg-card/30 p-8 hover:border-secondary/30 transition-colors flex flex-col">
                <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">Node.js | Express | Socket.io</div>
                <h3 className="text-2xl font-serif text-white mb-4">Real-Time Chat App</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Built a real-time chat system with instant messaging capabilities, focusing on backend performance and scalable connections via WebSockets.
                </p>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-background transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative block h-full"
            >
              <div className="h-full border border-white/10 bg-card/30 p-8 hover:border-secondary/30 transition-colors flex flex-col">
                <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">Flask | MySQL | AI</div>
                <h3 className="text-2xl font-serif text-white mb-4">House Rental Platform</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Developed a property listing and rental platform with integrated AI features. Designed complex APIs and a structured database schema.
                </p>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-background transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative block h-full"
            >
              <div className="h-full border border-white/10 bg-card/30 p-8 hover:border-secondary/30 transition-colors flex flex-col">
                <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">Flask | Python | Web</div>
                <h3 className="text-2xl font-serif text-white mb-4">Flask Chat Web App</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  A full-stack web application showcasing complete CRUD operations, routing, and robust state management utilizing Flask.
                </p>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-background transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-32 bg-white/5 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24">
            
            {/* Education Timeline */}
            <div>
              <h2 className="font-serif text-3xl text-white mb-12 flex items-center gap-3">
                <GraduationCap className="text-secondary w-6 h-6" />
                Education
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { deg: "B.Tech CSE", inst: "SRMCEM Lucknow", score: "3rd Year", year: "Present" },
                  { deg: "Class XII", inst: "Central Academy", score: "85.2%", year: "" },
                  { deg: "Class X", inst: "Central Academy", score: "94.6%", year: "" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-0"
                  >
                    <div className="md:hidden absolute left-0 w-4 h-4 rounded-full bg-background border-2 border-secondary top-1" />
                    <div className="p-6 bg-card/20 border border-white/5 relative">
                      {item.year && <div className="text-secondary font-mono text-sm mb-2">{item.year}</div>}
                      <h4 className="text-xl text-white font-serif mb-1">{item.deg}</h4>
                      <p className="text-muted-foreground text-sm">{item.inst}</p>
                      <p className="text-white/60 text-sm mt-2 font-mono">{item.score}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="font-serif text-3xl text-white mb-12 flex items-center gap-3">
                <Star className="text-secondary w-6 h-6" />
                Certifications & Achievements
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Full Stack Python Development", subtitle: "SRDT (Flask, MySQL)" },
                  { title: "Mobile Application Developer", subtitle: "L&T EduTech" },
                  { title: "MERN & Flask Applications", subtitle: "Built Multiple Apps" },
                  { title: "AI Integration", subtitle: "Integrated into Web Apps" },
                  { title: "Strong Problem-Solving", subtitle: "C++, Java, Python" },
                  { title: "Continuous Learning", subtitle: "AI & ML enthusiast" }
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center p-4 border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-white/90 group-hover:text-white transition-colors">{cert.title}</span>
                    <span className="text-xs font-mono text-muted-foreground text-right ml-4">{cert.subtitle}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-secondary font-mono tracking-widest text-sm uppercase mb-6">What's Next?</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white mb-8">Get In Touch</h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              I'm always open to new opportunities, collaborations, and conversations about tech and AI. Whether you have a question or just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:divyanshuvermadv619@gmail.com"
                className="px-8 py-5 bg-white text-background font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors"
              >
                Say Hello
              </a>
              <a 
                href="https://github.com/divyanshuverma01"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-secondary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/divyanshu-verma-63072b304"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-8 text-muted-foreground font-mono text-sm">Or call at 7007717410</p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-white/10 text-center text-sm font-mono text-muted-foreground flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Divyanshu Verma.</p>
          <p className="mt-4 md:mt-0">Engineered with Precision & Passion.</p>
        </footer>

      </main>
    </div>
  );
}
