"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { createLead } from "../lib/api";

const LeadForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [affiliateId, setAffiliateId] = useState("ass22das1");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createLead(email, affiliateId);
      setSuccess(true);
    } catch (err) {
      setError("Failed to create lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Join Our Funnel</h2>
      {success ? (
        <p className="text-green-500">Thank you for joining!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full p-2 text-white bg-blue-600 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LeadForm;
