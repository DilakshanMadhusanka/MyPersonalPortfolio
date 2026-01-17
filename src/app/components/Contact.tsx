import { Card } from '../../app/components/ui/card';
import { Button } from '../../app/components/ui/button';
import { Input } from '../../app/components/ui/input';
import { Textarea } from '../../app/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! This is a demo form.');
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'madhusankamrd@gmail.com' },
    { icon: Phone, label: 'Phone', value: '(+94) 77 677 5607' },
    { icon: MapPin, label: 'Location', value: 'Colombo, SL' }
  ];

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center">Get In Touch</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <h4 className="text-xl mb-3">Open to Opportunities</h4>
                <p className="text-slate-700 mb-4">
                  I'm currently available for freelance projects, consulting work, and full-time positions 
                  in AI/ML engineering. Let's build something amazing together!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-slate-700">Freelance</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-slate-700">Consulting</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-slate-700">Full-time</span>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
