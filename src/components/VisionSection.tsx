import React from "react";
import { Brain, Code, Lightbulb, Target, Rocket, Heart } from "lucide-react";

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/4 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-indigo-400 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-10 right-1/3 w-5 h-5 bg-indigo-500 rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Floating Marvel Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/5 left-1/8 animate-float-slow opacity-8">
          <img
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg"
            alt="Marvel Logo"
            className="w-8 h-8 filter drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-1/4 right-1/7 animate-float-delayed opacity-10">
          <img
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/Avengers_Thanos_Infinity_pjoiyd.svg"
            alt="Infinity Gauntlet"
            className="w-6 h-6 filter drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400 font-orbitron">
            OUR VISION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Vision Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Vision Text */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                In a time when many chase technology for salaries, not solutions, we
                aim to <span className="text-purple-400 font-semibold">reignite the love of building</span> and 
                the <span className="text-blue-400 font-semibold">power of deep thinking</span>.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                The world's most transformative tools — <span className="text-green-400 font-semibold">Linux</span>, 
                <span className="text-yellow-400 font-semibold"> Git</span>, the 
                <span className="text-red-400 font-semibold"> Transformer Architectures</span> — were born from 
                vision, curiosity, and a drive to solve real problems.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                What the world needs today is not more of the same, but 
                <span className="text-purple-400 font-semibold"> bold ideas</span> that address real challenges 
                and push the boundaries of what's possible.
              </p>

              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-400/30">
                <p className="text-xl text-white font-semibold leading-relaxed">
                  This hackathon is not just about code. It is about 
                  <span className="text-purple-400"> thinking deeply</span>, 
                  <span className="text-blue-400"> building fearlessly</span>, and 
                  <span className="text-indigo-400"> creating what only you can imagine</span>.
                </p>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed mt-6">
                We want students to leave not just with prizes, but with a 
                <span className="text-yellow-400 font-semibold"> mindset to truly innovate</span>.
              </p>
            </div>
          </div>

          {/* Right Side - Vision Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-purple-800/40 to-purple-900/40 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Brain className="w-12 h-12 text-purple-400 animate-pulse" />
                  <div className="absolute inset-0 w-12 h-12 bg-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-purple-400 text-center mb-2">Deep Thinking</h3>
              <p className="text-gray-300 text-center text-sm">Beyond surface solutions</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-800/40 to-blue-900/40 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Rocket className="w-12 h-12 text-blue-400 animate-bounce-slow" />
                  <div className="absolute inset-0 w-12 h-12 bg-blue-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-400 text-center mb-2">Bold Innovation</h3>
              <p className="text-gray-300 text-center text-sm">Push boundaries fearlessly</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-800/40 to-indigo-900/40 rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Target className="w-12 h-12 text-indigo-400 animate-pulse-slow" />
                  <div className="absolute inset-0 w-12 h-12 bg-indigo-400 rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-indigo-400 text-center mb-2">Real Solutions</h3>
              <p className="text-gray-300 text-center text-sm">Address genuine problems</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-700/40 to-pink-800/40 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Heart className="w-12 h-12 text-pink-400 animate-magic-pulse" />
                  <div className="absolute inset-0 w-12 h-12 bg-pink-400 rounded-full blur-lg opacity-30 animate-magic-pulse"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-pink-400 text-center mb-2">Love Building</h3>
              <p className="text-gray-300 text-center text-sm">Passion over paychecks</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              JOIN THE REVOLUTION
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Be part of a movement that values innovation over imitation, 
              depth over superficiality, and impact over income. ₹150K prize pool awaits. Registration: ₹40 per team member.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.commudle.com/communities/articode/hackathons/hackcentrix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">START BUILDING</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button 
                onClick={() => window.open('https://www.instagram.com/reel/DLZbFcFThx0/', '_blank')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">THINK DEEPER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
};
// Helper function to scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
