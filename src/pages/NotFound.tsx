import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Illustration */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
              404
            </div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full blur-md" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Page not found
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track with your exploration of CS/AI and sustainability projects.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Or explore these sections:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link 
                to="/projects" 
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Projects
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/contact" 
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;