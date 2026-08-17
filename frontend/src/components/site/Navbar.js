import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { whatsappLink } from "./config";

const links = [
    { label: "Plantão", href: "#plantao" },
    { label: "Sobre", href: "#sobre" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Valores", href: "#valores" },
    { label: "Depoimentos", href: "#depoimentos" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
                scrolled
                    ? "bg-[#0A0A0C]/70 backdrop-blur-xl border-b border-[#27272A]/60"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
                <a href="#top" data-testid="nav-logo" className="font-serif-display text-xl font-bold tracking-tight">
                    Grazi <span className="text-[#E35A3D] italic">Gomes</span>
                </a>
                <div className="hidden lg:flex items-center gap-2 font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] border border-[#27272A]/60 rounded-full px-4 py-1.5" data-testid="nav-verification-badge">
                    <ShieldCheck size={13} className="text-[#E35A3D]" />
                    CRP 183637/06 · BPS 687171
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
                            className="font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#A1A1AA] hover:text-[#F2F2F2] transition-colors duration-300"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
                <a
                    href={whatsappLink("Oi, Grazi. Conheci seu site e gostaria de agendar uma consulta.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="nav-cta-button"
                    className="font-mono-accent text-[11px] uppercase tracking-[0.2em] bg-[#E35A3D] text-[#0A0A0C] font-medium px-5 py-2.5 rounded-full hover:bg-[#F2F2F2] transition-colors duration-300"
                >
                    Agendar
                </a>
            </nav>
        </motion.header>
    );
};
