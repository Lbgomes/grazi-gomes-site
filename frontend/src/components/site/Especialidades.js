import { HeartHandshake, User, Sparkles } from "lucide-react";
import { Reveal, Overline } from "./Reveal";

const areas = [
    {
        icon: User,
        n: "01",
        title: "Terapia Individual",
        text: "TCC e Psicologia Provocativa para ansiedade, autoestima, relacionamentos e tudo aquilo que insiste em se repetir. Um processo direto, com técnica e profundidade.",
    },
    {
        icon: HeartHandshake,
        n: "02",
        title: "Terapia de Casais",
        text: "Para casais que querem sair do ciclo de brigas, silêncios e mágoas acumuladas. Um espaço neutro para reconstruir diálogo, confiança e intimidade — ou decidir o futuro com clareza.",
    },
    {
        icon: Sparkles,
        n: "03",
        title: "Sexologia",
        text: "Atendimento especializado em sexualidade: desejo, intimidade, disfunções e tabus. Um espaço sem julgamentos para falar (e resolver) o que quase nunca é dito em voz alta.",
    },
];

export const Especialidades = () => (
    <section id="atendimentos" data-testid="especialidades-section" className="relative py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="mb-20 md:mb-28 max-w-3xl">
                <Overline className="mb-6">Áreas de atendimento</Overline>
                <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight">
                    Para você, para o casal e para <span className="italic text-[#E35A3D]">a intimidade</span>
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed mt-8">
                    Especializações em Terapia Cognitivo-Comportamental, Sexologia Clínica e Terapia de Casais — formação no Brasil,
                    pós-graduação em Portugal e membership na British Psychological Society (BPS), Londres.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {areas.map((a, i) => (
                    <Reveal key={a.n} delay={i * 0.12} className={i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}>
                        <article
                            data-testid={`especialidade-card-${a.n}`}
                            className="group border border-[#27272A]/60 bg-[#16161A]/60 backdrop-blur-xl p-10 h-full hover:-translate-y-2 hover:border-[#E35A3D]/50 transition-[transform,border-color] duration-500"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <a.icon size={26} className="text-[#E35A3D]" />
                                <span className="font-mono-accent text-sm text-[#A1A1AA]/60 tracking-[0.2em]">{a.n}</span>
                            </div>
                            <h3 className="font-serif-display font-bold text-2xl md:text-3xl tracking-tight mb-5 group-hover:text-[#E35A3D] transition-colors duration-300">
                                {a.title}
                            </h3>
                            <p className="text-[#A1A1AA] leading-relaxed">{a.text}</p>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
