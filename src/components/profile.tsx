// source : https://github.com/sadmann7/skateshop/blob/main/src/components/layouts/site-header.tsx

"use client";

import { UserProfile } from "@/components/auth/user-profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { getUserEmail } from "@/lib/utils";
import type { UserResource } from "@clerk/types";
import { Home, LogOut, Settings, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProfileProps {
  user: UserResource | null;
}

export default function Profile({ user }: ProfileProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;

  const email = getUserEmail(user);

  const [showUserProfile, setShowUserProfile] = React.useState(false);

  const handleUserProfileClose = () => {
    setShowUserProfile(false);
  };

  return (
    <>
      {showUserProfile ? (
        <UserProfile onCloseUserProfile={handleUserProfileClose} />
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="relative h-8 w-8 rounded-full ml-0.5"
          >
            <Avatar className="h-10 w-10 border">
              <AvatarImage
                src={
                  user?.imageUrl ??
                  `https://avatar.vercel.sh/${Math.random()}.png`
                }
                alt={`${user?.firstName} ${user?.lastName}` ?? ""}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <button
                type="submit"
                onClick={() => setShowUserProfile(true)}
                className=" w-full justify-between"
              >
                <User2 className="mr-2 h-4 w-4" aria-hidden="true" />
                Account
                <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Back Home
                <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild disabled>
              <Link href="#">
                <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/signout">
              <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
