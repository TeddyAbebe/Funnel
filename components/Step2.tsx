import React from "react";
import { Header } from "./Header";
import Button from "./ui/Button";
import Link from "next/link";

export const Step2 = () => {
  return (
    <div className="min-h-screen px-10 md:px-0 bg-gradient-to-r from-[#132F47] to-[#4C4F50] flex flex-col items-center justify-around">
      <Header />
      <header className="text-center">
        <h1 className="text-2xl font-bold text-white">Step 2</h1>
      </header>

      <div className="w-full max-w-3xl mx-auto my-5">
        <div className="shadow-[#CBAA91] shadow-lg rounded-lg">
          <iframe
            className="w-full rounded"
            src="https://www.youtube.com/embed/AByGxK2l2Ys"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 lg:w-1/2">
        <p className="text-base">
          Once you have watched the video above, click the button below to
          continue to step 2.
        </p>

        <div className="w-full flex justify-between">
          <Button className="w-1/5 flex justify-center">
            <Link href={"/step-1"} className="flex gap-2">
              &lt;
              <p className="hidden md:flex">Back</p>
            </Link>
          </Button>

          <Button className="text-xs md:text-lg px-2 md:w-1/3">
            <Link href={"/Booking"}>Book your call &gt;</Link>
          </Button>

          <Button className="w-1/5 flex justify-center">
            <Link href={"/step-3"} className="flex gap-2">
              <p className="hidden md:flex">Next</p>
              &gt;
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
