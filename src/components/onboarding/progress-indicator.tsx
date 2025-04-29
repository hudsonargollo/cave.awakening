'use client'

import { motion } from 'framer-motion'
import type { OnboardingStep } from './onboarding-container'

type ProgressIndicatorProps = {
  currentStep: OnboardingStep
}

const steps = [1, 2, 3, 4, 5, 6, 7, 8] as const

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <motion.div 
        className="bg-gray-900 bg-opacity-70 px-4 py-2 rounded-full flex space-x-2 backdrop-blur-sm
                  border border-gray-800 shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {steps.map((step) => (
          <motion.div 
            key={step} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              step === currentStep 
                ? 'bg-red-600' 
                : step < currentStep 
                  ? 'bg-amber-500' 
                  : 'bg-gray-700'
            }`}
            animate={{ 
              scale: step === currentStep ? 1.25 : 1,
              backgroundColor: step === currentStep 
                ? '#dc2626' // red-600
                : step < currentStep 
                  ? '#f59e0b' // amber-500
                  : '#374151' // gray-700
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  )
}
