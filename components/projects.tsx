import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Flight Ticket Module",
    description:
      "a simple, lightweight UMD module to manage flight tickets in JavaScript. It is designed for both Node.js and browser environments.",
    technologies: ["JavaScript", "Express", "Node.js", "Express.js",  ],
    github: "https://github.com/omar-ezzat/Flight-Ticket-Module",
    demo: "https://www.npmjs.com/package/flight-ticket-module-mearn-r2",
  },
  {
    title: "Authentication and Authorization API",
    description:
      "Register and Login API routing Back-end project Validating the user and creating session Token",
    technologies: ["JavaScript", "Express", "Node.js", "JWT", "MongoDB"],
    github: "https://github.com/omar-ezzat/Auth_API",
    demo: "",
  },
  {
    title: "Memory Game",
    description:
      "A classic memory matching game built with TypeScript featuring difficulty levels and performance tracking.",
    technologies: ["TypeScript", "HTML", "CSS"],
    github: "https://github.com/omar-ezzat/Memory-Game",
    demo: "https://omar-ezzat.github.io/Memory-Game/",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've built, from full-stack applications to
            interactive games.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Button asChild variant="ghost" size="sm" className="h-8 px-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="h-8 px-3">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
