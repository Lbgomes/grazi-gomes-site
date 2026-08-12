import { Reveal, Overline } from "./Reveal";

const CHAIR =
    "https://images.unsplash.com/photo-1769255119622-1bd8e49ff35c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwY2hhaXIlMjBkYXJrfGVufDB8fHx8MTc4NjU0ODgzOHww&ixlib=rb-4.1.0&q=85";

const chapters = [
    {
        n: "01",
        title: "TCC: base científica do processo",
        text: "A Terapia Cognitivo-Comportamental é uma das abordagens com maior evidência científica no mundo. Ela identifica padrões de pensamento que geram sofrimento e os trabalha de forma estruturada, com objetivos claros e mensuráveis.",
    },
    {
        n: "02",
        title: "Psicologia Provocativa: leveza com propósito",
        text: "Desenvolvida na Europa, a Psicologia Provocativa utiliza o humor e o paradoxo como ferramentas técnicas para ampliar a consciência e mobilizar recursos internos — sempre com ética, respeito e acolhimento.",
    },
    {
        n: "03",
        title: "Juntas: acolhimento com direção",
        text: "A TCC organiza os pensamentos; a provocação traz leveza e movimento. O resultado é um processo terapêutico direto, humano e profundamente transformador.",
    },
    {
        n: "04",
        title: "Um espaço só seu",
        text: "Sessões online ou presenciais, 50 minutos, sigilo absoluto. O único requisito é aparecer como você é — o resto a gente constrói junto.",
    },
];

export const Manifesto = () => (
    <section id="manifesto" data-testid="manifesto-section" className="relative py-28 md:py-40 bg-[#16161A]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="mb-20 md:mb-28 max-w-3xl">
                <Overline className="mb-6">O método em 4 capítulos</Overline>
                <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight">
                    Abordagens com <span className="italic text-[#E35A3D]">base científica</span> e profundidade clínica
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                <div className="md:col-span-7 space-y-0">
                    {chapters.map((c, i) => (
                        <Reveal key={c.n} delay={i * 0.08}>
                            <article
                                data-testid={`manifesto-chapter-${c.n}`}
                                className="group relative border-t border-[#27272A]/60 py-10 md:py-12 md:grid md:grid-cols-12 md:gap-8 hover:-translate-y-1 transition-transform duration-500"
                            >
                                <span className="font-mono-accent text-sm text-[#E35A3D] tracking-[0.2em] md:col-span-2">
                                    {c.n}
                                </span>
                                <div className="md:col-span-10">
                                    <h3 className="font-serif-display font-bold text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-[#E35A3D] transition-colors duration-300">
                                        {c.title}
                                    </h3>
                                    <p className="text-[#A1A1AA] leading-relaxed max-w-xl">{c.text}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                    <div className="border-t border-[#27272A]/60" />
                </div>

                <div className="md:col-span-4 md:col-start-9">
                    <Reveal delay={0.2} className="md:sticky md:top-32">
                        <div className="overflow-hidden border border-[#27272A]/60">
                            <img
                                src={CHAIR}
                                alt="Poltrona laranja em fundo escuro — o divã moderno"
                                data-testid="manifesto-chair-image"
                                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] mt-4">
                            Fig. 01 — Um espaço reservado para você
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
);
