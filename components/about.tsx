import { MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon } from "@/components/tech-icons"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack web developer and Computer Engineering student specializing in modern JavaScript technologies, particularly the{" "}
                  <span className="text-foreground font-medium">MERN stack</span>{" "}
                  (MongoDB, Express, React, Node.js). I build responsive user interfaces and scalable backend systems with a strong focus on clean, maintainable code.
                </p>
                <p>
                  My approach to development combines solid technical foundations with attention to user experience. I focus on writing code that is not only functional but also structured, readable, and easy to extend as projects grow.
                </p>
                <p>
                  I also have experience teaching programming to young students, which has strengthened my ability to break down complex concepts and communicate ideas clearly—an essential skill when working in teams and building real-world applications.
                </p>
                <p>
                  When I'm not coding, I'm continuously learning new technologies, improving my problem-solving skills, and building projects that challenge me to grow as a developer.
                </p>
              </div>
            </div>
          </div>

          {/* MERN Stack Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-2xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <MongoDBIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <ExpressIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">Express.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <ReactIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <NodeIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
