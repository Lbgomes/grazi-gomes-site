import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

export default function PaymentCancel() {
    return (
        <div className="min-h-screen bg-[#0A0A0C] text-[#F2F2F2] flex items-center justify-center px-6">
            <div className="max-w-lg text-center border border-[#27272A]/60 bg-[#16161A]/60 backdrop-blur-xl p-12" data-testid="payment-cancel-page">
                <XCircle size={40} className="text-[#A1A1AA] mx-auto mb-6" />
                <h1 className="font-serif-display font-bold text-3xl mb-4">Pagamento cancelado</h1>
                <p className="text-[#A1A1AA] leading-relaxed mb-10">
                    Nenhuma cobrança foi feita. Você pode tentar novamente quando quiser ou agendar pelo WhatsApp.
                </p>
                <Link to="/" data-testid="back-home-link"
                    className="inline-block bg-[#E35A3D] text-[#0A0A0C] font-medium px-8 py-4 rounded-full hover:bg-[#F2F2F2] transition-colors duration-300">
                    Voltar ao site
                </Link>
            </div>
        </div>
    );
}
