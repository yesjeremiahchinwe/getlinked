import React from "react"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

type Props = {
    children: ReactNode,
    className: string
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

export default function AnimateComponent({ children, className }: Props) {
    const { inView, ref } = useInView()

    return (
        <motion.section
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
                delay: 0.3,
                ease: "easeInOut",
                duration: 0.5
            }}
            viewport={{ amount: 0 }}
            ref={ref}
            className={className}
        >{children}</motion.section>
    )
}
