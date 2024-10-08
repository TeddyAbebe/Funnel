import React from "react";
import { Header } from "./Header";
import Button from "./ui/Button";
import Link from "next/link";

export const Step1 = () => {
  return (
    <div className="min-h-screen px-10 md:px-0 bg-gradient-to-r from-[#132F47] to-[#4C4F50] flex flex-col items-center justify-around">
      <Header />

      <header className="text-center">
        <h1 className="text-2xl font-bold text-white">Step 1</h1>
      </header>

      <div className="w-full max-w-3xl mx-auto my-5">
        <div className="shadow-[#CBAA91] shadow-lg rounded-lg">
          <iframe
            className="w-full rounded"
            src="https://www.youtube.com/embed/OldUVwEYVmw"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <p>
          Once you have watched the video above, click the button below to
          continue to step 2.
        </p>

        <Link href={"/step-2"} className="w-1/3">
          <Button className="w-full">Next &gt;</Button>
        </Link>
      </div>
    </div>
  );
};
