'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

type WelcomeStepProps = {
  onNext: () => void
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div 
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-red-600 opacity-20 animate-ping rounded-full"></div>
        <div className="relative z-10">
          <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
            <path 
              d="M50 0L63 38H100L69 61L82 100L50 76L18 100L31 61L0 38H37L50 0Z" 
              className="fill-red-600" 
            />
          </svg>
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl font-bold text-white mb-4 tracking-wider"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        MODO CAVERNA
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 mb-12 max-w-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        Sua jornada de transformação começa aqui. 
        Os próximos 40 dias podem mudar completamente sua vida.
      </motion.p>
      
      <motion.button 
        onClick={onNext}
        className="px-10 py-5 bg-red-600 text-white rounded font-bold flex items-center text-lg 
                 hover:bg-red-700 transition-all transform hover:scale-105 
                 shadow-lg shadow-red-900/50"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        INICIAR JORNADA
        <ChevronRight className="ml-2" size={24} />
      </motion.button>
    </div>
  )
}
