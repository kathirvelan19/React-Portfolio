import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const socialLinks = [
    { icon: "fab fa-linkedin", url: "https://linkedin.com/in/kathirvelan", label: "LinkedIn" },
    { icon: "fab fa-github", url: "https://github.com/kathirvelan", label: "GitHub" },
    { icon: "fas fa-blog", url: "#", label: "Blog" },
    { icon: "fab fa-hackerrank", url: "https://hackerrank.com/kathirvelan", label: "HackerRank" },
    { icon: "fas fa-code", url: "https://leetcode.com/kathirvelan", label: "LeetCode" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-fiery-accent mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fiery-primary rounded-full flex items-center justify-center fiery-glow">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Email</p>
                    <p className="text-text-secondary">kathirvelankvr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fiery-secondary rounded-full flex items-center justify-center secondary-glow">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Phone</p>
                    <p className="text-text-secondary">+91 9025132739</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fiery-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-bg-primary"></i>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Location</p>
                    <p className="text-text-secondary">Cheyyanur Village, Tiruvannamalai District</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-fiery-accent mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-bg-secondary border border-fiery-primary/20 rounded-full flex items-center justify-center text-fiery-primary hover:bg-fiery-primary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-secondary p-8 rounded-lg border border-fiery-primary/20">
            <h3 className="text-2xl font-semibold text-fiery-accent mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-text-primary font-semibold mb-2" htmlFor="name">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-fiery-primary/20 rounded-lg text-text-primary focus:outline-none focus:border-fiery-primary focus:ring-2 focus:ring-fiery-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-text-primary font-semibold mb-2" htmlFor="email">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-fiery-primary/20 rounded-lg text-text-primary focus:outline-none focus:border-fiery-primary focus:ring-2 focus:ring-fiery-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-text-primary font-semibold mb-2" htmlFor="subject">
                  Subject *
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange('subject')}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-fiery-primary/20 rounded-lg text-text-primary focus:outline-none focus:border-fiery-primary focus:ring-2 focus:ring-fiery-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-text-primary font-semibold mb-2" htmlFor="message">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-primary border border-fiery-primary/20 rounded-lg text-text-primary focus:outline-none focus:border-fiery-primary focus:ring-2 focus:ring-fiery-primary/20 transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-fiery-primary hover:bg-fiery-secondary px-8 py-3 rounded-lg text-white font-semibold fiery-glow hover:secondary-glow transition-all duration-300"
              >
                {contactMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
