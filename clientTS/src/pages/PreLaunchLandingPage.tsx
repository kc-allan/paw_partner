import React, { useState } from "react";
import {
  PawPrint,
  MapPin,
  ShieldCheck,
  Heart,
  Search,
  Calendar,
  Coffee,
  CheckCircle,
  ArrowRight,
  Star,
  Lock,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import heroImage from "../assets/hero-illustration.png";
import serviceDogWalking from "../assets/service-dog-walking.png";
import servicePetSitting from "../assets/service-pet-sitting.png";
import servicePetGrooming from "../assets/service-pet-grooming.png";
import serviceVetConnect from "../assets/service-vet-connect.png";

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"owner" | "sitter">("owner");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist", email: email, userType: userType })
      })
        .then(() => {
          setIsSubscribed(true);
          setTimeout(() => setIsSubscribed(false), 5000);
          setEmail("");
        })
        .catch((error) => console.error(error));
    }
  };

  const services = [
    {
      image: serviceDogWalking,
      title: "Dog Walking",
      description: "Daily walks to keep your furry friend happy and active.",
      color: "bg-orange-50 border-orange-100"
    },
    {
      image: servicePetSitting,
      title: "Pet Sitting",
      description: "Trusted overnight care in your home or theirs.",
      color: "bg-rose-50 border-rose-100"
    },
    {
      image: servicePetGrooming,
      title: "Pet Grooming",
      description: "Professional grooming to make your pet look their best.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      image: serviceVetConnect,
      title: "Vet Connect",
      description: "Quick access to verified local veterinary services.",
      color: "bg-green-50 border-green-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-xl text-white">
              <PawPrint size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">Whiskr</span>
            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
          <button
            onClick={() => document.getElementById("join-waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden md:block bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gray-900">
                For the love of our <span className="text-orange-500">furry friends</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect with verified pet groomers, sitters and walkers in your neighborhood.
                Need a daily walk or overnight care? Whiskr makes it safe and easy.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById("join-waitlist")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto bg-orange-500 text-white px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-orange-600 transition-transform hover:-translate-y-1 shadow-lg shadow-orange-500/20"
                >
                  Join Waitlist
                </button>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`} />
                    ))}
                  </div>
                  <span>Join 500+ pet lovers</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={heroImage}
                  alt="Whiskr Pet Sitter walking a dog"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section - Redesigned */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dotted-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="text-left max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Pet Needs</h2>
            <p className="text-gray-600 text-lg">
              Here's what's in store for you to keep your pets happy, healthy and loved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className={`group relative overflow-hidden rounded-3xl border-2 ${service.color} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-1/2 overflow-hidden h-48 sm:h-auto min-h-[200px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>
                    <button
                      onClick={() => document.getElementById("join-waitlist")?.scrollIntoView({ behavior: "smooth" })}
                      className="self-start flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-800 hover:gap-4 transition-all">
                      Learn More <ArrowRight size={16} className="text-orange-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-orange-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Simple & Secure</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Whiskr Works</h2>
              <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                {[
                  { icon: <Search />, title: "Browse Profiles", desc: "View detailed profiles, photos, and reviews of sitters near you." },
                  { icon: <Calendar />, title: "Book & Pay", desc: "Schedule your service and pay securely via M-Pesa or card." },
                  { icon: <Coffee />, title: "Relax", desc: "Get real-time photo updates while you're away or busy." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm md:text-base">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{step.title}</h4>
                      <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-orange-100 w-full">
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Join the Community</h3>
                <p className="text-sm md:text-base text-gray-600">Are you a pet lover? Earn money doing what you love.</p>
              </div>

              <div className="bg-slate-50 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 border border-blue-100">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-blue-800 text-sm md:text-base">
                  <Heart className="fill-blue-500 text-blue-500" size={18} />
                  We love Hobbyists!
                </h4>
                <p className="text-blue-700 text-xs md:text-sm">
                  You don't need to be a pro. If you love pets, you can sign up as a sitter or walker and earn from doing what you love.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 md:p-4 bg-gray-50 rounded-xl text-center">
                  <span className="block text-xl md:text-2xl font-bold text-orange-500 mb-1">KES 1500+</span>
                  <span className="text-[10px] md:text-xs text-gray-500 uppercase font-bold">Daily Earnings</span>
                </div>
                <div className="p-3 md:p-4 bg-gray-50 rounded-xl text-center">
                  <span className="block text-xl md:text-2xl font-bold text-orange-500 mb-1">0%</span>
                  <span className="text-[10px] md:text-xs text-gray-500 uppercase font-bold">Signup Fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Redesigned Creative Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Pet Owners Trust Whiskr</h2>
            <p className="text-gray-600 text-lg">Built with safety, transparency, and love at the core.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(0,auto)] md:auto-rows-[minmax(200px,auto)] max-w-5xl mx-auto">
            {/* Feature 1: Verified Profiles (Large) */}
            <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 rounded-3xl border border-indigo-100 relative overflow-hidden group hover:shadow-lg transition-all min-h-[250px]">
              <div className="relative z-10">
                <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-4 md:mb-6 shadow-sm">
                  <ShieldCheck size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">100% Verified Profiles</h3>
                <p className="text-sm md:text-base text-gray-600 max-w-md">Every sitter passes a strict background check and identity verification before joining our community.</p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                <ShieldCheck size={150} className="md:w-[200px] md:h-[200px]" />
              </div>
            </div>

            {/* Feature 2: Secure Payments (Tall) */}
            <div className="md:row-span-2 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-3xl border border-green-100 flex flex-col justify-between group hover:shadow-lg transition-all min-h-[250px]">
              <div>
                <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-green-600 mb-4 md:mb-6 shadow-sm">
                  <Lock size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Secure Payments</h3>
                <p className="text-sm md:text-base text-gray-600">Your money is held safely until the service is completed to your satisfaction.</p>
              </div>
              <div className="mt-8 bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">M</div>
                  <span className="font-semibold text-sm">M-Pesa Accepted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">C</div>
                  <span className="font-semibold text-sm">Card Payments</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Local Community (Small) */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8 rounded-3xl border border-orange-100 group hover:shadow-lg transition-all">
              <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4 shadow-sm">
                <MapPin size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Local & Kenyan</h3>
              <p className="text-sm md:text-base text-gray-600">Connecting you with pet lovers in your specific neighborhood.</p>
            </div>

            {/* Feature 4: Real Reviews (Small) */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-3xl border border-purple-100 group hover:shadow-lg transition-all">
              <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-purple-600 mb-4 shadow-sm">
                <Star size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Real Reviews</h3>
              <p className="text-sm md:text-base text-gray-600">Transparent ratings from other pet owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="join-waitlist" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover opacity-10 bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be the First to Join Whiskr</h2>
          <p className="text-xl text-gray-300 mb-12">
            We'll be live soon. Join the waitlist to get early access and exclusive launch discounts.
          </p>

          <div className="bg-white/10 backdrop-blur-lg p-2 rounded-2xl max-w-lg mx-auto border border-white/20">
            <form onSubmit={handleSubscribe} name="waitlist" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="flex flex-col sm:flex-row gap-2">
              <input type="hidden" name="form-name" value="waitlist" />
              <input type="hidden" name="bot-field" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 text-white placeholder-gray-400 px-6 py-4 rounded-xl outline-none focus:bg-white/20 transition-all border border-transparent focus:border-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Join Now <ArrowRight size={20} />
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input
                type="radio"
                name="userType"
                checked={userType === "owner"}
                onChange={() => setUserType("owner")}
                className="accent-orange-500 w-4 h-4"
              />
              I'm a Pet Owner
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input
                type="radio"
                name="userType"
                checked={userType === "sitter"}
                onChange={() => setUserType("sitter")}
                className="accent-orange-500 w-4 h-4"
              />
              I want to be a Service Provider
            </label>
          </div>

          {isSubscribed && (
            <div className="mt-8 bg-green-500/20 text-green-300 px-6 py-3 rounded-xl inline-flex items-center gap-2 border border-green-500/30 animate-fade-in">
              <CheckCircle size={20} />
              <span>You've been added to the waitlist! Karibu Whiskr.</span>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-12 text-center text-gray-400 text-sm">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-orange-500 transition-colors transform hover:scale-110">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors transform hover:scale-110">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <p className="mb-2">© {new Date().getFullYear()} Whiskr Kenya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PreLaunch;
