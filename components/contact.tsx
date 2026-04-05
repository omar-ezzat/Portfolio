import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ArrowUpRight, Instagram, Facebook } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:omarezzat.m2002@gmail.com",
    icon: Mail,
    label: "Email Me",
  },
  {
    name: "GitHub",
    href: "https://github.com/omar-ezzat",
    icon: Github,
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/omar-ezzat-45142b247/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/omar.ezzat.71/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/omar.ezzat.14",
    icon: Facebook,
    label: "Facebook",
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether
              you have a project in mind or just want to say hi, feel free to
              reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="mailto:omarezzat.m2002@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Send an Email
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="text-sm">{link.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
