"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-lg bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-2 shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Bright Nursery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 shadow-lg">
              <Link href="/admissions">Apply Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="hidden md:block pb-4">
            <Input
              type="search"
              placeholder="Search..."
              className="max-w-md"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Input type="search" placeholder="Search..." />
            <Button asChild className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}