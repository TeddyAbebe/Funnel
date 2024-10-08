import React from "react";
import Flag from "react-world-flags";
import { Header } from "./Header";

const Step3 = () => {
  return (
    <div className="flex flex-col md:gap-[100px] justify-around min-h-screen bg-gradient-to-r from-[#132F47] to-[#4C4F50] text-white">
      <Header />

      <div className="text-center flex flex-col md:gap-20">
        <div className="w-full md:w-1/2 mx-auto px-1">
          <h1 className="text-4xl font-bold mb-4">
            Thanks for booking your 1-on-1 Business Plan Call with us!
          </h1>

          <p className="text-lg mb-8">
            To fully benefit from your call and ensure you understand our
            business model, please watch the following videos Before we talk.
            Unfortunately if you are unable to watch the videos beforehand, we
            will not be able to proceed with your call.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold mb-8">Please select your country:</p>

          <div className="flex justify-center space-x-6">
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
              <Flag code="USA" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
              <Flag code="EU" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
              <Flag code="GB" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
              <Flag code="CAN" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
              <Flag code="AUS" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
              <Flag code="MEX" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
