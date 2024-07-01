'use client'
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

function WavyBackgroundDemo() {
  const { isSignedIn } = useAuth();
  return (
    <>
      <header className='bg-gradient-to-r from-black via-gray-950 to-gray-950 p-4 fixed top-0 left-0 right-0 z-50'>
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-4">
              {/* Add your logo image here if needed */}
              <img src="/logo.svg" alt="logo" className="w-full h-full" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Genesis
            </h1>
          </Link>
          <div className="flex items-center gap-x-4">
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button variant="outline" className="rounded-full text-blue-950 border-white">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <div className='pt-20 bg-gradient-to-r from-black via-gray-950 to-black min-h-screen flex flex-col items-center justify-center text-center px-4'>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            AI Content Creator
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Leverage the power of Gemini AI to create your Content
          </p>
        </WavyBackground>
      </div>
    </>
  );
}

export default WavyBackgroundDemo;
