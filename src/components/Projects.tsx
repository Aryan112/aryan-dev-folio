import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Users, Camera } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "There For You",
      description: "A comprehensive mental health care platform offering various therapeutic approaches including audio therapy, reading therapy, and interactive wellness features.",
      icon: Heart,
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      features: [
        "Doctor appointment booking system",
        "Personalized user dashboard",
        "Multiple therapy modalities",
        "Progress tracking and analytics",
        "Responsive design for all devices"
      ],
      category: "Full-Stack Web Application"
    },
    {
      title: "Job Portal Backend System",
      description: "Scalable backend system with RESTful APIs, advanced authentication, and role-based access control for comprehensive job management.",
      icon: Users,
      technologies: ["Java", "MySQL", "REST API", "Spring Boot"],
      features: [
        "Session-based authentication",
        "Role-based access control",
        "Optimized database performance",
        "Scalable architecture for 1000+ users",
        "Advanced search and filtering"
      ],
      category: "Backend Development"
    },
    {
      title: "AI Attendance Management",
      description: "Real-time face recognition system using computer vision for automated attendance tracking with high accuracy and efficient data management.",
      icon: Camera,
      technologies: ["Python", "OpenCV", "NumPy", "Pandas", "Machine Learning"],
      features: [
        "90%+ recognition accuracy",
        "Real-time processing",
        "Automated CSV report generation",
        "Face encoding optimization",
        "Supports 30+ simultaneous users"
      ],
      category: "AI & Computer Vision"
    }
  ];

  return (
    <section className="py-20 bg-muted/20" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through 
            real-world applications and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-border/50 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="shadow-soft">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;