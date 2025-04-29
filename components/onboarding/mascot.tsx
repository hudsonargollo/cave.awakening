'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { OnboardingStep } from './onboarding-container'

type MascotProps = {
  step: OnboardingStep
  position: string
  dialog: string
  isAnimating: boolean
}

export function Mascot({ step, position, dialog, isAnimating }: MascotProps) {
  // Mapeamento das imagens do Capitão Caverna para cada etapa
  const mascotImages = {
    1: "/images/capitao-caverna1.png", // Boas-vindas
    2: "/images/capitao-caverna2.png", // Explicando a filosofia
    3: "/images/capitao-caverna5.png", // Questionando (braços cruzados)
    4: "/images/capitao-caverna6.png", // Apontando (desafio 40 dias)
    5: "/images/capitao-caverna1.png", // Tour pelo dashboard
    6: "/images/capitao-caverna3.png", // Primeira missão (mão levantada)
    7: "/images/capitao-caverna4.png", // Notificações (celular)
    8: "/images/capitao-caverna2.png"  // Final
  }
  
  return (
    <motion.div
      className={cn(
        "fixed z-40 transition-all duration-500",
        position,
        isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isAnimating ? 0 : 1, 
        scale: isAnimating ? 0.9 : 1 
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="relative w-40 h-40">
          <Image 
            src={mascotImages[step]} 
            alt="Capitão Caverna" 
            fill
            className="object-contain"
            priority
          />
          
          <div className="absolute -top-2 -right-2 bg-red-600 text-white px-2 py-1 
                        rounded-full text-xs font-bold shadow-lg">
            GUIA
          </div>
        </div>
        
        <motion.div 
          className="bg-gray-900 p-4 rounded-lg mt-2 max-w-xs shadow-xl border border-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="text-sm text-gray-300 leading-snug">{dialog}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
