import { Card } from '../../app/components/ui/card';
import { Progress } from '../../app/components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Deep Learning (TensorFlow)', level: 95 },
        { name: 'Computer Vision', level: 90 },
        { name: 'Natural Language Processing', level: 88 },
        { name: 'Reinforcement Learning', level: 82 }
      ]
    },
    {
      category: 'Programming & Tools',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL & NoSQL Databases', level: 85 },
        { name: 'Javascript', level: 80 },
        { name: 'Git & GitHub', level: 88 }
      ]
    },
    {
      category: 'Data & Cloud',
      skills: [
        { name: 'Data Preprocessing & Feature Engineering', level: 92 },
        { name: 'AWS (SageMaker, EC2, Lambda)', level: 85 },
        { name: 'MLOps & Model Deployment', level: 87 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Technical proficiencies across the ML/AI technology stack
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl mb-6 text-center text-blue-600">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl mb-8 text-center">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Complete Data Science,Machine Learning,DL,NLP Bootcamp (Udemy)',
                'Agentic AI (DeepLearning.AI)',
                'Microsoft Azure Machine Learning Fundamentals (LinkedIn Learning Community)',
                'Generative AI: Introduction to Large Language Models (LinkedIn Learning Community)',
                'RAG Course for Beginners (Simplilearn)',
                'Langchain Course for Beginners (Simplilearn)'
              ].map((cert, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                  <p className="text-slate-700">{cert}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
