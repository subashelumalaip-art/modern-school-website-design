import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bright Nursery and Primary School</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nurturing creativity, curiosity, and excellence in young learners through vibrant, engaging education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Learning Lane, Bright City, BC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@brightnursery.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-2 text-white hover:from-orange-600 hover:to-amber-600 transition-colors shadow-md"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-green-500 to-emerald-500 p-2 text-white hover:from-green-600 hover:to-emerald-600 transition-colors shadow-md"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-pink-500 to-rose-500 p-2 text-white hover:from-pink-600 hover:to-rose-600 transition-colors shadow-md"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-2 text-white hover:from-blue-600 hover:to-cyan-600 transition-colors shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bright Nursery and Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}