import type { ReactNode } from "react";

type MessageCardProps = {
  children: ReactNode;
};

export function MessageCard({ children }: MessageCardProps) {
  return (
    <section className="mt-5 rounded-[10px] bg-[#EFF8FF] px-4 py-3">
      <p className="text-[15px] font-medium leading-[1.55] text-[#282839]">
        {children}
      </p>
    </section>
  );
}