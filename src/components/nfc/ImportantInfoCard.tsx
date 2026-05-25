import { Ear, MessageSquare, Pill } from "lucide-react";

export function ImportantInfoCard() {
  return (
    <section className="rounded-[20px] bg-white px-4 py-2 shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
      <InfoItem
        icon={<Ear size={17} />}
        iconClassName="bg-[#FFF2DC] text-[#F7A126]"
        title="Sensibilidades"
        description={
          <>
            Sensível a sons altos, luzes fortes e texturas
            <br />
            ásperas.
          </>
        }
      />

      <Divider />

      <InfoItem
        icon={<Pill size={17} />}
        iconClassName="bg-[#FFE8EF] text-[#FF3F68]"
        title="Saúde"
        description={
          <>
            Risperidona 0,5 mg (manhã)
            <br />
            Alergia: Amoxicilina
          </>
        }
      />

      <Divider />

      <InfoItem
        icon={<MessageSquare size={17} />}
        iconClassName="bg-[#F0E6FF] text-[#8D35FF]"
        title="Comunicação"
        description={
          <>
            Prefere comunicação alternativa (AAC) e evitar
            <br />
            contato visual forçado.
          </>
        }
      />
    </section>
  );
}

type InfoItemProps = {
  icon: React.ReactNode;
  iconClassName: string;
  title: string;
  description: React.ReactNode;
};

function InfoItem({ icon, iconClassName, title, description }: InfoItemProps) {
  return (
    <div className="flex gap-4 py-4">
      <div
        className={`mt-1 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] ${iconClassName}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="text-[13px] font-medium text-[#6E707B]">{title}</h3>

        <p className="mt-3 text-[14px] font-medium leading-[1.45] text-[#29293B]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#ECEEF2]" />;
}