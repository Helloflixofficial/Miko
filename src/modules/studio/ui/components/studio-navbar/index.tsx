import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import Authbutton from "@/modules/auth/ui/auth-button";
import { StudioUploadModel } from "../studio-upload-model";
const StudioNavbar = () => {
  return (
    <>
      <nav className="flex items-center fixed top-0 left-0 right-0 h-16 px-2 pr-5 bg-[#EBE5C2] z-50 border-b shadow-md">
        <div className="flex item-center gap-4 w-full">
          <div className="flex items-center flex-shrink-0">
            <SidebarTrigger />
            <Link href="/">
              <div className="p-4 flex items-center gap-2">
                <Image src="/logo.svg" width={30} height={30} alt="Logo" />
                <p className="text-xl font-semibold tracking-tight">Studio</p>
              </div>
            </Link>
          </div>
          {/* Spacerr */}
          <div className="flex-1"></div>
          <div className="flex-shrink-0 items-center flex gap-4">
            <Button asChild variant="secondary">
              <Link href="/">
                <LogInIcon className="size-5" />
                Exit Studio
              </Link>
            </Button>
            <div>
              <StudioUploadModel />
            </div>
            <div>
              <Authbutton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default StudioNavbar;
