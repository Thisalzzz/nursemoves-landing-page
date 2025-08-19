import React from "react";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";

const features = [
  {
    id: "01",
    title: "Fast Performance",
    description:
      "Experience lightning-fast speeds and smooth navigation throughout the app.",
  },
  {
    id: "02",
    title: "User Friendly",
    description:
      "An intuitive interface designed for simplicity and easy usage by everyone.",
  },
  {
    id: "03",
    title: "Secure & Reliable",
    description:
      "Your data is protected with top-notch security measures and encryption.",
  },
];

const ApplicationFeatures = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Blue Background with Phones - Extended to left edge */}
        <div className="relative">
          <div className="bg-blue-800 flex justify-center items-center py-12 rounded-xl lg:rounded-l-none lg:pl-0 lg:pr-0">
            <div className="flex space-x-4 px-4 w-full justify-center">
              <img
                src={phone1}
                alt="App Screenshot 1"
                className="w-1/3 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px] rounded-xl"
              />
              <img
                src={phone2}
                alt="App Screenshot 2"
                className="w-1/3 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px] rounded-xl"
              />
              <img
                src={phone3}
                alt="App Screenshot 3"
                className="w-1/3 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px] rounded-xl"
              />
            </div>
          </div>
          <div className="hidden lg:block absolute top-0 bottom-0 -left-48 w-48 bg-blue-800"></div>
        </div>

        {/* Right: Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Application Features
          </h2>
          <div className="w-16 h-1 bg-blue-600 my-4"></div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start space-x-4">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {feature.id}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApplicationFeatures;