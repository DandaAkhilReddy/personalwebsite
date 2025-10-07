import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'HHA Medicine Platform',
    subtitle: 'Azure-based healthcare analytics system',
    icon: '🏥',
    gradient: 'from-blue-500 to-purple-600',
    metrics: [
      { value: '100GB+', label: 'Daily Data' },
      { value: '15', label: 'Hospitals' },
      { value: '50K+', label: 'Decisions' },
      { value: '23%', label: 'Accuracy Boost' }
    ],
    description: 'Architected HIPAA-compliant Azure platform processing healthcare data across multiple facilities. Implemented RAG system with Cognitive Search and Azure ML for natural language queries. Achieved $2M annual savings through improved denial prediction.',
    tech: ['Azure ML', 'Data Lake Gen2', 'Synapse', 'PyTorch', 'Docker', 'Kubernetes']
  },
  {
    title: 'Fleet Edge AI System',
    subtitle: 'AWS computer vision for driver safety',
    icon: '🚗',
    gradient: 'from-orange-500 to-red-600',
    metrics: [
      { value: '92%', label: 'Detection' },
      { value: '1,000+', label: 'Vehicles' },
      { value: '100K', label: 'Req/Sec' },
      { value: '40%', label: 'Latency Cut' }
    ],
    description: 'Built edge AI for fleet safety monitoring at Amazon. Deployed YOLOv3 on Raspberry Pi achieving 30 FPS real-time inference. AWS microservices architecture handling peak loads with SageMaker training and EKS deployment.',
    tech: ['AWS Lambda', 'SageMaker', 'EKS', 'YOLO v3', 'OpenCV', 'Raspberry Pi']
  },
  {
    title: 'Real-Time Chat Platform',
    subtitle: 'Scalable full-stack application',
    icon: '💬',
    gradient: 'from-green-500 to-emerald-600',
    metrics: [
      { value: '1,000+', label: 'Concurrent Users' },
      { value: '30%', label: 'SQL Performance' }
    ],
    description: 'Built scalable real-time chat platform using Node.js and Socket.io for WebSocket connections. MongoDB for message storage, Redis for session management. Developed Spring Boot REST APIs with optimized SQL queries for financial services.',
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
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
    >
      {/* Header with gradient */}
      <div className={`bg-gradient-to-br ${project.gradient} p-10 relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10">
          <div className="text-6xl mb-4">{project.icon}</div>
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/90">{project.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {project.metrics.map((metric, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gradient">{metric.value}</div>
              <div className="text-sm text-gray-400 font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-800 rounded-lg text-sm font-semibold border border-white/10 hover:border-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
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
          <p className="text-xl text-gray-400">Production-scale ML systems and full-stack applications</p>
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
