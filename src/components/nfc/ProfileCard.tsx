type ProfileCardProps = {
  name: string;
  avatarUrl: string;
  level: string;
  age: string;
  bloodType: string;
};

export function ProfileCard({
  name,
  avatarUrl,
  level,
  age,
  bloodType,
}: ProfileCardProps) {
  return (
    <section className="rounded-[12px] bg-white px-5 pt-3 pb-4 shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="h-[68px] w-[68px] rounded-full border-2 border-[#BFD09A] object-cover"
        />

        <h1 className="mt-3 text-[17px] font-semibold text-[#151515]">
          {name}
        </h1>

        <div className="mt-3 grid h-[60px] w-full grid-cols-3 rounded-[10px] bg-[#F4F5F8]">
          <ProfileInfo value={level} label="Nível" />
          <ProfileInfo value={age} label="Idade" withBorder />
          <ProfileInfo value={bloodType} label="Sangue" />
        </div>
      </div>
    </section>
  );
}

type ProfileInfoProps = {
  value: string;
  label: string;
  withBorder?: boolean;
};

function ProfileInfo({ value, label, withBorder }: ProfileInfoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        withBorder ? "border-x border-[#E8E9EE]" : ""
      }`}
    >
      <span className="text-[17px] leading-none text-[#151515]">{value}</span>
      <span className="mt-1 text-[13px] leading-none text-[#6F7280]">
        {label}
      </span>
    </div>
  );
}