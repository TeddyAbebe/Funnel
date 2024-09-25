import React from "react";
import { Header } from "./Header";
import Button from "./ui/Button";
import Link from "next/link";

export const Step2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#132F47] to-[#4C4F50] flex flex-col items-center justify-around">
      <Header />
      <header className="text-center">
        <h1 className="text-2xl font-bold text-white">Step 2</h1>
      </header>
      <div className="w-full max-w-xl mx-auto">
        <div className="shadow-[#CBAA91] shadow-lg rounded-lg">
          <video className="w-full rounded" controls>
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-1/2">
        <p className="text-base">
          Once you have watched the video above, click the button below to
          continue to step 2.
        </p>

        <div className="w-full flex justify-between">
          <Link href={"/step-1"} className="w-1/5">
            <Button className="w-full">&lt; Back</Button>
          </Link>

          <Link href={"/Booking"} className="w-1/3">
            <Button className="w-full">Book your call &gt;</Button>
          </Link>
          <Link href={"/step-3"} className="w-1/5">
            <Button className="w-full">Next &gt;</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
