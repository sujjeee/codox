"use client";

import { Button } from "@/components/ui/button";
import { UserProfile as ClerkUserProfile } from "@clerk/nextjs";
import { Cross1Icon } from "@radix-ui/react-icons";

interface UserProfileProps {
  onCloseUserProfile: () => void; // Define the type of onCloseUserProfile
}

export function UserProfile({ onCloseUserProfile }: UserProfileProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <div className=" absolute z-50 -translate-x-2/4 -translate-y-2/4 m-0 left-2/4 top-2/4  ">
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-0 right-0 sm:-right-5 sm:-top-8  z-50 rounded-full"
          onClick={onCloseUserProfile}
        >
          <Cross1Icon />
        </Button>
        <ClerkUserProfile />
      </div>
    </>
  );
}
