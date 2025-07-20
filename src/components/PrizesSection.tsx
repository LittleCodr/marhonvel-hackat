import React from "react";
import { Trophy, Zap, Shield, Crown, Star, Gift } from "lucide-react";

export const PrizesSection: React.FC = () => {
  const prizes = [
    {
      icon: Crown,
      title: "INFINITY GAUNTLET",
      subtitle: "Grand Prize",
      amount: "₹50,000",
      description:
        "Ultimate power deserves ultimate recognition. The winner wielding all six Infinity Stones of innovation.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient: "from-yellow-900/30 to-red-900/30",
      borderColor: "border-yellow-500/50",
      glowColor: "shadow-yellow-500/30",
    },
    {
      icon: Shield,
      title: "VIBRANIUM SHIELD",
      subtitle: "Second Place",
      amount: "₹30,000",
      description:
        "Forged from the strongest metal on Earth. A prize worthy of the First Avenger's approval.",
      gradient: "from-blue-400 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-900/30 to-cyan-900/30",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/30",
    },
    {
      icon: Zap,
      title: "ARC REACTOR",
      subtitle: "Third Place",
      amount: "₹20,000",
      description:
        "Clean, limitless energy. The heart of Iron Man's power, now fueling your future.",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-900/30 to-indigo-900/30",
      borderColor: "border-cyan-500/50",
      glowColor: "shadow-cyan-500/30",
    },
  ];

  const specialPrizes = [
    {
      icon: Star,
      title: "Best AI Innovation",
      amount: "₹5,000",
      color: "yellow",
    },
    {
      icon: Trophy,
      title: "Most Social Impact",
      amount: "₹5,000",
      color: "blue",
    },
    {
      icon: Gift,
      title: "Best Design",
      amount: "₹5,000",
      color: "purple",
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 font-orbitron">
            LEGENDARY REWARDS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Heroes and villains fight for glory, but legends claim the ultimate
            prizes. What treasures await the champions of this multiverse clash?
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${prize.bgGradient} rounded-3xl p-8 border-2 ${prize.borderColor} transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden`}
              >
                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur`}
                ></div>

                {/* Prize Container Glow */}
                <div
                  className={`absolute inset-0 ${prize.glowColor} shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative z-10 text-center">
                  {/* Prize Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center animate-pulse-slow`}
                      >
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      <div
                        className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${prize.gradient} rounded-full blur-xl opacity-50 animate-pulse-slow`}
                      ></div>
                    </div>
                  </div>

                  {/* Prize Details */}
                  <h3
                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${prize.gradient} mb-2 font-orbitron`}
                  >
                    {prize.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">
                    {prize.subtitle}
                  </h4>
                  <div
                    className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${prize.gradient} mb-6 font-orbitron`}
                  >
                    {prize.amount}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {prize.description}
                  </p>

                  {/* Rank Badge */}
                  <div className="mt-6">
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${prize.gradient} text-white font-bold text-sm`}
                    >
                      #{index + 1} PLACE
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
                <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full opacity-40 animate-bounce"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"></div>
              </div>
            );
          })}
        </div>

        {/* Special Category Prizes */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-2 font-orbitron">
            SPECIAL RECOGNITION AWARDS
          </h3>
          <p className="text-gray-400">
            Excellence in specific domains deserves its own spotlight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specialPrizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-${prize.color}-500/30 hover:border-${prize.color}-400 transition-all duration-300 hover:scale-105 text-center`}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent
                    className={`w-8 h-8 text-${prize.color}-400`}
                  />
                </div>
                <h4
                  className={`text-lg font-bold text-${prize.color}-400 mb-2`}
                >
                  {prize.title}
                </h4>
                <div className={`text-2xl font-bold text-white font-orbitron`}>
                  {prize.amount}
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Trophy className="w-6 h-6 text-white mr-3" />
            <span className="text-white font-bold text-xl">
              Total Prize Pool:{" "}
              <span className="text-2xl font-orbitron">₹1,50,000</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
