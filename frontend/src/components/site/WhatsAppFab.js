import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./config";

export const WhatsAppFab = () => (
    <motion.a
        href={whatsappLink("Oi, Grazi. Vim pelo site e quero conversar sobre terapia.")}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-fab"
        aria-label="Conversar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#E35A3D] text-[#0A0A0C] flex items-center justify-center shadow-[0_8px_30px_rgba(227,90,61,0.4)]"
    >
        <MessageCircle size={24} />
    </motion.a>
);
