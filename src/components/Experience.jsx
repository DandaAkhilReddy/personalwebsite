import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'HHA Hospital Medicine',
    period: '2023 - Present',
    icon: '🏥',
    color: 'from-blue-500 to-purple-600',
    highlights: [
      'Architected Azure-based ML platform processing 100GB+ daily healthcare data across 15 hospitals',
      'Built RAG system using Cognitive Search and Azure ML serving 50K+ daily clinical decisions',
      'Improved denial prediction accuracy from 72% to 95% through A/B testing and feature engineering',
      'Implemented medallion architecture with Data Lake Gen2 achieving sub-second query performance',
      'Delivered $2M annual cost savings through ML-driven process optimization'
    ]
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon',
    period: '2021 - 2023',
    icon: '📦',
    color: 'from-orange-500 to-red-600',
    highlights: [
      'Built edge AI system for fleet safety across 1,000+ vehicles',
      'Deployed YOLOv3 on Raspberry Pi achieving 92% drowsiness detection at 30 FPS',
      'Architected AWS microservices handling 100K requests/sec using Lambda, SQS, and EKS',
      'Reduced inference latency by 40% through edge computing optimization',
      'Trained models in SageMaker with distributed training on GPU clusters'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Various Projects',
    period: '2019 - 2021',
    icon: '💻',
    color: 'from-green-500 to-emerald-600',
    highlights: [
      'Built real-time chat platform supporting 1,000+ concurrent users with Socket.io',
      'Developed Spring Boot REST APIs with Hibernate ORM for financial services',
      'Optimized SQL queries achieving 30% performance improvement through indexing',
      'Implemented caching layer with Redis reducing database load by 60%',
      'Created responsive frontends using Angular 2 and React'
    ]
  }
]

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Texas A&M University',
    period: '2020 - 2021',
    gpa: '3.7/4.0',
    icon: '🎓',
    description: 'Specialization in Machine Learning, Artificial Intelligence, and Data Science. Focused on deep learning, computer vision, and distributed systems.'
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'University',
    period: '2015 - 2019',
    gpa: '3.7/4.0',
    icon: '🎓',
    description: 'Strong foundation in algorithms, data structures, software engineering, and database systems. Active participant in coding competitions.'
  }
]

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="glass rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className={`text-4xl p-3 bg-gradient-to-br ${exp.color} rounded-xl`}>
            {exp.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <p className="text-primary font-semibold mb-1">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.period}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {exp.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-gray-400"
            >
              <span className="text-primary mt-1">▸</span>
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function EducationCard({ edu, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl p-8"
    >
      <div className="text-5xl mb-4">{edu.icon}</div>
      <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
      <p className="text-primary font-semibold mb-2">{edu.degree}</p>
      <p className="text-gray-400 text-sm mb-4">{edu.period}</p>
      <p className="text-gray-400 mb-4">{edu.description}</p>
      <div className="inline-block px-4 py-2 bg-slate-800 rounded-lg font-semibold">
        GPA: {edu.gpa}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Professional Experience</span>
            </h2>
            <p className="text-xl text-gray-400">Building scalable systems and impactful software solutions</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xl text-gray-400">Academic foundation in computer science and machine learning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
