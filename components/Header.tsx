import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-transparent flex items-center w-full justify-center">
      <div className="w-1/2 flex justify-end">
        <Image
          className="rounded-full object-cover"
          src="/logo.png"
          alt="Avatar"
          width={80}
          height={80}
        />
      </div>

      <div className="flex w-1/2 justify-center gap-5">
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Step 1
        </p>
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Step 2
        </p>
        <p className="font-semibold hover:underline cursor-pointer underline-offset-4">
          Step 3
        </p>
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
    </div>
  );
};
