import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Rocket, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experiences & Projects", href: "/projects", icon: Rocket },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0]; mobile?: boolean }) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    
    return (
      <Link
        to={item.href}
        onClick={() => mobile && setIsOpen(false)}
        className={`
          relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
          ${active 
            ? "text-primary bg-primary/10 font-medium" 
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          }
          ${mobile ? "w-full justify-start" : ""}
        `}
      >
        <Icon className="h-4 w-4" />
        <span>{item.name}</span>
        {active && !mobile && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
            initial={false}
            transition={{ type: "spring", duration: 0.4 }}
          />
        )}
      </Link>
    );
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-sm" />
            </div>
            <span className="font-semibold text-lg group-hover:text-primary transition-colors">
              CS/AI × Ocean
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>

          {/* Right side - Theme toggle + Mobile menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold text-lg">CS/AI × Ocean</span> 
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <NavLink key={item.name} item={item} mobile />
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}