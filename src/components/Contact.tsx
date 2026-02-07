import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MapPin, Phone, Send, Download } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in production, connect to a backend
    const mailtoLink = `mailto:usvairalkar293@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want
            to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:usvairalkar293@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    usvairalkar293@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">India</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Open For</h3>
                  <p className="text-muted-foreground text-sm">
                    Internships & Entry-level Positions
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover-lift glow-effect"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="glass-card p-1">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg transition-all"
              />
            </div>

            <div className="glass-card p-1">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg transition-all"
              />
            </div>

            <div className="glass-card p-1">
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full py-4 glass-card border-primary/30 hover:border-primary hover:glow-effect rounded-lg font-medium transition-all duration-300 group"
            >
              <Send className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
