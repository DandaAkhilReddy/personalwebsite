import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'
import { motion } from 'framer-motion'

function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function Particles() {
  const count = 100
  const particles = useRef()
  
  useFrame((state) => {
    particles.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })

  const particlesPosition = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particlesPosition[i3] = (Math.random() - 0.5) * 10
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 10
    particlesPosition[i3 + 2] = (Math.random() - 0.5) * 10
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <AnimatedSphere />
          <Particles />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient">Akhil Reddy Danda</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-4xl mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Development Engineer
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building scalable systems with ML, cloud platforms, and modern web technologies
          </motion.p>

          <motion.div 
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-primary/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:scale-110 transition-transform duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="https://github.com/DandaAkhilReddy" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-primary transition-colors hover:scale-125 transform duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/akhil-reddy-danda-1a74b214b/" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-primary transition-colors hover:scale-125 transform duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:akhilreddydanda1@gmail.com"
               className="text-3xl hover:text-primary transition-colors hover:scale-125 transform duration-300">
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full glass flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
