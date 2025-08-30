"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/Button2"

type NavbarProps = {
  onLoginClick: () => void;
};

export default function Navbar({ onLoginClick }: NavbarProps) {
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
      {/* Button */}
      <div className="flex items-center gap-4">
        <Button onClick={onLoginClick}>
          Registrarme
        </Button>
      </div>
    </nav>
  )
}
