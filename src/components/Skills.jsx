import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'Bash']
  },
  {
    title: 'Cloud Platforms - AWS',
    icon: '☁️',
    color: 'from-orange-500 to-yellow-500',
    skills: ['Lambda', 'S3', 'SQS', 'SNS', 'EC2', 'SageMaker', 'CloudWatch', 'EKS', 'IAM', 'DynamoDB']
  },
  {
    title: 'Cloud Platforms - Azure',
    icon: '🌐',
    color: 'from-blue-600 to-indigo-600',
    skills: ['Data Factory', 'Data Lake', 'Synapse', 'Functions', 'ML Studio', 'Event Hubs', 'Stream Analytics', 'SQL Database']
  },
  {
    title: 'Web Technologies',
    icon: '🚀',
    color: 'from-green-500 to-emerald-500',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React', 'Bootstrap', 'REST APIs', 'Spring Boot']
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500',
    skills: ['PostgreSQL', 'DynamoDB', 'MySQL', 'Azure SQL', 'Data Lake Storage', 'MongoDB', 'Redis']
  },
  {
    title: 'CI/CD & DevOps',
    icon: '🔧',
    color: 'from-red-500 to-rose-500',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions', 'Azure DevOps']
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    color: 'from-indigo-500 to-purple-500',
    skills: ['Power BI', 'DAX', 'Pandas', 'NumPy', 'Azure Stream Analytics', 'Apache Spark', 'Tableau']
  },
  {
    title: 'Machine Learning/AI',
    icon: '🧠',
    color: 'from-pink-500 to-fuchsia-500',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'Model Deployment', 'A/B Testing']
  },
  {
    title: 'Other Technologies',
    icon: '🛠️',
    color: 'from-teal-500 to-cyan-500',
    skills: ['GNSS Systems', 'Kafka', 'Advanced MD Integration', 'HIPAA Compliance', 'Selenium', 'IoT']
  }
]

const stats = [
  { value: '15+', label: 'Hospitals Served' },
  { value: '100GB+', label: 'Daily Data Processed' },
  { value: '100K+', label: 'Requests/Second' },
  { value: '95%', label: 'ML Model Accuracy' }
]

function SkillCategory({ category, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`text-3xl p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.05 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
            className="px-3 py-2 bg-slate-800/70 rounded-lg text-sm font-semibold border border-white/10 hover:border-primary transition-all cursor-pointer"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="glass rounded-2xl p-8 text-center cursor-pointer"
    >
      <motion.div
        className="text-5xl font-bold text-gradient mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 + index * 0.1 }}
      >
        {stat.value}
      </motion.div>
      <div className="text-gray-400 font-semibold">{stat.label}</div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-400">Full-stack expertise across ML, cloud platforms, and modern web technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
