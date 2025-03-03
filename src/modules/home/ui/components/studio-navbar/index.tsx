import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "../../auth/ui/auth-button";
import { StudioUplaodModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        {/* MEnu y logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="p-4 flex items-center gap-1">
              <Image
                src="/youtube-wordmark.svg"
                alt="Youtuve logo"
                width={110}
                height={110}
              ></Image>
              {/* <p className="text-xl font-semibold tracking-tight">Studio</p> */}
            </div>
          </Link>
        </div>
        {/* Search */}
        {/* <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div> */}
        <div className="flex-1" />
        <div className="flex-shrink-0 items-center flex gap-4">
          <StudioUplaodModal />
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
