import React from "react";
import { Header } from "./Header";
import Button from "./ui/Button";

export const Step1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#132F47] to-[#4C4F50] flex flex-col items-center justify-around">
      <Header />

      <header className="text-center">
        <h1 className="text-2xl font-bold text-white">Step 1</h1>
      </header>

      <div className="w-full max-w-xl mx-auto">
        <div className="shadow-[#CBAA91] shadow-lg rounded-lg">
          <video className="w-full rounded" controls>
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <p>
          Once you have watched the video above, click the button below to
          continue to step 2.
        </p>

        <Button className="w-1/3">Next &gt;</Button>
      </div>
    </div>
  );
};
