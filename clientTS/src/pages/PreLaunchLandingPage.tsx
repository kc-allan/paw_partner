import React, { useState } from "react";
import {
  Heart,
  PawPrint,
  ChevronRight,
  Mail,
  BellRing,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      title: "Smart Scheduling",
      description: "AI-powered booking system that learns your pet's routine",
      status: "In Development",
      progress: 85
    },
    {
      title: "Real-time Updates",
      description: "Live video feeds and instant notifications about your pet",
      status: "Testing",
      progress: 90
    },
    {
      title: "Health Tracking",
      description: "Comprehensive health and activity monitoring",
      status: "Final Stage",
      progress: 95
    }
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
                <span id="logo" className="text-sm md:text-xl font-bold text-gray-800 italic">PawPartner</span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 rounded-full ml-2">Coming Soon</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button onClick={handleSubscribe} className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-orange-500">
                <BellRing size={20} />
                <span>Get Notified</span>
              </button>
              <button className="bg-black/80 text-xs text-white p-4 md:px-6 rounded-xl hover:bg-black">
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
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              Launching Spring 2025
            </span>
            <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of Pet Care is Almost Here
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Revolutionary AI-powered pet care platform combining smart scheduling, 
              real-time monitoring, and comprehensive health tracking.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="w-full px-6 py-4 rounded-xl bg-white shadow-xl border-2 border-orange-100 focus:border-orange-500 outline-none"
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

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span>500+ Early Signups</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span>Beta Testing in Progress</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span>Priority Access Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Coming Soon to PawPartner</h2>
            
            <div className="space-y-8">
              {upcomingFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      {feature.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Early Access Benefits */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">Join Our Early Access Program</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="text-orange-500" size={32} />,
                  title: "Priority Access",
                  description: "Be among the first to experience our revolutionary platform"
                },
                {
                  icon: <ShieldCheck className="text-orange-500" size={32} />,
                  title: "Lifetime Discount",
                  description: "Exclusive pricing for our founding members"
                },
                {
                  icon: <Heart className="text-orange-500" size={32} />,
                  title: "Shape the Future",
                  description: "Direct input into feature development"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="bg-orange-100 p-4 rounded-xl inline-block mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
            <span className="text-orange-500 font-medium">Limited Time Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Get 50% Off Your First 3 Months
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join our waitlist today and receive exclusive early-bird pricing when we launch.
              Only available for the first 1,000 members.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:opacity-90 flex items-center mx-auto">
              Secure Your Spot
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLaunch;