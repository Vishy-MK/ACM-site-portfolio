"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MotionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({ children, delay = 0 }: MotionProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, delay = 0, direction = "up" }: MotionProps) {
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionVariants[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export function HoverScale({ children }: MotionProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}

