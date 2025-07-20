import React from "react";
import {
  Zap,
  Shield,
  Skull,
  Users,
  Code,
  Trophy,
  Target,
  Star,
  Heart,
  Eye,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Only 2 small floating SVGs for About Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/5 left-1/8 animate-float-slow opacity-8">
          <img
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg"
            alt="Marvel Logo"
            className="w-7 h-7 filter drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-1/4 right-1/7 animate-float-delayed opacity-10">
          <img
            src="https://img.freepik.com/premium-vector/illustration-robot-head_994245-9115.jpg"
            alt="Robot Head"
            className="w-6 h-6 rounded-full filter drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 font-orbitron">
            THE MULTIVERSE COLLIDES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When genius meets justice and power converges with innovation,
            legends are born. Join forces with the greatest minds in the Marvel
            Universe for 36 hours of pure innovation.
          </p>
        </div>

        {/* Enhanced Character Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Iron Man Card */}
          <div className="group relative bg-gradient-to-br from-red-900/50 to-yellow-900/50 rounded-2xl p-8 border border-yellow-600/30 hover:border-yellow-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-yellow-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Zap className="w-12 h-12 text-yellow-400 mr-4" />
                  <div className="absolute inset-0 w-12 h-12 bg-yellow-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 font-orbitron">
                  IRON MAN
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Tech Visionary
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading the charge in AI, IoT, and cutting-edge technology.
                Stark Industries' innovation meets your brilliant ideas to forge
                the future.
              </p>
              <div className="flex items-center text-sm text-yellow-400">
                <Code className="w-4 h-4 mr-2" />
                <span>AI/ML • Robotics • Clean Energy</span>
              </div>
            </div>
          </div>

          {/* Captain America Card */}
          <div className="group relative bg-gradient-to-br from-blue-900/50 to-red-900/50 rounded-2xl p-8 border border-blue-600/30 hover:border-blue-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Shield className="w-12 h-12 text-blue-400 mr-4 animate-spin-slow" />
                  <div className="absolute inset-0 w-12 h-12 bg-blue-400 rounded-full blur-lg opacity-30"></div>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 font-orbitron">
                  CAPTAIN AMERICA
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Guardian of Innovation
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Defending the values of progress and justice. Build solutions
                that protect, serve, and uplift communities across the globe.
              </p>
              <div className="flex items-center text-sm text-blue-400">
                <Users className="w-4 h-4 mr-2" />
                <span>Social Good • Cybersecurity • Healthcare</span>
              </div>
            </div>
          </div>

          {/* Doctor Doom Card */}
          <div className="group relative bg-gradient-to-br from-green-900/50 to-purple-900/50 rounded-2xl p-8 border border-green-600/30 hover:border-green-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Skull className="w-12 h-12 text-green-400 mr-4 animate-pulse-doom" />
                  <div className="absolute inset-0 w-12 h-12 bg-green-400 rounded-full blur-lg opacity-30 animate-pulse-doom"></div>
                </div>
                <h3 className="text-2xl font-bold text-green-400 font-cinzel">
                  DOCTOR DOOM
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Master of Chaos
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Where others see impossibility, Doom sees opportunity. Challenge
                the limits of technology and bend reality to your will.
              </p>
              <div className="flex items-center text-sm text-green-400">
                <Trophy className="w-4 h-4 mr-2" />
                <span>Quantum Computing • Dark Tech • Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* New Character Cards Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Black Widow Card */}
          <div className="group relative bg-gradient-to-br from-red-900/40 to-black/60 rounded-2xl p-8 border border-red-600/30 hover:border-red-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Target className="w-12 h-12 text-red-400 mr-4 animate-pulse" />
                  <div className="absolute inset-0 w-12 h-12 bg-red-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-red-400 font-orbitron">
                  BLACK WIDOW
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Master Strategist
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Precision, strategy, and flawless execution. Build solutions
                with surgical accuracy and tactical brilliance that leave no
                room for error.
              </p>
              <div className="flex items-center text-sm text-red-400">
                <Eye className="w-4 h-4 mr-2" />
                <span>Cybersecurity • Data Analytics • Strategy</span>
              </div>
            </div>
          </div>

          {/* Scarlet Witch Card */}
          <div className="group relative bg-gradient-to-br from-red-900/50 to-pink-900/50 rounded-2xl p-8 border border-red-600/30 hover:border-pink-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Star className="w-12 h-12 text-red-500 mr-4 animate-magic-pulse" />
                  <div className="absolute inset-0 w-12 h-12 bg-red-500 rounded-full blur-lg opacity-30 animate-magic-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-red-500 font-cinzel">
                  SCARLET WITCH
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Reality Shaper
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Bend the rules of possibility with chaos magic. Create solutions
                that rewrite reality and transform the impossible into
                inevitable.
              </p>
              <div className="flex items-center text-sm text-red-400">
                <Star className="w-4 h-4 mr-2" />
                <span>AR/VR • Quantum Tech • Reality Manipulation</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-yellow-900/40 to-green-900/40 rounded-2xl p-8 border border-yellow-600/30 hover:border-yellow-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-green-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Heart className="w-12 h-12 text-yellow-400 mr-4 animate-pulse-slow" />
                  <div className="absolute inset-0 w-12 h-12 bg-yellow-400 rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 font-orbitron">
                  VISION
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Synthetic Perfection
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Perfect synthesis of mind and machine. Create harmonious
                solutions that bridge the gap between human intuition and
                computational power.
              </p>
              <div className="flex items-center text-sm text-yellow-400">
                <Heart className="w-4 h-4 mr-2" />
                <span>AI Ethics • Human-AI Interface • Synthesis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2 font-orbitron">
              800+
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Participants
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2 font-orbitron">
              ₹150K
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Prize Pool
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2 font-orbitron">
              36
            </div>
            <div className="text-gray-400 uppercase tracking-wide">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2 font-orbitron">
              6
            </div>
            <div className="text-gray-400 uppercase tracking-wide">Heroes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2 font-orbitron">
              ∞
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Possibilities
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2 font-orbitron">
              1
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Multiverse
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
