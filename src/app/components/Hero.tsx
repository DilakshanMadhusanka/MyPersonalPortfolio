import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { Button } from '../../app/components/ui/button';
import { ImageWithFallback } from '../../app/components/imagewithfallback/ImageWithFallback';
import { jsPDF } from 'jspdf';

const profilePic = '/profile.png';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add content to the PDF
    doc.setFontSize(24);
    doc.text('Alex Thompson', 20, 20);
    
    doc.setFontSize(16);
    doc.text('AI/ML Engineer', 20, 35);
    
    doc.setFontSize(12);
    doc.text('Email: alex.thompson@email.com', 20, 50);
    doc.text('Phone: +1 (555) 123-4567', 20, 60);
    doc.text('Location: San Francisco, CA', 20, 70);
    
    doc.setFontSize(16);
    doc.text('Summary', 20, 90);
    doc.setFontSize(11);
    const summary = 'Experienced AI/ML Engineer with 5+ years of expertise in developing cutting-edge solutions that bridge theoretical research and practical applications. Specializing in computer vision, NLP, and reinforcement learning.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, 100);
    
    doc.setFontSize(16);
    doc.text('Skills', 20, 125);
    doc.setFontSize(11);
    doc.text('• Deep Learning (TensorFlow, PyTorch, Keras)', 20, 135);
    doc.text('• Computer Vision & Natural Language Processing', 20, 143);
    doc.text('• MLOps & Model Deployment (AWS, Docker, Kubernetes)', 20, 151);
    doc.text('• Python, SQL, Git, CI/CD', 20, 159);
    
    doc.setFontSize(16);
    doc.text('Experience', 20, 180);
    doc.setFontSize(11);
    doc.text('Senior AI/ML Engineer | Tech Company | 2021 - Present', 20, 190);
    doc.text('• Deployed models serving millions of users', 25, 198);
    doc.text('• Contributed to open-source ML frameworks', 25, 206);
    
    doc.text('ML Engineer | StartUp Inc | 2019 - 2021', 20, 220);
    doc.text('• Built scalable ML pipelines for production', 25, 228);
    doc.text('• Achieved 95% accuracy on key projects', 25, 236);
    
    // Save the PDF
    doc.save('Alex_Thompson_Resume.pdf');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Professional Picture */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30"></div>
                <ImageWithFallback 
                  // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg1MTYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  src={profilePic}
                  alt="Dilakshan Madhusanka"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-700/50 shadow-2xl"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
                  AI/ML Engineer
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dilakshan Madhusanka</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8">
                Building intelligent systems that learn, adapt, and transform data into actionable insights
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg" onClick={scrollToProjects}>
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-800 hover:bg-slate-800" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="https://github.com/DilakshanMadhusanka" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/dilakshan-madhusanka-90152b360/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:madhusankamrd@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}