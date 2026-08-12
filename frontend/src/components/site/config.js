export const WHATSAPP_NUMBER = "5511999999999";
export const whatsappLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
