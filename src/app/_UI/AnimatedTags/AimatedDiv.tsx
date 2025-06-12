"use client"

import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode,
}

export default function AnimatedDiv({ children }: Props) {
    return (
        <motion.div 
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ delay: 0.15 }}
        >
            {children}
        </motion.div>
    )
}