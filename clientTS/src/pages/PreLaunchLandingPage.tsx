import React, { useState } from "react";
import { PawPrint, BellRing, CheckCircle, ArrowRight } from "lucide-react";

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const upcomingFeatures = [
    {
      title: "Tailored Care Plans",
      description:
        "AI-crafted schedules based on your pet’s unique habits and needs.",
      status: "In Development",
      progress: 85,
    },
    {
      title: "Live Updates & Alerts",
      description:
        "Stay connected with live video, instant updates, and reminders.",
      status: "Testing",
      progress: 90,
    },
    {
      title: "Health & Happiness Tracker",
      description:
        "Monitor your pet’s health and happiness in one seamless dashboard.",
      status: "Final Stage",
      progress: 95,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-100 p-2 rounded-xl">
                <PawPrint size={32} className="text-orange-500" />
              </div>
              <div>
                <span
                  id="logo"
                  className="text-sm md:text-xl font-semibold text-gray-800 capitalize"
                >
                  Whiskr
                </span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 md:py-1 rounded-full ml-2">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={handleSubscribe}
                className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-orange-500"
              >
                <BellRing size={20} />
                <span>Get Notified</span>
              </button>
              <button
                onClick={() => {
                  const inputElement = document.querySelector(
                    "#email"
                  ) as HTMLInputElement;
                  if (inputElement) {
                    inputElement.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
                className="bg-black/80 text-xs text-white p-4 md:px-6 rounded-xl hover:bg-black"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-green-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium">
              Launching Soon
            </span>
            <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Whiskr: Redefining Pet Care
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              A warm, community-driven platform for pet owners, blending smart
              technology with heartwarming care.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="w-full px-6 py-4 rounded-xl bg-white shadow-xl border border-orange-100 focus:border-orange-500 outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
            {isSubscribed && (
              <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl flex items-center space-x-2 animate-fade-in">
                <CheckCircle size={20} />
                <span>You're on the waitlist!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Exciting Features of Whiskr
            </h2>
            <div className="space-y-8">
              {upcomingFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex flex-col justify-between items-start mb-4 gap-2">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-500 animate-"
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-orange-500 font-medium">
              Join the Revolution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Make Your Pet’s Happiness a Priority
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Reserve your spot for early access to Whiskr. Together, we’ll
              create the ultimate pet care experience.
            </p>
            <button
              onClick={() => {
                const inputElement = document.querySelector(
                  "#email"
                ) as HTMLInputElement;
                if (inputElement) {
                  inputElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:opacity-90 flex items-center mx-auto"
            >
              Join the Community
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLaunch;
