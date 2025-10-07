import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'akhilreddydanda1@gmail.com',
    link: 'mailto:akhilreddydanda1@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Corpus Christi, Texas',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'DandaAkhilReddy',
    link: 'https://github.com/DandaAkhilReddy',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'Akhil Reddy Danda',
    link: 'https://www.linkedin.com/in/akhil-reddy-danda-1a74b214b/',
    color: 'from-blue-600 to-blue-800'
  }
]

function ContactCard({ contact, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass rounded-2xl p-8 text-center cursor-pointer"
    >
      <motion.div
        className={`inline-block p-6 bg-gradient-to-br ${contact.color} rounded-2xl mb-4`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <i className={`${contact.icon} text-4xl text-white`}></i>
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{contact.label}</h3>
      <p className="text-gray-400">{contact.value}</p>
    </motion.div>
  )

  return contact.link ? (
    <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : content
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">I'm always interested in hearing about new opportunities and projects</p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <motion.a
              href="mailto:akhilreddydanda1@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <i className="fas fa-envelope mr-2"></i>
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/akhil-reddy-danda-1a74b214b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold text-lg transition-all duration-300"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
