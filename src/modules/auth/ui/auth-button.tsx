"use client";
import { Button } from "@/components/ui/button";
import { ClapperboardIcon, UserCircle } from "lucide-react";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Authbutton = () => {
  return (
    <>
      <SignedIn>
        <Button asChild variant="secondary">
          <Link href="/studio">
            <ClapperboardIcon />
            Uploads
          </Link>
        </Button>
        <UserButton>
          <UserButton.MenuItems>
            {/* add user profile */}
            <UserButton.Link
              label="studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4 " />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-300 border-blue-500/200 rounded-full shadow-none"
            variant="outline"
          >
            <UserCircle />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default Authbutton;
