import { Reveal, Overline } from "./Reveal";
import { whatsappLink } from "./config";

export const Plantao = () => (
    <section id="plantao" data-testid="plantao-section" className="border-y border-[#27272A]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <Overline className="shrink-0">Plantão Psicológico</Overline>
            <p className="text-[#A1A1AA] text-sm md:text-base flex-1">
                Atendimento pontual para situações que não podem esperar — sessões avulsas, online, com vagas em até 24h.
            </p>
            <a
                href={whatsappLink("Oi, Grazi. Preciso de um atendimento no plantão psicológico.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="plantao-cta-button"
                className="shrink-0 text-center font-mono-accent text-[11px] uppercase tracking-[0.2em] border border-[#E35A3D] text-[#E35A3D] px-6 py-3 rounded-full hover:bg-[#E35A3D] hover:text-[#0A0A0C] transition-[background-color,color] duration-300"
            >
                Solicitar plantão
            </a>
        </div>
    </section>
);

