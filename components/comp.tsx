import Image from "next/image";
import React from "react";

export const comp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#132F47] to-[#4C4F50] flex flex-col items-center justify-center py-20">
      <div>
        <Image
          className="rounded-full object-cover"
          src="/logo.png"
          alt="Avatar"
          width={80}
          height={80}
        />
      </div>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mt-4">
          Create your FREE account NOW!!
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Create Your Account Below and
          <span className="text-[#D7B398] mx-1">Get Free Access</span>
          to my Sales System that allows you to attract, capture and generate
          leads on autopilot.
        </p>
      </header>

      <div className="w-full max-w-xl mx-auto">
        <div className="shadow-[#CBAA91] shadow-lg rounded-lg">
          <video className="w-full rounded" controls>
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="mt-8 w-full max-w-xl flex flex-col mx-auto">
        <h1 className="mx-auto text-[#B3B2B4]">
          (No previous experience or technical skills required)
        </h1>

        <form className="p-8 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border-b rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
            <input
              type="text"
              placeholder="First Name"
              className="border-b rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Last Name"
              className="border-b rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Password"
              className="border-b rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-b rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-gradient-to-tr from-[#2C5A6F] to-[#051016] text-white py-2 rounded-3xl font-semibold transition"
            >
              Register Now
            </button>
          </div>
        </form>

        <div className="flex items-end justify-center gap-4">
          <Image
            className=""
            src="/peoples.png"
            alt="Avatar"
            width={80}
            height={80}
          />

          <h1 className="text-center mt-4 text-gray-300">
            Join our 20,000+ students worldwide
          </h1>
        </div>
      </div>
    </div>
  );
};
