import { ShieldCheck } from "lucide-react";

export function ProtectedByLumina() {
  return (
    <footer className="mt-7 flex items-center justify-center gap-1 text-[#B7C9E8]">
      <ShieldCheck size={14} />
      <span className="text-[12px] font-semibold">Protegido por Lumina</span>
    </footer>
  );
}