import React, { useState } from "react";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!position) {
      alert("Please select your nursing section");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/nursemoves/google_sheets/wSONYnesksfXcOGt?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [name, email, position, new Date().toISOString()],
          ]),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Thanks for pre-subscribing! We'll be in touch soon.");
        setName("");
        setEmail("");
        setPosition("");
      } else {
        alert("Failed to submit. Please try again later.");
        console.error("API Error:", result);
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
      console.error("Submission Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-white min-h-screen pt-24 py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Logo - Top Left Corner */}
      <img
        src={logo}
        alt="NurseMoves Logo"
        className="absolute top-2 left-6 w-34 h-auto z-10"
      />

      {/* Left Text + Form */}
      <div className="flex-1 max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          <span className="text-blue-600">The first ALL-IN-ONE</span> Wellness App <br />
          <span className="text-blue-800">Designed Exclusively for Nurses.</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">designed by nurses</p>

        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 border border-gray-200">
          <p className="text-sm text-gray-700 mb-4">
            Be one of the first{" "}
            <span className="font-semibold">1000 pre-subscribers</span> to use
            the app for free!
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="" disabled>
                Select your section
              </option>
              <option value="paediatric">Paediatric</option>
              <option value="icu">ICU</option>
              <option value="emergency">Emergency</option>
              <option value="surgical">Surgical</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Processing..." : "Pre-Subscribe"}
            </button>
          </form>
        </div>
      </div>

{/* Right Images */}
<div className="flex-1 flex items-center justify-center relative min-h-[500px] lg:min-h-[600px] w-full">

  {/* Nurses - In Front, Bottom Right */}
<img
  src={hero}
  alt="Nurses"
  className="absolute z-10 bottom-0 right-0 
             w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40rem] 
             max-w-[90%] h-auto"
/>

</div>

    </section>
  );
};

export default HeroSection;
