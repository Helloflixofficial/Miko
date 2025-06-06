import { SidebarHeader } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";

export const StudioSidebarHeader = () => {
  const { user } = useUser();
  if (!user) return null;
  return (
    <SidebarHeader className="flex items-center justify-center pb-4">
      <Link href="/user/current"></Link>
      <UserAvatar
        imageUrl={user.imageUrl}
        name={user.fullName ?? "User"}
        className="size-[112px] hover:opacity-80 transition-opacity "
      />
    </SidebarHeader>
  );
};
