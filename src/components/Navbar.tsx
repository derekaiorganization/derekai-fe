"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/Button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/Avatar"
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/Tooltip";
import { useGlobalAlertDialog } from "@/context/AlertDialogContext";
import { useSupabaseUser } from "@/hooks/useSupabaseUser"

type NavbarProps = {
  onLoginClick: () => void;
};

export default function Navbar({ onLoginClick }: NavbarProps) {
  const { setOpen } = useGlobalAlertDialog();
  const { user } = useSupabaseUser();

  // Get initials from full_name or email
  const initials =
    user?.user_metadata?.full_name
      ? user.user_metadata.full_name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
      : user?.email?.[0]?.toUpperCase();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/navbarlogo.svg"
          alt="derek.ai logo"
          width={120}
          height={40}
          className="mr-2"
        />
      </Link>
      {/* Right side: Button or Avatar with Tooltip */}
      <div className="flex items-center gap-4">
        {!user ? (
          <Button onClick={onLoginClick} className="h-10">
            Comenzar
          </Button>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer" onClick={() => setOpen(true)}>
                <AvatarImage src={user.user_metadata?.avatar_url || ""} alt={user.email} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              Ya estas registrado
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </nav>
  )
}
