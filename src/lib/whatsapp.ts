export const WHATSAPP_NUMBER = "2348165701336";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const waLink = (message?: string): string => {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
};