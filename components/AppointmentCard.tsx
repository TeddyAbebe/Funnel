"use client";

import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Button from "./ui/Button";
import Confirmation from "./Confirmation";
const AppointmentCard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const timeOptions = ["12:00 AM", "12:30 AM", "01:00 AM"];
  const currentDate = new Date();

  const handleSelect = () => {
    if (selectedDate) {
      setShowConfirmation(true);
    } else {
      console.log("Please select a date.");
    }
  };

  if (showConfirmation) {
    return (
      <Confirmation
        selectedDate={selectedDate || new Date()}
        selectedTime={selectedTime || ""}
        onClose={() => setShowConfirmation(false)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#132F47] to-[#4C4F50]">
      <div className="text-center text-white mb-4">
        <h2 className="text-4xl font-semibold">Secure Your Appointment:</h2>
        <h1 className="text-4xl font-semibold mt-2 text-[#D7B398]">
          One on One Strategy Call with Nate.
        </h1>
      </div>

      {/* Appointment Card */}
      <div className="bg-[#32797B] p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            className="rounded-full object-cover"
            src="/logo.png"
            alt="Avatar"
            width={80}
            height={80}
          />
          <div>
            <h3 className="text-white text-lg font-bold">Business Plan Call</h3>
            <div className="text-sm text-gray-300">
              <span className="flex gap-2">
                ⏰<p>60 Mins</p>
              </span>

              <span className="flex gap-2">
                📅
                <p>
                  {selectedDate
                    ? format(selectedDate, "EEEE, MMM d, yyyy")
                    : format(currentDate, "EEEE, MMM d, yyyy")}
                </p>
              </span>

              <span className="flex gap-2">
                🌍 <p>Asia/Saigon (GMT+7)</p>
              </span>

              <span className="flex gap-2">
                💡 <p>Schedule a time that works best for you.</p>
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 my-4"></div>

        {/* Date & Time Selector */}
        <div>
          <label htmlFor="date" className="text-gray-200">
            Select Date & Time
          </label>

          <div className="flex flex-col md:flex-row mt-2 mb-4 gap-5">
            {/* Date Picker */}
            <div className="w-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                inline
                calendarClassName="tailwind-datepicker"
              />
            </div>

            {/* Time Picker */}
            {selectedDate && (
              <div className="w-full flex flex-col items-start">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    className={`bg-transparent border border-[#D7B398] text-gray-800 p-2 rounded w-full mt-1 ${
                      selectedTime === time ? "font-bold bg-[#D7B398]" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedDate && selectedTime && (
            <div className="flex items-center justify-center">
              <Button
                className="text-white w-1/2 py-3 rounded-lg"
                onClick={handleSelect} // Call handleSelect on button click
              >
                Select
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
