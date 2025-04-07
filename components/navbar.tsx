"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-800">Fusion Technologies</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-green-800">
            About Us
          </Link>
          <Link href="#process" className="text-sm font-medium text-gray-600 hover:text-green-800">
            How It Works
          </Link>
          <Link href="#get-involved" className="text-sm font-medium text-gray-600 hover:text-green-800">
            Get Involved
          </Link>
          <Link href="#projects" className="text-sm font-medium text-gray-600 hover:text-green-800">
            Projects
          </Link>
          <Link href="#team" className="text-sm font-medium text-gray-600 hover:text-green-800">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-green-800">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Donate
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Volunteer</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-green-100 bg-white">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-green-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-gray-600 hover:text-green-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#get-involved"
              className="text-sm font-medium text-gray-600 hover:text-green-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-600 hover:text-green-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-gray-600 hover:text-green-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-green-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                Donate
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Volunteer</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export { Navbar }

