import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Award {
  title: string;
  org: string;
  year: number;
  image: string;
  summary: string;
  link?: string;
}

interface AwardCardProps {
  award: Award;
  index: number;
}

export function AwardCard({ award, index }: AwardCardProps) {
  const CardWrapper = award.link ? "a" : "div";
  const cardProps = award.link ? { 
    href: award.link, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      <CardWrapper {...cardProps} className="block">
        <Card className="group cursor-pointer h-full border-border bg-card hover:shadow-elegant transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img 
                  src={award.image} 
                  alt={`${award.org} logo`}
                  className="w-12 h-12 object-contain rounded-lg bg-muted p-2"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {award.org} • {award.year}
                    </p>
                  </div>
                  {award.link && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {award.summary}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>
    </motion.div>
  );
}