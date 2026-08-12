import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { Reveal, Overline } from "./Reveal";
import { whatsappLink } from "./config";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", whatsapp: "", message: "" };

const fieldClass =
    "w-full bg-transparent border-b border-[#27272A] focus:border-[#E35A3D] outline-none py-4 text-[#F2F2F2] placeholder:text-[#A1A1AA]/60 transition-colors duration-300";

export const Contact = () => {
    const [form, setForm] = useState(initial);
    const [loading, setLoading] = useState(false);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${API}/leads`, form);
            toast.success("Mensagem enviada. A Grazi responde em breve — prepare-se.");
            setForm(initial);
        } catch (err) {
            toast.error("Algo deu errado. Tente pelo WhatsApp, ele não trava.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contato" data-testid="contact-section" className="relative py-28 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-5">
                    <Reveal>
                        <Overline className="mb-6">Última chamada</Overline>
                        <h2 className="font-serif-display font-black text-4xl md:text-6xl tracking-tighter leading-[1.05] mb-8">
                            O espelho está <span className="italic text-[#E35A3D]">esperando.</span>
                        </h2>
                        <p className="text-[#A1A1AA] leading-relaxed mb-12 max-w-md">
                            Primeira conversa sem compromisso (e sem julgamento — esse fica para a segunda). Escolha seu canal de coragem:
                        </p>
                        <a
                            href={whatsappLink("Oi, Grazi. Quero agendar uma primeira conversa.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="contact-whatsapp-button"
                            className="inline-flex items-center gap-3 bg-[#E35A3D] text-[#0A0A0C] font-medium px-8 py-4 rounded-full hover:bg-[#F2F2F2] hover:-translate-y-1 transition-[background-color,transform] duration-300"
                        >
                            <MessageCircle size={18} /> Chamar no WhatsApp
                        </a>
                        <div className="mt-14 space-y-3 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#A1A1AA]">
                            <p>Atendimento online · Brasil inteiro</p>
                            <p>Presencial · consultório</p>
                            <p>50 min que valem por meses de espiral</p>
                        </div>
                    </Reveal>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                    <Reveal delay={0.15}>
                        <form
                            onSubmit={submit}
                            data-testid="contact-form"
                            className="border border-[#27272A]/60 bg-[#16161A]/60 backdrop-blur-xl p-8 md:p-12 space-y-8"
                        >
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">
                                Ou deixe seus dados — sem compromisso, só conversa
                            </p>
                            <div>
                                <label htmlFor="lead-name" className="sr-only">Nome</label>
                                <input id="lead-name" data-testid="contact-name-input" required minLength={2}
                                    value={form.name} onChange={set("name")} placeholder="Seu nome" className={fieldClass} />
                            </div>
                            <div>
                                <label htmlFor="lead-email" className="sr-only">E-mail</label>
                                <input id="lead-email" data-testid="contact-email-input" type="email" required
                                    value={form.email} onChange={set("email")} placeholder="Seu e-mail" className={fieldClass} />
                            </div>
                            <div>
                                <label htmlFor="lead-whatsapp" className="sr-only">WhatsApp</label>
                                <input id="lead-whatsapp" data-testid="contact-whatsapp-input"
                                    value={form.whatsapp} onChange={set("whatsapp")} placeholder="Seu WhatsApp (opcional, mas recomendado)" className={fieldClass} />
                            </div>
                            <div>
                                <label htmlFor="lead-message" className="sr-only">Mensagem</label>
                                <textarea id="lead-message" data-testid="contact-message-input" required rows={3}
                                    value={form.message} onChange={set("message")}
                                    placeholder="O que te trouxe até aqui? (vale a desculpa esfarrapada)" className={`${fieldClass} resize-none`} />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                data-testid="contact-submit-button"
                                className="w-full bg-[#E35A3D] text-[#0A0A0C] font-medium py-4 rounded-full hover:bg-[#F2F2F2] hover:-translate-y-1 transition-[background-color,transform] duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
                            >
                                {loading ? "Enviando..." : "Enviar (sim, é o primeiro passo)"}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
