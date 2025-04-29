'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

// Componentes de etapas
import { WelcomeStep } from './steps/welcome-step'
import { PhilosophyStep } from './steps/philosophy-step'
import { AssessmentStep } from './steps/assessment-step'
import { ChallengeStep } from './steps/challenge-step'
import { DashboardStep } from './steps/dashboard-step'
import { MissionStep } from './steps/mission-step'
import { NotificationStep } from './steps/notification-step'
import { CompletionStep } from './steps/completion-step'

// Componentes auxiliares
import { ProgressIndicator } from './progress-indicator'
import { Mascot } from './mascot'

// Tipos
export type OnboardingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type TooltipContent = '' | 'desafio' | 'flow' | 'agenda' | 'ordem' | 'forja'

export type UserSelections = {
  obstacle: string
  area: string
  time: string
  intensity: string
  category?: string
  scheduleTime?: string
  duration?: string
  reminder?: boolean
}

const mascotDialogs = {
  1: "FALA, GUERREIRO! Eu sou o Capitão Caverna, e eu estava te esperando. Você não chegou aqui por acaso. Algo dentro de você estava gritando por mudança, não é mesmo? Vamos despertar o lobo que existe em você!",
  2: "A Caverna representa sua jornada interior. No início, é escura e desconhecida. Mas a cada desafio superado, você acende uma tocha e enxerga mais do seu verdadeiro potencial.",
  3: "Antes de avançarmos, preciso conhecer você. Sem papas na língua. Sem mentir para si mesmo. Só verdades cruas. Responda com honestidade brutal:",
  4: "Este é o coração da Caverna: 40 dias para reprogramar sua mente. Cada dia, uma nova batalha. Cada batalha, uma nova força. Nada é por acaso aqui.",
  5: "Esta é sua Central de Comando. Daqui você controlará sua evolução. É onde sua jornada diária começa e termina.",
  6: "Sua primeira missão começa AGORA. Vamos criar seu primeiro compromisso inegociável para amanhã. Se você disse que vai fazer, então você VAI fazer. Sem negociação.",
  7: "Para um guerreiro, disciplina é tudo. Vou te lembrar dos momentos cruciais para não perder o ímpeto. Sem lembretes, não há consistência. Sem consistência, não há transformação.",
  8: "A partir de agora, você não é mais o mesmo. Dentro da Caverna, não existe meio termo. Ou você evolui, ou fica onde está. Eu estarei ao seu lado em cada passo dessa jornada. MODO CAVERNA: ATIVADO!"
} as const

// Posicionamento do mascote para cada etapa
const mascotPositions = {
  1: "bottom-10 right-10",
  2: "bottom-10 left-10",
  3: "top-20 right-10",
  4: "bottom-10 left-10",
  5: "top-20 right-10", 
  6: "bottom-10 left-10",
  7: "top-20 right-10",
  8: "bottom-20 left-1/2 -translate-x-1/2"
} as const

export default function OnboardingContainer() {
  const [step, setStep] = useState<OnboardingStep>(1)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipContent, setTooltipContent] = useState<TooltipContent>('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [selections, setSelections] = useState<UserSelections>({
    obstacle: '',
    area: '',
    time: '',
    intensity: '',
    category: '',
    scheduleTime: '',
    duration: '',
    reminder: true
  })

  // Configurar tooltip
  const handleTooltip = (content: TooltipContent, visible: boolean) => {
    setTooltipContent(content)
    setShowTooltip(visible)
  }

  // Atualizar seleções do usuário
  const updateSelections = (key: keyof UserSelections, value: string | boolean) => {
    setSelections(prev => ({
      ...prev,
      [key]: value
    }))
  }

  // Avançar para a próxima etapa
  const handleNext = () => {
    if (step < 8 && !isAnimating) {
      setIsAnimating(true)
      
      setTimeout(() => {
        setStep(prev => (prev + 1) as OnboardingStep)
        setIsAnimating(false)
      }, 300)
    }
  }

  // Verificar se pode avançar para a próxima etapa
  const canAdvance = (): boolean => {
    // Na etapa do questionário, verifica se todas as opções foram selecionadas
    if (step === 3) {
      return Boolean(
        selections.obstacle && 
        selections.area && 
        selections.time && 
        selections.intensity
      )
    }
    
    // Na etapa da primeira missão, verifica se as opções necessárias foram selecionadas
    if (step === 6) {
      return Boolean(
        selections.category && 
        selections.scheduleTime && 
        selections.duration
      )
    }
    
    return true
  }

  // Renderizar o conteúdo da etapa atual
  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep onNext={handleNext} />
      case 2:
        return <PhilosophyStep onNext={handleNext} />
      case 3:
        return (
          <AssessmentStep 
            selections={selections} 
            updateSelections={updateSelections} 
            onNext={handleNext} 
            canAdvance={canAdvance()} 
          />
        )
      case 4:
        return <ChallengeStep onNext={handleNext} />
      case 5:
        return (
          <DashboardStep 
            onNext={handleNext} 
            setTooltip={handleTooltip} 
            showTooltip={showTooltip} 
            tooltipContent={tooltipContent} 
          />
        )
      case 6:
        return (
          <MissionStep 
            selections={selections} 
            updateSelections={updateSelections} 
            onNext={handleNext} 
            canAdvance={canAdvance()} 
          />
        )
      case 7:
        return <NotificationStep onNext={handleNext} />
      case 8:
        return <CompletionStep />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 pt-20 pb-20 relative">
      {/* Indicador de progresso */}
      <ProgressIndicator currentStep={step} />
      
      {/* Mascote Capitão Caverna */}
      <Mascot 
        step={step} 
        position={mascotPositions[step]} 
        dialog={mascotDialogs[step]} 
        isAnimating={isAnimating} 
      />
      
      {/* Conteúdo da etapa */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
