import { ImportantInfoCard } from "../components/nfc/ImportantInfoCard";
import { MessageCard } from "../components/nfc/MessageCard";
import { NfcWarningCard } from "../components/nfc/NfcWarningCard";
import { ProfileCard } from "../components/nfc/ProfileCard";
import { ProtectedByLumina } from "../components/nfc/ProtectedByLumina";
import { TrustedContactsCard } from "../components/nfc/TrustedContactsCard";

const TOP_BG_HEIGHT = "min(244px, 32svh)";
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export function NfcProfilePage() {
  return (
    <main className="relative flex h-svh w-full flex-col overflow-hidden bg-[#F7F7F7]">
      <img
        src={asset("images/lumina-top-bg.png")}
        alt=""
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-0 w-full object-cover object-top"
        style={{ height: TOP_BG_HEIGHT }}
      />

      <div
        className="nfc-scroll-area relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-y-none px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-6"
        style={{
          paddingTop: "calc(env(safe-area-inset-top) + 32px)",
        }}
      >
        <ProfileCard
          name="Emma"
          avatarUrl={asset("images/emma.jpg")}
          level="2"
          age="8 anos"
          bloodType="A+"
        />

        <MessageCard>
          Eu me comunico de uma forma diferente.
          <br />
          Por favor, aborde com calma.
        </MessageCard>

        <h2 className="mt-7 mb-3 text-[17px] font-semibold text-[#7A7A86]">
          Informações importantes
        </h2>

        <ImportantInfoCard />

        <h2 className="mt-7 mb-3 text-[17px] font-semibold text-[#7A7A86]">
          Contatos de confiança
        </h2>

        <TrustedContactsCard />

        <NfcWarningCard />

        <ProtectedByLumina />
      </div>
    </main>
  );
}
