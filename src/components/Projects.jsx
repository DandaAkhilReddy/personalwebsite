import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from "react-parallax-tilt"

const projects = [
  {
    title: 'Healthcare ML Platform - HHA Medicine',
    subtitle: 'Azure ML | RAG System | HIPAA Compliant',
    icon: '🏥',
    gradient: 'from-blue-500 to-purple-600',
    metrics: [
      { value: '100GB+', label: 'Daily Data' },
      { value: '15+', label: 'Hospitals' },
      { value: '50K+', label: 'Decisions/Day' },
      { value: '95%', label: 'Accuracy' }
    ],
    highlights: [
      'Built scalable ML pipelines serving 15+ hospitals using Azure ML',
      'Implemented RAG system using Azure Cognitive Services for clinical data analysis',
      'Achieved 95% model accuracy, improving from 72% baseline',
      'Established A/B testing framework, improving prediction accuracy by 23%',
      'Processing real-time healthcare data with sub-second query latency'
    ],
    tech: ['Azure ML', 'PyTorch', 'Cognitive Search', 'Data Lake Gen2', 'Synapse Analytics', 'Kubernetes']
  },
  {
    title: 'Fleet Edge AI - Amazon',
    subtitle: 'Real-time Computer Vision | IoT | Edge Computing',
    icon: '🚗',
    gradient: 'from-orange-500 to-red-600',
    metrics: [
      { value: '92%', label: 'Detection' },
      { value: '1,000+', label: 'Vehicles' },
      { value: '100K', label: 'Req/Sec' },
      { value: '40%', label: 'Latency Cut' }
    ],
    highlights: [
      'Published research on real-time driver monitoring - 92% accuracy',
      'CNN, YOLO v3, OpenCV deployed on Raspberry Pi edge devices',
      'Architected AWS microservices handling 100K+ requests/second',
      'Multi-threaded architecture processing 30 FPS for lane departure, collision avoidance',
      'IoT sensor fusion: camera, ultrasonic, GPS integration'
    ],
    tech: ['AWS Lambda', 'SageMaker', 'YOLO v3', 'TensorFlow', 'Docker', 'EKS']
  },
  {
    title: 'Real-Time Chat Platform',
    subtitle: 'WebSocket | Microservices | Scalable Architecture',
    icon: '💬',
    gradient: 'from-green-500 to-emerald-600',
    metrics: [
      { value: '1,000+', label: 'Concurrent Users' },
      { value: '30%', label: 'SQL Performance' },
      { value: '10K+', label: 'Req/Sec' },
      { value: 'Real-time', label: 'Messaging' }
    ],
    highlights: [
      'Built scalable chat platform using Node.js, Express.js, Angular 2',
      'WebSocket connections (Socket.io) for bi-directional communication',
      'MongoDB for message persistence, Redis for session management',
      'RESTful APIs with Spring Boot and Hibernate ORM',
      'Improved SQL query performance by 30% through optimization'
    ],
    tech: ['Node.js', 'Socket.io', 'Angular 2', 'MongoDB', 'Redis', 'Spring Boot']
  }
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={2000} gyroscope={true}
        
      >
        <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <div className="text-5xl mb-3">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/90 text-sm">{project.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-gradient">{metric.value}</div>
                  <div className="text-xs text-gray-400 font-semibold">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-primary mt-1 text-xs">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-semibold border border-white/10 hover:border-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400">Production-scale ML systems and distributed applications</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
