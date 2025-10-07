import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Senior Software Engineer - ML/Cloud',
    company: 'HHA Hospital Medicine',
    period: '2023 - Present',
    location: 'Corpus Christi, TX',
    icon: '🏥',
    color: 'from-blue-500 to-purple-600',
    highlights: [
      'Built scalable ML pipelines serving 15+ hospitals using Azure ML',
      'Built RAG systems using Azure Cognitive Services for clinical intelligence',
      'Processing 100GB+ daily healthcare data with sub-second query latency',
      'A/B testing framework improving prediction accuracy by 23%',
      'PyTorch ML models impacting 50K+ daily clinical decisions',
      'Achieved 95% model accuracy, improving from 72% baseline',
      'Led ML team of 8, establishing architecture patterns and standards'
    ]
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon',
    period: '2021 - 2023',
    location: 'Seattle, WA',
    icon: '📦',
    color: 'from-orange-500 to-red-600',
    highlights: [
      'Computer vision ML models using CNNs and pattern recognition',
      'Kubernetes/EKS workloads for 1000+ fleet vehicles',
      'Distributed systems handling 100K+ requests/second',
      'AWS Lambda, SQS, SNS for real-time GNSS and camera processing',
      'SageMaker ML pipeline reducing latency by 40%',
      '92% accuracy driver monitoring with YOLO v3 on edge devices',
      '30 FPS multi-threaded processing for collision avoidance'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Financial Services',
    period: '2019 - 2021',
    location: 'Remote',
    icon: '💼',
    color: 'from-green-500 to-emerald-600',
    highlights: [
      'Front-end with HTML5, CSS3, jQuery, Bootstrap',
      'Spring Boot REST APIs with Hibernate ORM',
      '30% SQL performance improvement through optimization',
      'Node.js chat platform with 1000+ concurrent users',
      'WebSocket, MongoDB, Redis architecture'
    ]
  }
]

const education = [
  {
    degree: 'MS in Computer Science',
    school: 'Texas A&M University',
    period: 'Dec 2021',
    gpa: '3.7/4.0',
    icon: '🎓',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    degree: 'BTech in Computer Science',
    school: 'SRM Institute of Technology',
    period: 'May 2019',
    gpa: '3.7/4.0',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500'
  }
]

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative cursor-pointer"
    >
      <div className="glass rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className={`text-4xl p-3 bg-gradient-to-br ${edu.color} rounded-xl`}>
            {exp.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <p className="text-primary font-semibold mb-1">{exp.company}</p>
            <div className="flex gap-3 text-gray-400 text-sm">
              <span>📅 {exp.period}</span>
              <span>📍 {exp.location}</span>
            </div>
          </div>
        </div>
        <ul className="space-y-3">
          {exp.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-gray-400"
            >
              <span className="text-primary mt-1">▸</span>
              <span>{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function EducationCard({ edu, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="glass rounded-2xl p-8"
    >
      <div className={`text-4xl p-3 bg-gradient-to-br ${edu.color} rounded-xl`}>
        <div className="text-5xl">{edu.icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
      <p className="text-primary font-semibold mb-2">{edu.degree}</p>
      <p className="text-gray-400 text-sm mb-4">📅 {edu.period}</p>
      <div className="inline-block px-4 py-2 bg-slate-800 rounded-lg font-semibold">
        GPA: {edu.gpa}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
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
            <p className="text-xl text-gray-400">Building scalable ML systems</p>
          </motion.div>
          <div className="space-y-8">
            {experiences.map((exp, i) => <ExperienceCard key={i} exp={exp} index={i} />)}
          </div>
        </div>
      </section>

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
            <p className="text-xl text-gray-400">Academic foundation in CS & ML</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, i) => <EducationCard key={i} edu={edu} index={i} />)}
          </div>
        </div>
      </section>
    </>
  )
}
