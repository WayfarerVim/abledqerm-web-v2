"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          ableDERM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="hover:text-teal-600 transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-teal-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-teal-600 transition">
            Contact
          </Link>

          <Link
            href="/book"
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Book
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
       
