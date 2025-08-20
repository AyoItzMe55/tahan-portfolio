import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Linkedin, Github, FileText, Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import contactPortrait from "@/assets/contact-portrait.jpg";

interface ContactForm {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // spam protection
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("student@example.com");
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email address manually.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (data: ContactForm) => {
    // Check honeypot
    if (data.honeypot) {
      return; // Bot detected
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "student@example.com",
      href: "mailto:student@example.com",
      action: copyEmail
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/student",
      href: "https://linkedin.com/in/student"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/student",
      href: "https://github.com/student"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            eyebrow="Get in Touch"
            title="Contact"
            description="I'd love to hear from you! Whether you're interested in collaboration, have questions about my projects, or want to discuss opportunities in CS/AI and sustainability."
            className="mb-16"
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Profile & Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Photo */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-elegant bg-gradient-ocean p-1 mb-6">
                <img 
                  src={contactPortrait}
                  alt="Contact photo - approachable high school student passionate about technology and sustainability"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <p className="text-muted-foreground">
                Always excited to connect with fellow students, researchers, and professionals passionate about using technology for environmental good.
              </p>
            </div>

            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.label} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{method.label}</p>
                        <div className="flex items-center space-x-2">
                          <a 
                            href={method.href} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors truncate"
                            {...(method.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            {method.value}
                          </a>
                          {method.action && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={method.action}
                              className="h-6 w-6 p-0"
                            >
                              {copied ? (
                                <Check className="h-3 w-3 text-green-600" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Resume */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Current Resume</p>
                    <p className="text-sm text-muted-foreground">Updated May 2025</p>
                  </div>
                  <Button variant="outline" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  I typically respond within 24-48 hours. Please feel free to reach out about projects, collaborations, or just to say hello!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field (hidden) */}
                  <input
                    type="text"
                    {...register("honeypot")}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell me about your project, question, or just say hello..."
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters"
                        }
                      })}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    <strong>Privacy Note:</strong> I won't share your information with third parties. 
                    Your message will only be used to respond to your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}