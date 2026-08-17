export const WHATSAPP_NUMBER = "5511952867624";
export const whatsappLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
