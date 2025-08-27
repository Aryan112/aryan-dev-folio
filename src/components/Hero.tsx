import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-glow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent-glow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Available for Full-time Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground">
                Hi, I'm{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Aryan
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary-foreground/90 font-medium">
                Software Developer
              </h2>
            </div>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-md mx-auto">
              Passionate about building scalable solutions and solving real-world challenges 
              through innovative technology. Specializing in full-stack development with expertise 
              in modern frameworks and AI integration.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-hover">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/aryan-resume.pdf';
                  link.download = 'Aryan_Namdev_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;