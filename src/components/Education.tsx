import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "Chandigarh University, Punjab",
      duration: "Jun 2022 – Present",
      grade: "CGPA: 6.99",
      status: "In Progress",
      description: "Comprehensive curriculum covering software engineering, data structures, algorithms, and modern development practices.",
      highlights: [
        "Strong foundation in CS fundamentals",
        "Hands-on project experience",
        "Research publication in IEEE conference",
        "Blockchain certification program"
      ]
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "M.L.D Public School, Nagal, Saharanpur",
      duration: "Apr 2020 – June 2022",
      grade: "Percentage: 68%",
      status: "Completed",
      description: "Science stream with focus on Mathematics, Physics, and Computer Science.",
      highlights: [
        "Science stream specialization",
        "Computer Science foundation",
        "Mathematics excellence",
        "Prepared for engineering entrance exams"
      ]
    },
    {
      degree: "High School (Class X)",
      institution: "M.L.D Public School, Nagal, Saharanpur",
      duration: "Apr 2018 – June 2020",
      grade: "Percentage: 86.5%",
      status: "Completed",
      description: "Strong academic foundation with excellent performance across all subjects.",
      highlights: [
        "Excellent academic performance",
        "Strong analytical skills",
        "Consistent top performer",
        "Leadership in student activities"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/20" id="education">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Education</Badge>
          <h2 className="text-4xl font-bold mb-6">Academic Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering 
            through comprehensive education and continuous learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>
                
                <Card className="lg:ml-16 p-6 bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-5 h-5 text-primary mr-2" />
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{item.institution}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{item.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <Badge 
                        variant={item.status === "In Progress" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {item.status}
                      </Badge>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-accent mr-2" />
                        <span className="font-semibold text-accent">{item.grade}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Academic Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-card-gradient border-border/50">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Research Focus</h3>
            <p className="text-sm text-muted-foreground">
              Machine Learning, Data Science, and Blockchain Technologies
            </p>
          </Card>

          <Card className="p-6 text-center bg-card-gradient border-border/50">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">Publications</h3>
            <p className="text-sm text-muted-foreground">
              IEEE Conference Paper on ML-based Music Popularity Prediction
            </p>
          </Card>

          <Card className="p-6 text-center bg-card-gradient border-border/50">
            <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2">Current Status</h3>
            <p className="text-sm text-muted-foreground">
              Final Year Student, Available for Full-time Opportunities
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;