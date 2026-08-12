import { Clock, ShieldCheck, Video } from "lucide-react";
import { Reveal, Overline } from "./Reveal";
import { whatsappLink } from "./config";

const features = [
    { icon: Clock, text: "Agendamento ágil, com vagas em até 24h" },
    { icon: ShieldCheck, text: "Sessão avulsa, sem compromisso de continuidade" },
    { icon: Video, text: "Online para todo o Brasil, com sigilo absoluto" },
];

export const Plantao = () => (
    <section id="plantao" data-testid="plantao-section" className="relative py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
                <div className="border border-[#E35A3D]/40 bg-[#16161A]/60 backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 overflow-hidden">
                    <div className="md:col-span-7 p-10 md:p-16">
                        <Overline className="mb-6">Atendimento prioritário</Overline>
                        <h2 className="font-serif-display font-black text-4xl md:text-6xl tracking-tighter leading-[1.05] mb-8">
                            Plantão <span className="italic text-[#E35A3D]">Psicológico</span>
                        </h2>
                        <p className="text-[#A1A1AA] leading-relaxed max-w-lg text-base md:text-lg">
                            Para os momentos em que esperar a próxima sessão não é uma opção. Um atendimento pontual de
                            acolhimento e orientação, com a mesma técnica e seriedade de sempre — disponível quando você
                            mais precisa.
                        </p>
                    </div>
                    <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#27272A]/60 p-10 md:p-16 flex flex-col justify-center gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-4" data-testid={`plantao-feature-${i}`}>
                                <f.icon size={20} className="text-[#E35A3D] mt-0.5 shrink-0" />
                                <p className="text-[#F2F2F2] text-sm md:text-base">{f.text}</p>
                            </div>
                        ))}
                        <a
                            href={whatsappLink("Oi, Grazi. Preciso de um atendimento no plantão psicológico.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="plantao-cta-button"
                            className="mt-4 inline-flex items-center justify-center bg-[#E35A3D] text-[#0A0A0C] font-medium px-8 py-4 rounded-full hover:bg-[#F2F2F2] hover:-translate-y-1 transition-[background-color,transform] duration-300"
                        >
                            Chamar no plantão
                        </a>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);
