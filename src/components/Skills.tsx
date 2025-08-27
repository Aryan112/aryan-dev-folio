import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, BookOpen, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "React", level: 75 },
        { name: "OpenCV", level: 80 },
        { name: "Pandas & NumPy", level: 85 }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Azure", level: 65 },
        { name: "Google Cloud", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Cloud,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 65 },
        { name: "Tableau", level: 75 },
        { name: "Advanced Excel", level: 80 }
      ]
    }
  ];

  const softSkills = [
    "Leadership", "Team Collaboration", "Adaptability", 
    "Work Ethics", "Communication", "Time Management", "Problem Solving"
  ];

  const certifications = [
    {
      title: "IEEE Conference Publication",
      description: "Research on ML-based music popularity prediction",
      year: "2023"
    },
    {
      title: "Blockchain Summer Bootcamp",
      description: "Solidity & Polygon development certification",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Expertise</Badge>
          <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks, 
            continuously expanded through learning and practical application.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="p-6 bg-card-gradient border-border/50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Certifications & Achievements */}
          <Card className="p-6 bg-card-gradient border-border/50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;