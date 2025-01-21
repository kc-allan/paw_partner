import React, { useEffect, useRef, useState } from "react";
import {
  PawPrint,
  Mail,
  Star,
  MapPin,
  Calendar,
  Camera,
  ArrowRight,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import happPets from "../assets/images/happy-pets.jpg";
import pamperedDog from "../assets/images/pampered-pet.jpg";
import curiousDog from "../assets/images/curious-dog.jpg";
import medcare from "../assets/images/medcare.jpg";
import cover from "../assets/images/landing-page-cover.jpg";
import MessageAlert from "../components/alerts/MessageAlert";
import Header from "../components/header";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("daycare");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [animatedStats, setAnimatedStats] = useState({
    rating: 0,
    locations: 0,
    visits: 0,
    photos: 0,
  });
  const [message, setMessage] = useState<{
    message: string;
    type: string;
  } | null>(null);

  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    setMessage({ message: "Thank you for subscribing!", type: "error" });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting form...");
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTl
        .from(heroRef.current, {
          opacity: 0,
          duration: 1,
        })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.7"
        );

      // Services section animation
      gsap.from(servicesRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      // Stats animation
      const statElements = document.querySelectorAll(".stat-item");
      statElements.forEach((stat, index) => {
        gsap.from(stat, {
          // opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        });
      });

      // CTA section animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(ctaRef.current, {
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },

      });

      const statsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      statsTimeline
        .from(".stat-item", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
        })
        .to(
          animatedStats,
          {
            rating: 4.9,
            locations: 50,
            visits: 10000,
            photos: 30000,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setAnimatedStats({
                rating: Number(animatedStats.rating.toFixed(1)),
                locations: Math.round(animatedStats.locations),
                visits: Math.round(animatedStats.visits),
                photos: Math.round(animatedStats.photos),
              });
            },
          },
          "-=0.4"
        );

      // About section animation
      gsap.from(".about-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setIsMenuOpen(false);
  // };

  const services: {
    [key: string]: {
      title: string;
      description: string;
      features: Array<string>;
      image: string;
    };
  } = {
    daycare: {
      title: "Pet Daycare",
      description: "Safe and fun environment for your pet while you're away",
      features: [
        "Supervised playtime",
        "Comfortable rest areas",
        "Regular updates",
      ],
      image: happPets,
    },
    grooming: {
      title: "Grooming",
      description: "Professional grooming services for all breeds",
      features: ["Bath & brush", "Nail trimming", "Style & trim"],
      image: pamperedDog,
    },
    walking: {
      title: "Dog Walking",
      description: "Scheduled walks and exercise for your furry friend",
      features: ["Flexible scheduling", "GPS tracking", "Exercise report"],
      image: curiousDog,
    },
    boarding: {
      title: "Pet Boarding",
      description: "Home away from home for extended stays",
      features: ["24/7 care", "Cozy bedding", "Daily activities"],
      image: medcare,
    },
  };

  return (
    <div className="min-h-screen bg-slate-300 pb-8 overflow-hidden">
      {message && (
        <MessageAlert
          message={message.message}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}
      <header>
        <Header />
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#383125]/90 to-transparent opacity-50"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-2xl relative z-10">
            <h1
              ref={headingRef}
              className="text-6xl font-bold bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-6"
            >
              Professional Pet Care Services You Can Trust
            </h1>
            <p ref={paragraphRef} className="text-xl text-primary-200 mb-8">
              Your pets deserve the best. Experience premium care with
              personalized attention and professional expertise.
            </p>
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <button className="group bg-accent-500 text-white px-8 py-4 rounded-full hover:bg-accent-600 transform hover:scale-105 transition-all flex items-center">
                Get Started
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 bg-slate-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                className={`p-6 rounded-xl text-left transition-all duration-500 ease-in-out shadow ${
                  selectedService === key
                    ? "bg-accent-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedService(key)}
              >
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p
                  className={`text-sm ${
                    selectedService === key ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </button>
            ))}
          </div>
          <div className="bg-gray-200 rounded-2xl py-8 px-4 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 gap-8 h-full w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {services[selectedService].description}
                </p>
                <ul className="space-y-4">
                  {services[selectedService].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <PawPrint size={20} className="text-orange-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex jusity-center items-center bg-cover bg-center bg-no-repeat md:px-4 w-full h-[300px]">
                <LazyLoadImage
                  effect="blur"
                  src={services[selectedService].image}
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section py-24 bg-slate-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At{" "}
              <span className="text-accent-500 font-semibold">Paw Partner</span>
              , we're driven by one mission: to create a trusted and seamless
              platform that connects pet owners with the best services and
              products for their furry, feathered, and scaly companions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600">
                We're a passionate team of pet enthusiasts who understand the
                love and care that goes into keeping pets happy and healthy.
                With backgrounds in technology, animal care, and customer
                service, we prioritize the well-being of pets and the
                convenience of their owners.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                What We Do
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We simplify pet care by offering a one-stop solution for all
                  your pet-related needs:
                </p>
                <div className="space-y-3">
                  {[
                    "Pet Services",
                    "Quality Products",
                    "Community Building",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-accent-100 p-2 rounded-lg">
                        <PawPrint size={20} className="text-accent-500" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To build a community where pets thrive, and their owners feel
              empowered with the resources they need to provide exceptional
              care. Join us in making the world a better place for pets — one
              paw at a time! 🐾
            </p>
            <button className="mt-6 bg-accent-500 text-white px-8 py-3 rounded-full hover:bg-accent-600 transform hover:scale-105 transition-all">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" ref={statsRef} className="py-24 bg-accent-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Star />,
                value: animatedStats.rating,
                label: "Client Rating",
                format: (v: number) => v.toFixed(1),
              },
              {
                icon: <MapPin />,
                value: animatedStats.locations,
                label: "Locations",
                format: (v: number) => `${v}+`,
              },
              {
                icon: <Calendar />,
                value: animatedStats.visits,
                label: "Monthly Visits",
                format: (v: number) => `${(v / 1000).toFixed(0)}k+`,
              },
              {
                icon: <Camera />,
                value: animatedStats.photos,
                label: "Pet Photos Shared",
                format: (v: number) => `${(v / 1000).toFixed(0)}k+`,
              },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center text-white">
                <div className="bg-white/10 p-4 rounded-xl inline-block mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">
                  {stat.format(stat.value)}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" ref={ctaRef} className="py-24 bg-slate-300 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to give your pet the best care?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of happy pet owners. Book your first service
                today and receive a special welcome discount!
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <div className="bg-white/10 rounded-xl flex items-center px-6 py-3 flex-1">
                  <Mail className="text-orange-500 mr-3" size={20} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="w-full outline-none text-white bg-transparent placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    onClick={() => setSubmitting(true)}
                    className={`relative flex items-center justify-center transition-all duration-500 
                      ${
                        submitting
                          ? "w-12 h-12 rounded-full bg-orange-500 opacity-70"
                          : "bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full"
                      }
                    `}
                  >
                    {submitting ? (
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    ) : (
                      <span className="text-white">Get Started</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
