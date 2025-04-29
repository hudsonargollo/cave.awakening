'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

type PhilosophyStepProps = {
  onNext: () => void
}

export function PhilosophyStep({ onNext }: PhilosophyStepProps) {
  const [sliderValue, setSliderValue] = useState(15)
  
  return (
    <div className="max-w-3xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-white mb-8 text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        A FILOSOFIA DA CAVERNA
      </motion.h2>
      
      <motion.div 
        className="bg-gray-900 bg-opacity-50 p-8 rounded-xl mb-8 shadow-xl border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <p className="text-gray-200 mb-8 text-lg italic leading-relaxed">
          "A caverna representa sua mente. No início, é escura e cheia de sombras —
          suas limitações, seus medos, suas dúvidas. A cada desafio superado, você 
          acende uma tocha e enxerga mais claramente quem você realmente é."
        </p>
        
        <div className="h-48 w-full bg-gradient-to-r from-black to-gray-900 rounded-lg 
                        relative overflow-hidden mb-6 border border-gray-800">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-700 to-amber-600"
            style={{ width: `${sliderValue}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${sliderValue}%` }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="absolute inset-0 flex items-center px-4">
            <motion.div 
              className="w-6 h-6 bg-white rounded-full shadow-lg shadow-amber-500/50 absolute z-10"
              style={{ left: `calc(${sliderValue}% - 12px)` }}
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: `calc(${sliderValue}% - 12px)`, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none">
              <path 
                d="M8 12h8M12 16V8" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <circle 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="2" 
              />
            </svg>
          </div>
        </div>
        
        <div className="mb-4">
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={sliderValue}
            onChange={(e) => setSliderValue(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="flex justify-between text-gray-400 text-sm italic mb-8">
          <span>ESCURIDÃO</span>
          <span>CLAREZA</span>
        </div>
        
        <motion.div 
          className="p-6 border border-gray-700 rounded-lg bg-gray-900 transition-all duration-500"
          animate={{ 
            opacity: sliderValue > 50 ? 1 : 0.4,
          }}
        >
          <p className="text-gray-300">
            {sliderValue > 50 
              ? "Quando iluminamos nossa mente, começamos a enxergar padrões, possibilidades e caminhos que antes estavam ocultos. O Modo Caverna é esse processo: uma jornada intencional de autoconhecimento e evolução."
              : "No início da jornada, você só sente que algo precisa mudar. Há um desconforto, um chamado para algo maior. Essa escuridão é o ponto de partida - você sabe que precisa avançar, mesmo sem ver o caminho claramente."}
          </p>
        </motion.div>
      </motion.div>
      
      <motion.button 
        onClick={onNext}
        className="px-8 py-4 bg-red-600 text-white rounded-md font-bold flex items-center mx-auto 
                 hover:bg-red-700 transition-all shadow-lg shadow-red-900/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        CONTINUAR
        <ChevronRight className="ml-2" />
      </motion.button>
    </div>
  )
}
