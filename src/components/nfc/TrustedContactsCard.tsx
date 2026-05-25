import { ChevronRight } from "lucide-react";

export function TrustedContactsCard() {
  return (
    <section className="rounded-[20px] bg-white px-4 shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
      <ContactRow
        initials="AO"
        name="Ana Oliveira"
        relation="Mãe"
        phone="(11) 98214-7733"
        color="bg-[#D8C0FF]"
      />

      <div className="ml-[48px] h-px bg-[#ECEEF2]" />

      <ContactRow
        initials="CO"
        name="Carlos Oliveira"
        relation="Pai"
        phone="(11) 99102-4418"
        color="bg-[#D7DEB0]"
      />
    </section>
  );
}

type ContactRowProps = {
  initials: string;
  name: string;
  relation: string;
  phone: string;
  color: string;
};

function ContactRow({ initials, name, relation, phone, color }: ContactRowProps) {
  return (
    <button className="flex w-full items-center gap-3 py-4 text-left">
      <div
        className={`flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full ${color}`}
      >
        <span className="text-[13px] font-medium text-[#555064]">
          {initials}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[17px] font-medium leading-none text-[#282839]">
          {name}
        </h3>
        <p className="mt-2 text-[13px] leading-none text-[#6F7280]">
          {relation}
        </p>
      </div>

      <span className="text-[14px] font-medium text-[#70A8F6]">{phone}</span>

      <ChevronRight size={18} className="text-[#C9D0DC]" />
    </button>
  );
}