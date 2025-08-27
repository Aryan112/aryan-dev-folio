import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Experienced in building end-to-end applications with modern frameworks"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient in both SQL and NoSQL databases with optimization techniques"
    },
    {
      icon: Globe,
      title: "Cloud Technologies",
      description: "Familiar with AWS, Azure, and Google Cloud Platform services"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Published research on ML applications and blockchain technologies"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl font-bold mb-6">Passionate About Technology</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a driven Software Developer with a solid foundation in full-stack development, 
            data structures and algorithms, and object-oriented programming. Currently pursuing 
            my B.E. in Computer Science at Chandigarh University with a passion for solving 
            real-world challenges through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card-gradient border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong academic background in Computer Science and hands-on experience 
              in various technologies, I bring a unique blend of theoretical knowledge and 
              practical skills to every project. My experience spans from building mental 
              health platforms to developing AI-powered systems for attendance management.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Problem Solving</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Full-Stack Development</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Database Design</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">AI/ML</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-primary bg-card-gradient">
                <h4 className="font-semibold text-primary mb-2">IEEE Conference Publication</h4>
                <p className="text-sm text-muted-foreground">
                  Published research paper on predicting live music popularity using machine learning 
                  techniques, contributing to data-driven event planning solutions.
                </p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-accent bg-card-gradient">
                <h4 className="font-semibold text-accent mb-2">Blockchain Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Completed intensive Blockchain Summer Bootcamp, building decentralized applications 
                  and smart contracts using Solidity and Polygon framework.
                </p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-secondary bg-card-gradient">
                <h4 className="font-semibold text-secondary-foreground mb-2">Full-Stack Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Developed multiple end-to-end applications including mental health platforms and 
                  AI-powered systems with modern tech stacks.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;