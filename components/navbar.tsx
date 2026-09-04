"use client";

import { navLinks } from "@/data/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookingButton from "./booking-button";
import Logo from "./logo";
import { Button } from "./ui/button";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`px-auto fixed top-0 z-20 w-full transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent"} `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-medium md:px-0">
          <Logo />

          {/* Desktop navigation Links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-foreground hover:text-primary text-lg transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Booking Button */}
          <BookingButton className="hidden md:block" />

          <Button
            className={"md:hidden"}
            variant={"ghost"}
            size={"icon"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu className="text-foreground hover:text-primary size-6 transition-all duration-300" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`bg-background/70 fixed inset-0 z-40 flex transform flex-col items-center justify-center p-8 backdrop-blur-md transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center space-y-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary text-lg transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button
            size="icon"
            className="rounded-md p-4"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <X className="size-6" />
          </Button>
        </div>
      </div>
    </>
  );
}
