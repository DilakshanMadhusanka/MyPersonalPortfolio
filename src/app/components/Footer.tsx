import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl text-white mb-2">Dilakshan Madhusanka</h3>
              <p className="text-slate-400">AI/ML Engineer</p>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/DilakshanMadhusanka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/dilakshan-madhusanka-90152b360/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:madhusankamrd@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="flex items-center justify-center gap-2 text-sm">
              Made by Dilakshan Madhusanka © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
