import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    >
        {children}
    </motion.div>
);

export const Overline = ({ children, className = "" }) => (
    <p className={`font-mono-accent text-xs uppercase tracking-[0.2em] text-[#E35A3D] ${className}`}>
        {children}
    </p>
);
