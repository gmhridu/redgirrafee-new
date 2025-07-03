import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  isOpen, 
  onClick, 
  className 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 border border-slate-300/50 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center group",
        className
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-5 h-4 flex flex-col justify-between">
        {/* Top line */}
        <motion.div
          className="h-0.5 bg-slate-700 rounded-full origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
            scaleX: isOpen ? 1.1 : 1,
          }}
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        />
        
        {/* Middle line */}
        <motion.div
          className="h-0.5 bg-slate-700 rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
          }}
          transition={{ 
            duration: 0.2, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        />
        
        {/* Bottom line */}
        <motion.div
          className="h-0.5 bg-slate-700 rounded-full origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
            scaleX: isOpen ? 1.1 : 1,
          }}
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        />
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/0 to-emerald-600/0 group-hover:from-emerald-400/10 group-hover:to-emerald-600/10 transition-all duration-300" />
    </button>
  )
}

export { HamburgerMenu }
