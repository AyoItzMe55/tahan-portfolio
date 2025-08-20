import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Leaf, Zap, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const beliefs = [
  {
    icon: Brain,
    title: "What motivates me",
    content: "I believe technology should serve humanity and our planet. Every algorithm I write, every system I build, is driven by the question: how can this make the world more sustainable? The intersection of artificial intelligence and environmental science represents one of our greatest opportunities to address climate change and ocean degradation. I'm motivated by the potential to create tools that help researchers, policymakers, and communities make data-driven decisions for a healthier planet."
  },
  {
    icon: Zap,
    title: "How I approach building projects", 
    content: "My development process always starts with understanding the real-world problem and the people it affects. I believe in rapid prototyping, continuous testing, and iterative improvement. Whether I'm training a machine learning model or building a web application, I focus on creating solutions that are both technically sound and genuinely useful. I prioritize clean, maintainable code and comprehensive documentation because the best projects are those that others can build upon."
  },
  {
    icon: Leaf,
    title: "Why sustainability matters to my CS/AI work",
    content: "Computer science without purpose is just clever code. I'm passionate about using AI to accelerate environmental research, from analyzing satellite imagery to optimize renewable energy systems to building IoT networks that monitor ecosystem health. Every project I undertake considers its environmental impact and potential to contribute to sustainability goals. I believe the next generation of technologists has a responsibility to ensure our digital solutions help heal, rather than harm, our planet."
  }
];

const highlights = [
  { date: "May 2025", event: "Intel ISEF Finalist - Coral Reef Health Detection" },
  { date: "March 2025", event: "FTC Hawaii State Champions" },
  { date: "January 2025", event: "Published paper on ML for environmental monitoring" },
  { date: "December 2024", event: "Congressional App Challenge Winner" },
  { date: "November 2024", event: "NASA HUNCH Program Selection" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                CS/AI × <span className="text-secondary">Ocean</span> Sustainability
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                High school student passionate about using artificial intelligence and computer science to tackle ocean conservation challenges and environmental sustainability.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Résumé
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant bg-gradient-ocean p-1">
                <img 
                  src={heroPortrait}
                  alt="Professional portrait of a high school student passionate about CS/AI and sustainability"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Beliefs & Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              My Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Beliefs & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work at the intersection of technology and environmental stewardship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-border hover:shadow-elegant transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{belief.title}</h3>
                      </div>
                      <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                        <p>{belief.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Latest Updates
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Recent Highlights
            </h2>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-medium text-primary min-w-[100px]">
                  {highlight.date}
                </div>
                <div className="flex-1 text-muted-foreground">
                  {highlight.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}