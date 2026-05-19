import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi Safe Bridge, I have a quick question.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]" />
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </a>
  );
}