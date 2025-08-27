import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryannamdev2003@gmail.com",
      href: "mailto:aryannamdev2003@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      href: "#"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-hero-gradient" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to bring innovative solutions to your team. I'm actively seeking 
            full-time opportunities where I can contribute to meaningful projects 
            and continue growing as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">{info.label}</p>
                        <a 
                          href={info.href} 
                          className="text-white font-medium hover:text-accent-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-6 h-6" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-hover flex-1"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 flex-1"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Project Discussion / Job Opportunity"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-primary hover:bg-white/90 shadow-hover"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80">
            © 2024 Aryan. Built with React & Tailwind CSS. 
            Available for full-time opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;