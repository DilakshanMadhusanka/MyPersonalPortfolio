import { Card } from '../../app/components/ui/card';
import { Badge } from '../../app/components/ui/badge';
import { Button } from '../../app/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../../app/components/imagewithfallback/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Multiple Disease Prediction System',
      description: 'Interactive web platform for visualizing and understanding deep learning architectures. Built with TensorFlow.js and React for real-time model training visualization.',
      image: '',
      tags: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'Streamlit', 'Jupyter Notebook'],
      github: 'https://github.com/DilakshanMadhusanka/Multiple-Disease-Prediction-System',
      demo: 'https://example.com'
    },
    {
      title: 'Unknown Face Recognition System',
      description: 'Scalable REST API for real-time sentiment analysis using transformer models. Processes over 1M requests daily with 95% accuracy on production data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njg1NjI0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Numpy', 'OpenCV'],
      github: 'https://github.com/DilakshanMadhusanka/Unknown_Face_Recognition',
      demo: 'https://example.com'
    },
    {
      title: 'Lecture PDF Q&A Bot using RAG & FAISS',
      description: 'Real-time object detection system for autonomous vehicles using YOLO and custom CNN architectures. Achieved 92% mAP on COCO dataset.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2ODUyNjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Streamlit', 'LangChain','FAISS'],
      github: 'https://github.com/DilakshanMadhusanka/Lecture_PDF-Q-A-Bot-FAISS',
      demo: 'https://example.com'
    },
    {
      title: 'Reinforcement Learning Trading Bot',
      description: 'Automated trading system using Deep Q-Learning and PPO algorithms. Backtested on 10 years of market data with consistent positive returns.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2ODU0NDUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['RL', 'Gym', 'Pandas', 'NumPy'],
      github: 'https://github.com',
      demo: null
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center">Featured Projects</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            A selection of my recent work in machine learning and artificial intelligence
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
