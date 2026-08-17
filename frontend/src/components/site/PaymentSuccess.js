import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle2, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function PaymentSuccess() {
    const [params] = useSearchParams();
    const sessionId = params.get("session_id");
    const [status, setStatus] = useState("checking");

    useEffect(() => {
        if (!sessionId) { setStatus("error"); return; }
        let attempts = 0;
        const poll = async () => {
            try {
                const { data } = await axios.get(`${API}/payments/status/${sessionId}`);
                if (data.payment_status === "paid") { setStatus("paid"); return; }
            } catch (e) { /* retry */ }
            attempts += 1;
            if (attempts < 10) setTimeout(poll, 2000);
            else setStatus("pending");
        };
        poll();
    }, [sessionId]);

    return (
        <div className="min-h-screen bg-[#0A0A0C] text-[#F2F2F2] flex items-center justify-center px-6">
            <div className="max-w-lg text-center border border-[#27272A]/60 bg-[#16161A]/60 backdrop-blur-xl p-12" data-testid="payment-success-page">
                {status === "checking" ? (
                    <>
                        <Loader2 size={40} className="text-[#E35A3D] mx-auto mb-6 animate-spin" />
                        <h1 className="font-serif-display font-bold text-3xl mb-4">Confirmando pagamento...</h1>
                        <p className="text-[#A1A1AA]">Aguarde um instante.</p>
                    </>
                ) : (
                    <>
                        <CheckCircle2 size={40} className="text-[#E35A3D] mx-auto mb-6" />
                        <h1 className="font-serif-display font-bold text-3xl mb-4">
                            {status === "paid" ? "Pagamento confirmado" : "Pagamento em processamento"}
                        </h1>
                        <p className="text-[#A1A1AA] leading-relaxed mb-10">
                            {status === "paid"
                                ? "Obrigada! A Grazi entrará em contato em breve para agendar sua sessão."
                                : "Assim que o pagamento for confirmado, a Grazi entrará em contato para agendar sua sessão."}
                        </p>
                        <Link to="/" data-testid="back-home-link"
                            className="inline-block bg-[#E35A3D] text-[#0A0A0C] font-medium px-8 py-4 rounded-full hover:bg-[#F2F2F2] transition-colors duration-300">
                            Voltar ao site
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
