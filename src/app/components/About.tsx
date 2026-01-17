import { Brain, Code, Database, TrendingUp } from 'lucide-react';
import { Card } from '../../app/components/ui/card';
import { ImageWithFallback } from './imagewithfallback/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Expert in neural networks, CNNs, RNNs, and transformers for complex problem solving'
    },
    {
      icon: Code,
      title: 'MLOps',
      description: 'Experienced in deploying and maintaining ML models in production environments'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Skilled in building robust data pipelines and ETL processes at scale'
    },
    {
      icon: TrendingUp,
      title: 'Model Optimization',
      description: 'Proficient in hyperparameter tuning and model performance enhancement'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center">About Me</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Passionate about leveraging artificial intelligence to solve real-world problems
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2ODU0NDUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI/ML workspace"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-slate-700 mb-6">
                I'm a Computer Science undergraduate from University of Ruhuna with a deep passion for Artificial Intelligence and Machine Learning. My journey in tech began with curiosity about how intelligent systems work, and has evolved into a dedicated pursuit of building AI solutions that make a meaningful impact.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                From developing predictive models to exploring natural language processing and computer vision, I thrive on the challenge of transforming complex data into actionable insights. I believe in continuous learning and staying at the forefront of AI innovation.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                My goal is to contribute to the advancement of AI technology while building practical applications that solve real-world problems. I'm actively seeking opportunities to apply my skills in internships and entry-level roles where I can grow as an AI/ML engineer.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'Scikit-learn', 'Keras', 'Git'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <item.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
