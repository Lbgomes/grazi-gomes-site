import Marquee from "react-fast-marquee";

const items = [
    "Plantão psicológico",
    "Presença quando você mais precisa",
    "TCC & Psicologia Provocativa",
    "Terapia é um ato de coragem",
    "Cuidar da mente é prioridade",
];

export const MarqueeStrip = () => (
    <div className="border-y border-[#27272A]/60 py-6 overflow-hidden" aria-hidden="true" data-testid="marquee-strip">
        <Marquee speed={30} gradient={false} pauseOnHover style={{ overflowY: "hidden" }}>
            {items.map((item, i) => (
                <span key={i} className="font-serif-display italic text-2xl md:text-3xl text-[#A1A1AA]/50 mx-8 whitespace-nowrap">
                    {item} <span className="text-[#E35A3D]/60 not-italic mx-4">•</span>
                </span>
            ))}
        </Marquee>
    </div>
);
