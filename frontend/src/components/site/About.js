import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Overline } from "./Reveal";

const PORTRAIT = "/grazi.jpg";

export const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section id="sobre" ref={ref} data-testid="about-section" className="relative py-28 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
                <div className="md:col-span-5 relative">
                    <div className="overflow-hidden border border-[#27272A]/60">
                        <motion.img
                            style={{ y: imgY }}
                            src={PORTRAIT}
                            alt="Retrato da psicóloga Grazi Gomes"
                            data-testid="about-portrait"
                            className="w-full h-[520px] object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-[filter,transform,opacity] duration-700 scale-110"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#E35A3D] text-[#0A0A0C] px-6 py-4 font-mono-accent text-[11px] uppercase tracking-[0.2em]">
                        CRP Brasil · BPS Londres
                    </div>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                    <Reveal>
                        <Overline className="mb-6">Quem é Grazi Gomes</Overline>
                        <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight mb-8">
                            Uma psicóloga que une técnica, escuta e a coragem de
                            <span className="italic text-[#E35A3D]"> dizer o que precisa ser dito.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="space-y-5 text-[#A1A1AA] leading-relaxed text-base">
                            <p>
                                Grazi combina a precisão da <strong className="text-[#F2F2F2]">Terapia Cognitivo-Comportamental</strong> com
                                a sensibilidade da <strong className="text-[#F2F2F2]">Psicologia Provocativa</strong>: duas abordagens que, juntas,
                                trazem clareza e movimento para quem se sente estagnado.
                            </p>
                            <p>
                                É também <strong className="text-[#F2F2F2]">sexóloga e terapeuta de casais</strong>. A vida afetiva
                                e a intimidade merecem o mesmo cuidado técnico e o mesmo espaço de escuta sem julgamentos.
                            </p>
                            <p>
                                Formada no Brasil e <strong className="text-[#F2F2F2]">pós-graduada em Portugal</strong>, com registro
                                ativo no <strong className="text-[#F2F2F2]">CRP 183637/06</strong> e membership na
                                <strong className="text-[#F2F2F2]"> British Psychological Society (BPS 687171), em Londres</strong>.
                            </p>
                            <p>
                                Aqui você encontra escuta verdadeira, perguntas certeiras na medida certa e um plano
                                concreto para sair de cada sessão diferente de como entrou.
                            </p>
                            <p className="font-serif-display italic text-xl text-[#F2F2F2]">
                                "Meu trabalho não é te deixar confortável. É te deixar livre."
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#27272A]/60 pt-8">
                            {[
                                ["CRP", "183637/06 · Brasil"],
                                ["BPS", "687171 · Londres"],
                                ["PT", "pós-graduação · Portugal"],
                            ].map(([num, label]) => (
                                <div key={label}>
                                    <p className="font-serif-display font-black text-3xl md:text-4xl text-[#E35A3D]">{num}</p>
                                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] mt-2">{label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
