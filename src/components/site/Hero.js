import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { whatsappLink } from "./config";

const HERO_BG =
    "https://images.pexels.com/photos/7505924/pexels-photo-7505924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const lines = [
    { text: "A terapia não é", accent: false },
    { text: "para todo mundo.", accent: false },
    { text: "É para quem tem coragem", accent: false },
    { text: "de olhar no espelho.", accent: true },
];

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section ref={ref} id="top" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
            <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10" aria-hidden="true">
                <img
                    src={HERO_BG}
                    alt=""
                    className="w-full h-[120%] object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-[#0A0A0C]/40" />
            </motion.div>

            <motion.div style={{ y: textY, opacity: fade }} className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                    className="font-mono-accent text-xs uppercase tracking-[0.2em] text-[#E35A3D] mb-10"
                    data-testid="hero-overline"
                >
                    Grazi Gomes · Psicóloga Clínica · CRP Brasil · BPS Londres
                </motion.p>

                <h1 className="font-serif-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] tracking-tighter max-w-5xl">
                    {lines.map((line, i) => (
                        <span key={i} className="mask-line">
                            <motion.span
                                className={`block ${line.accent ? "italic text-[#E35A3D]" : ""}`}
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {line.text}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                    <a
                        href={whatsappLink("Oi, Grazi. Tenho coragem de olhar no espelho. Quero agendar uma sessão.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-cta-button"
                        className="group bg-[#E35A3D] text-[#0A0A0C] font-medium px-8 py-4 rounded-full text-base hover:bg-[#F2F2F2] hover:-translate-y-1 transition-[background-color,transform] duration-300"
                    >
                        Aceito o desafio
                    </a>
                    <a
                        href="#atendimentos"
                        data-testid="hero-quiz-link"
                        className="text-[#A1A1AA] hover:text-[#F2F2F2] transition-colors duration-300 text-base border-b border-[#27272A] hover:border-[#E35A3D] pb-1"
                    >
                        Conheça as áreas de atendimento ↓
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A1A1AA]"
                aria-hidden="true"
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};
