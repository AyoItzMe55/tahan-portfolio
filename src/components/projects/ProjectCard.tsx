import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/TagBadge";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Link to={`/projects/${project.slug}`}>
        <Card className="group cursor-pointer overflow-hidden border-border bg-card hover:shadow-elegant transition-all duration-300 h-full">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="px-6 pb-6 pt-0">
            <div className="text-xs text-muted-foreground">
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}