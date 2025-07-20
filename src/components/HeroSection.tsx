import React, { useState, useEffect } from "react";
import { Zap, Shield, Skull, Play } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-07-23T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate initial time
    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-red-900"
      id="hero"
    >
      {/* Only 2 small floating SVGs for Hero Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 animate-float-slow opacity-8">
          <img
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg"
            alt="Marvel Logo"
            className="w-6 h-6 filter drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-1/3 right-1/6 animate-float-delayed opacity-10">
          <img
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/Avengers_Thanos_Infinity_pjoiyd.svg"
            alt="Infinity Gauntlet"
            className="w-5 h-5 filter drop-shadow-lg"
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-green-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Character Icons */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="relative">
            <Zap className="w-16 h-16 text-yellow-400 animate-pulse drop-shadow-2xl" />
            <div className="absolute inset-0 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          <div className="relative">
            <Shield className="w-20 h-20 text-blue-600 animate-spin-slow drop-shadow-2xl" />
            <div className="absolute inset-0 w-20 h-20 bg-blue-600 rounded-full blur-xl opacity-30"></div>
          </div>
          <div className="relative">
            <Skull className="w-16 h-16 text-green-500 animate-pulse-doom drop-shadow-2xl" />
            <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse-doom"></div>
          </div>
        </div>
        {/* Mission Brief */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
            THE MULTIVERSE AWAITS
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Three legendary forces unite for the ultimate innovation challenge.
            Choose your alliance, assemble your team, and compete for glory
            across dimensions.
          </p>
        </div>
        {/* Event Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-xl p-6 border border-yellow-500/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-orbitron">
              36 HOURS
            </div>
            <div className="text-gray-300">Of Pure Innovation</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-orbitron">
              ₹150K
            </div>
            <div className="text-gray-300">Total Prize Pool</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
            <div className="text-3xl font-bold text-green-400 mb-2 font-orbitron">
              800+
            </div>
            <div className="text-gray-300">Elite Participants</div>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-white mb-6 font-orbitron">
            REGISTRATION STARTS IN:
          </h4>
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div key={unit} className="relative group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-white font-orbitron">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase text-gray-400 tracking-wider">
                    {unit}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://www.commudle.com/communities/articode/hackathons/hackcentrix"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold text-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              <Zap className="w-6 h-6 mr-3" />
              JOIN THE MISSION
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-20 animate-pulse"></div>
          </a>

          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <a 
              href="https://www.instagram.com/reel/DLZbFcFThx0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex items-center"
            >
              <Play className="w-6 h-6 mr-3" />
              WATCH TRAILER
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>{" "}
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Registration starts on{" "}
            <span className="text-green-400 font-bold">July 23rd, 2025</span> •{" "}
            Registration ends on{" "}
            <span className="text-red-400 font-bold">August 14th, 2025</span> •{" "}
            <span className="text-yellow-400 font-bold">
              ₹40 per team member
            </span> •{" "}
            <span className="text-yellow-400 font-bold">
              36-hour hackathon
            </span>
          </p>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
};
