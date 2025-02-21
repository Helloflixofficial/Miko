import { Button } from "@/components/ui/button"
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div>
        <Image src="/logo.svg" height={40} width={40} alt="Logo" />
        <p className="text-xl font-semibold tracking-tight">Firetube</p>
      </div>
    </>
  );
}
