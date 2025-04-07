import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Second Serve</h3>
            <p className="text-blue-100">
              Reducing food waste, feeding communities, and promoting sustainability through responsible food
              management.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-green-100 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#get-involved" className="text-green-100 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-green-100 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-green-100 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-green-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Donate Food
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Request Food
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-green-100">
              Email: email@example.com
              <br />
              Phone: +XXX-XXX-XXXX
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>© {new Date().getFullYear()} Second Serve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

