import { Radio } from "lucide-react";

export function NfcWarningCard() {
  return (
    <section className="mt-7 flex items-start gap-4 rounded-[20px] bg-[#EFF8FF] px-5 py-5">
      <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-white text-[#1CA0FF]">
        <Radio size={15} />
      </div>

      <p className="text-[14px] font-medium leading-[1.35] text-[#282839]">
        Este perfil é acessado via NFC.
        <br />
        Se precisar de ajuda, entre em contato
        <br />
        com um responsável.
      </p>
    </section>
  );
}