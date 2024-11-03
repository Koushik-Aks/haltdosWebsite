// src/app/components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Haltdos Logo"
                width={158}
                height={45}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/" 
                className="text-gray-700 hover:underlinebold hover:scale-105 transition-transform duration-300 text-gray-600 px-3 py-2 rounded-md text-sm font-bold"
              >
                Home
              </Link>
              <Link
                href="/cloud"
                className="text-gray-700 hover:scale-105 transition-transform duration-300 text-gray-600 px-3 py-2 rounded-md text-sm font-bold"
              >
                Haltdos Cloud
              </Link>
              <Link
                href="/network-security"
                className="text-gray-700 hover:scale-105 transition-transform duration-300 text-gray-600 px-3 py-2 rounded-md text-sm font-bold"
              >
                Network Security
              </Link>
              <Link
                href="/application-security"
                className="text-gray-700 hover:scale-105 transition-transform duration-300 text-gray-600 px-3 py-2 rounded-md text-sm font-bold"
              >
                Application Security
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:scale-105 transition-transform duration-300text-gray-600 px-3 py-2 rounded-md text-sm font-bold"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Add the buttons here */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/download">Download Now</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/login">Cloud Login</Link>
              
            </Button>
            <ModeToggle/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/cloud"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Haltdos Cloud
            </Link>
            <Link
              href="/network-security"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Network Security
            </Link>
            <Link
              href="/application-security"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Application Security
            </Link>
            <Link
              href="/resources"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Resources
            </Link>
            {/* Add buttons to mobile menu */}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/download">Download Now</Link>
                  </Button>
                  <Button variant="default" asChild className="w-full">
                    <Link href="/login">Cloud Login</Link>
                    
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>HAltdos</SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
