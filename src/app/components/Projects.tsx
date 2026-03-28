import { Card } from '../../app/components/ui/card';
import { Badge } from '../../app/components/ui/badge';
import { Button } from '../../app/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../../app/components/imagewithfallback/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Multiple Disease Prediction System',
      description: 'An intelligent AI-driven system that analyzes patient health data to accurately predict multiple diseases at an early stage, enabling faster diagnosis, better decision-making, and improved healthcare outcomes.',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/584/244/datas/original.png',
      tags: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'Streamlit', 'Jupyter Notebook'],
      github: 'https://github.com/DilakshanMadhusanka/Multiple-Disease-Prediction-System',
      demo: 'https://example.com'
    },
    {
      title: 'Unknown Face Recognition System',
      description: 'An AI-powered system that detects and identifies unknown faces in real time, enhancing security by recognizing unregistered individuals and flagging potential threats automatically.',
      image: 'https://tse3.mm.bing.net/th/id/OIP._OOV_ABq1bCjcTrl3c3aBwHaEP?w=1024&h=587&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Python', 'Numpy', 'OpenCV'],
      github: 'https://github.com/DilakshanMadhusanka/Unknown_Face_Recognition',
      demo: 'https://example.com'
    },
    {
      title: 'Lecture PDF Q&A Bot using RAG & FAISS',
      description: 'An AI-powered chatbot that uses RAG and FAISS to understand lecture PDFs and deliver accurate, context-aware answers instantly.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.oMs2h2LKa_LGOcJVM75jswHaEM?rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Python', 'Streamlit', 'LangChain','FAISS'],
      github: 'https://github.com/DilakshanMadhusanka/Lecture_PDF-Q-A-Bot-FAISS',
      demo: 'https://example.com'
    },
    {
      title: 'RAG Chatbot using Python',
      description: 'A RAG chatbot retrieves relevant data from a database and then generates accurate, context-aware answers based on that information.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2ODU0NDUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['LangChain', 'FAISS', 'OpenAI Embeddings', 'PostgresSQL'],
      github: 'https://github.com/ZentroThread/RAG_ChatBot',
      demo: 'https://client-frontend-azure.vercel.app/',
      demo: 'https://fabriq-frontend.vercel.app/'
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
