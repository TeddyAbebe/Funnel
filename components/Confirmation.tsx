import React, { useState } from "react";
import { format, addMinutes } from "date-fns";
import Button from "./ui/Button"; // Assuming you have a Button component
import { FaLongArrowAltLeft } from "react-icons/fa";

interface ConfirmationProps {
  selectedDate: Date;
  selectedTime: string;
  onClose: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  selectedDate,
  selectedTime,
  onClose,
}) => {
  const startTime = new Date(selectedDate);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [startHour, startMinute] = selectedTime.split(":");
  startTime.setHours(
    startHour === "12" && selectedTime.includes("AM") ? 0 : +startHour,
    startMinute === "00" ? 0 : +startMinute.slice(0, 2)
  );

  const endTime = addMinutes(startTime, 60); // Add 60 minutes

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#132F47] to-[#4C4F50]">
      <div className="bg-[#32797B] p-8 rounded-lg shadow-lg max-w-xl w-full">
        <span
          className="border border-[#D7B398] bg-[#357072]  shadow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer mb-5"
          onClick={onClose}
        >
          <FaLongArrowAltLeft size={20} color="D7B398" />
        </span>

        <h3 className="text-lg font-bold mb-4">Business Plan Call</h3>

        <div className="border border-[#5f9294] text-[#c1dedf] p-4 rounded-md">
          <span className="flex gap-2">
            ⏰<p>60 Mins</p>
          </span>

          <span className="flex gap-2">
            📅
            <p>
              {`${format(startTime, "hh:mm a")} - ${format(
                endTime,
                "hh:mm a"
              )}, ${format(selectedDate, "EEE, MMM d, yyyy")}`}
            </p>
          </span>

          <span className="flex gap-2">
            🌍 <p>Asia/Saigon (GMT+7)</p>
          </span>

          <span className="flex gap-2">
            💡 <p>Schedule a time that works best for you.</p>
          </span>
        </div>

        <form className="mt-4">
          <div className="flex flex-wrap justify-between">
            <div className="mb-4">
              <label className="block mb-1">First Name *</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 rounded p-2 text-black focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 rounded p-2 text-black focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded p-2 text-black focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded p-2 text-black focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="flex items-start justify-start text-black">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mr-2 mt-1"
                  required
                />
                I agree to the terms and conditions provided by the company. By
                providing my phone number, I agree to receive text messages from
                the business
              </label>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Button className="py-2 px-4 rounded-md">Schedule Meeting</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Confirmation;
