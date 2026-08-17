import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { Reveal, Overline } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const plans = [
    {
        lookup: "sessao_avulsa",
        name: "Sessão Avulsa",
        price: "R$ 250",
        note: "por sessão de 50 min",
        features: ["Terapia individual (TCC e Provocativa)", "Online ou presencial", "Agendamento flexível"],
    },
    {
        lookup: "pacote_mensal",
        name: "Pacote Mensal",
        price: "R$ 900",
        note: "4 sessões · 10% de economia",
        highlight: true,
        features: ["4 sessões de 50 min no mês", "Plano terapêutico estruturado", "Suporte entre sessões", "Prioridade na agenda"],
    },
    {
        lookup: "plantao_psicologico",
        name: "Plantão Psicológico",
        price: "R$ 350",
        note: "atendimento em até 24h",
        features: ["Sessão avulsa de acolhimento", "Vagas em até 24h", "Online para todo o Brasil"],
    },
];

export const Investimento = () => {
    const [loading, setLoading] = useState("");

    const pay = async (lookup) => {
        setLoading(lookup);
        try {
            const { data } = await axios.post(`${API}/payments/checkout`, {
                lookup_key: lookup,
                origin_url: window.location.origin,
            });
            window.location.href = data.checkout_url;
        } catch (e) {
            toast.error("Não foi possível iniciar o pagamento. Tente novamente ou chame no WhatsApp.");
            setLoading("");
        }
    };

    return (
        <section id="valores" data-testid="pricing-section" className="relative py-28 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Reveal className="mb-20 md:mb-28 max-w-3xl">
                    <Overline className="mb-6">Investimento</Overline>
                    <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight">
                        Escolha como <span className="italic text-[#E35A3D]">começar</span>
                    </h2>
                    <p className="text-[#A1A1AA] leading-relaxed mt-8">
                        Pagamento seguro com cartão, direto pelo site. Após a confirmação, a Grazi entra em contato para agendar sua sessão.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {plans.map((p, i) => (
                        <Reveal key={p.lookup} delay={i * 0.12} className={i === 1 ? "md:mt-0" : "md:mt-12"}>
                            <article
                                data-testid={`pricing-card-${p.lookup}`}
                                className={`border p-10 h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 ${
                                    p.highlight
                                        ? "border-[#E35A3D]/60 bg-[#16161A]/80"
                                        : "border-[#27272A]/60 bg-[#16161A]/60"
                                } backdrop-blur-xl`}
                            >
                                {p.highlight && (
                                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#E35A3D] mb-6">
                                        Mais escolhido
                                    </p>
                                )}
                                <h3 className="font-serif-display font-bold text-2xl tracking-tight mb-2">{p.name}</h3>
                                <p className="font-serif-display font-black text-4xl text-[#E35A3D] mb-1">{p.price}</p>
                                <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] mb-8">{p.note}</p>
                                <ul className="space-y-3 mb-10 flex-1">
                                    {p.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3 text-[#A1A1AA] text-sm">
                                            <Check size={16} className="text-[#E35A3D] mt-0.5 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => pay(p.lookup)}
                                    disabled={loading === p.lookup}
                                    data-testid={`pay-button-${p.lookup}`}
                                    className={`w-full py-4 rounded-full font-medium transition-[background-color,transform,color] duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 ${
                                        p.highlight
                                            ? "bg-[#E35A3D] text-[#0A0A0C] hover:bg-[#F2F2F2]"
                                            : "border border-[#E35A3D] text-[#E35A3D] hover:bg-[#E35A3D] hover:text-[#0A0A0C]"
                                    }`}
                                >
                                    {loading === p.lookup ? "Redirecionando..." : "Pagar com cartão"}
                                </button>
                            </article>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.2}>
                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]/60 mt-12">
                        Valores de exemplo · pagamento processado com segurança pela Stripe
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
