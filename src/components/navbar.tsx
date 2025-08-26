"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Navbar() {
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
      <Button>
        Registrarme
      </Button>
    </nav>
  )
}
