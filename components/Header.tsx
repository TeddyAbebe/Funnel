"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-transparent flex items-center w-full justify-between px-4 lg:p-8">
      {/* Logo Section */}
      <div className="flex justify-center lg:justify-end lg:w-[45%] ">
        <Image
          className="rounded-full object-cover"
          src="/logo.png"
          alt="Avatar"
          width={60}
          height={60}
          sizes="(max-width: 1024px) 60px, 80px"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex lg:w-[50%] justify-between w-[80%]">
        <Link
          href={"/step-1"}
          className="font-semibold hover:underline cursor-pointer underline-offset-4"
        >
          Step 1
        </Link>

        <Link
          href={"/step-2"}
          className="font-semibold hover:underline cursor-pointer underline-offset-4"
        >
          Step 2
        </Link>

        <Link
          href={"/step-3"}
          className="font-semibold hover:underline cursor-pointer underline-offset-4"
        >
          Step 3
        </Link>

        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Trainings
        </p>
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Funnels
        </p>
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Members
        </p>
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Leader board
        </p>
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Account
        </p>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <div className="absolute top-[13%] right-0 bg-[#132F47] text-white flex flex-col items-center space-y-4 py-4 md:hidden rounded-l-xl z-50 w-[40%]">
          <Link
            href={"/step-1"}
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Step 1
          </Link>

          <Link
            href={"/step-2"}
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Step 2
          </Link>

          <Link
            href={"/step-3"}
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Step 3
          </Link>

          <p
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Trainings
          </p>
          <p
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Funnels
          </p>
          <p
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Members
          </p>
          <p
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Leader board
          </p>
          <p
            className="font-semibold hover:underline cursor-pointer underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Account
          </p>
        </div>
      )}
    </div>
  );
};
