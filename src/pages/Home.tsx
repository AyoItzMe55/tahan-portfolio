import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Leaf, Zap, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroPortrait from "@/assets/tahan_img_one.jpeg";

const beliefs = [
  {
    icon: Brain,
    title: "Why I care",
    content: "Growing up in India, I saw first-hand the impact of human ignorance & the effects of climate change. My family and I moved to Hawaii in 2021, since then I have been able to enjoy the luxuries of living in paradise, isolated from the rest of the world, many times living in our own world of peace, clean air, and the pacific ocean to ourselves. But I never forgot about what I experienced in India. Climate change can seem so unfair at times, some people don’t feel the effect of it, but others do. The reality is, we are killing our planet, the places we call home, and our future generations. I wish everyone would just see what I saw, to get the experiences & opportunities I was fortunate to get, so they could see the world we live in. Only then will people truly realize that climate change isn’t like any other issue. No single piece of legislation, no single service project, no individual entity can help solely remediate all of its impact. It has to be top of mind–the only thing on mind–for EVERYONE, if we ever want to see a better future. For our families, our communities, and our planet."
  },
  {
    icon: Zap,
    title: "How I approach my work", 
    content: "I will not do anything just to do it. My goal with my life is to contribute in the most positive way. So far, I am building up my experiences. Thanks to my awesome mentors, I have been able to see so much, talk to so many, and understand even more. I hope someday I can look back and know that I offset the impact on the planet from my own life–and hopefully that of many others. I haven’t yet centered on a single “thing” like a lot of my classmates have. I have ranging interests from awareness & justice to legislation & policy and computer science & AI/ML. The thing is, I don’t feel any kind of pressure to center around one “thing”. Why can’t I do everything? People keep telling me that I do too much, or I need to find something that will help me with my future. The truth is, I don’t see a future for myself where I am stuck working on something I don’t feel 100% passionate about. Having multiple avenues to attack the same issue I care about gives me constant motivation and energy to keep going. I hope I can continue this lifestyle with whatever future awaits me."
  },
  {
    icon: Leaf,
    title: "What I want people to know",
    content: "To my fellow classmates: Don’t let people tell you what you can & cannot do, or what you should or should not do. Don’t stress about what you aren’t doing, it isn’t too late to do anything, you just need to start now. Don’t do things you aren't genuinely passionate about, there’s just no point. We are told to “take the hardest classes” and to get “good grades”--even I fall for this–but the truth is, the thing that will best equip you for the future is finding your passion. Instead of plotting out your entire future while at the ripe age of 16, find what you care about. What gets you going, what impact do you want to have on the world. This will take time–a lot of time–but it will eventually happen, after a few days, after a few weeks, or even after a few years, and decades later it might change, but it doesn’t hurt to start now. Experiment and try anything & everything, don’t let people judge you or downplay you, and don’t feel like you have to do anything."
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
                Tahan <span className="text-secondary">Bapna's</span> Portfolio
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