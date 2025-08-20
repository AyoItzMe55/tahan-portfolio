import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/TagBadge";
import { ArrowLeft, ExternalLink, Github, Globe, FileText, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects
    .filter(p => p.slug !== project.slug && p.tags.some(tag => project.tags.includes(tag)))
    .slice(0, 3);

  const linkIcons = {
    github: Github,
    demo: Globe,
    paper: FileText,
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="pl-0">
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Cover Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8 bg-muted">
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>

            {/* Links */}
            {project.links && Object.keys(project.links).length > 0 && (
              <div className="flex flex-wrap gap-3">
                {Object.entries(project.links).map(([type, url]) => {
                  const Icon = linkIcons[type as keyof typeof linkIcons] || ExternalLink;
                  const labels = {
                    github: "View Code",
                    demo: "Live Demo", 
                    paper: "Read Paper"
                  };
                  return (
                    <Button key={type} variant="outline" asChild>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4 mr-2" />
                        {labels[type as keyof typeof labels] || "View"}
                      </a>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.content.overview}</p>
            </div>
          </section>

          {/* Role & Tools */}
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">My Role</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{project.content.role}</p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.content.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Process */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Process</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.content.process}</p>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.content.results}</p>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Sustainability Impact</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.content.impact}</p>
            </div>
          </section>

          {/* Reflections */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Reflections</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.content.reflections}</p>
            </div>
          </section>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Interested in this project?</h3>
              <p className="text-muted-foreground mb-6">
                I'd love to discuss the technical details, challenges, and lessons learned from this project.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.slug} 
                  to={`/projects/${relatedProject.slug}`}
                  className="group"
                >
                  <Card className="h-full border-border hover:shadow-elegant transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img 
                        src={relatedProject.coverImage} 
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.summary}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}