import { whatsappLink } from "./config";

export const Footer = () => (
    <footer data-testid="footer" className="border-t border-[#27272A]/60 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
                <p className="font-serif-display font-bold text-lg">
                    Grazi <span className="text-[#E35A3D] italic">Gomes</span>
                </p>
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] mt-2">
                    Psicóloga Clínica · CRP 183637/06 · BPS 687171
                </p>
            </div>
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]/60">
                © {new Date().getFullYear()} · Feito para quem tem coragem
            </p>
            <a
                href={whatsappLink("Oi, Grazi!")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                className="font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#A1A1AA] hover:text-[#E35A3D] transition-colors duration-300"
            >
                WhatsApp →
            </a>
        </div>
    </footer>
);
