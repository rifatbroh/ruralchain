import React, { useState, useEffect } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900 shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div
            className={`text-2xl font-bold transition ${
              scrolled ? "text-emerald-400" : "text-white"
            }`}
          >
            HealthChain
          </div>

          {/* Nav Links */}
          <ul
            className={`hidden md:flex gap-8 font-medium text-xl transition ${
              scrolled ? "text-gray-300" : "text-white"
            }`}
          >
            <li className="relative">
              <a href="#" className="hover:text-emerald-400 transition">Home</a>
            </li>
            <li className="relative">
              <a href="#" className="hover:text-emerald-400 transition">About</a>
            </li>
            <li className="relative">
              <a href="#" className="hover:text-emerald-400 transition">Services</a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => setSignInOpen(true)}
              className={`px-4 py-2 rounded-full font-bold transition border-2 ${
                scrolled
                  ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                  : "border-white text-white hover:bg-white hover:text-slate-900"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setSignUpOpen(true)}
              className={`px-4 py-2 rounded-full font-bold transition ${
                scrolled
                  ? "bg-emerald-400 text-slate-900 hover:bg-emerald-500"
                  : "bg-white text-slate-900 hover:bg-gray-200"
              }`}
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className={`${scrolled ? "text-white" : "text-white"} md:hidden`}>
            <button className="text-2xl">☰</button>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)} />
    </>
  );
};

export default Navbar;
