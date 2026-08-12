import { Reveal, Overline } from "./Reveal";

const quotes = [
    {
        text: "Cheguei querendo validação. Saí querendo mudança. A Grazi me ajudou a enxergar padrões que eu repetia há anos — com leveza e profundidade.",
        author: "M.R., 34 — paciente há 1 ano",
    },
    {
        text: "É a hora da semana em que alguém me escuta de verdade e me devolve a clareza que eu não conseguia encontrar sozinha.",
        author: "F.A., 28 — paciente há 8 meses",
    },
    {
        text: "Eu achava que terapia era conversar sobre a infância para sempre. Com TCC e a abordagem provocativa, em poucos meses eu tinha um plano — e coragem de executá-lo.",
        author: "C.S., 41 — paciente há 2 anos",
    },
];

export const Testimonials = () => (
    <section id="depoimentos" data-testid="testimonials-section" className="relative py-28 md:py-40 bg-[#16161A]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="mb-20 max-w-3xl">
                <Overline className="mb-6">Quem já passou por aqui</Overline>
                <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight">
                    Depoimentos de quem <span className="italic text-[#E35A3D]">olhou no espelho</span>
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {quotes.map((q, i) => (
                    <Reveal key={i} delay={i * 0.12} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
                        <blockquote
                            data-testid={`testimonial-${i}`}
                            className="relative border-t border-[#27272A]/60 pt-10 hover:-translate-y-2 transition-transform duration-500"
                        >
                            <span className="font-serif-display text-7xl text-[#E35A3D] leading-none absolute -top-2 left-0" aria-hidden="true">
                                "
                            </span>
                            <p className="font-serif-display italic text-xl leading-relaxed text-[#F2F2F2] mt-8 mb-8">{q.text}</p>
                            <footer className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">
                                {q.author}
                            </footer>
                        </blockquote>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
