import React, { useState } from "react";
import {
  Zap,
  Shield,
  Skull,
  Twitter,
  Linkedin,
  Mail,
  Contact,
  Instagram,
} from "lucide-react";
import { PopupModal } from './PopupModal';

export const Footer: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const marvelIcons = [
    {
      icon: Zap,
      color: "text-yellow-400",
      name: "Iron Man",
      bg: "bg-yellow-400/20",
    },
    {
      icon: Shield,
      color: "text-blue-400",
      name: "Captain America",
      bg: "bg-blue-400/20",
    },
    {
      icon: Skull,
      color: "text-green-400",
      name: "Doctor Doom",
      bg: "bg-green-400/20",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % marvelIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFooterLinkClick = (link: string) => {
    switch (link) {
      case 'About the Event':
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Tracks & Challenges':
        document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Prizes & Rewards':
        document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Schedule':
        document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Mentors':
        setActiveModal('mentors');
        break;
      case 'FAQs':
        setActiveModal('faqs');
        break;
      case 'Privacy Policy':
        setActiveModal('privacy');
        break;
      case 'Terms of Service':
        setActiveModal('terms');
        break;
      case 'Code of Conduct':
        setActiveModal('conduct');
        break;
      default:
        break;
    }
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'mentors':
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Our mentors are industry experts and Marvel Universe legends who will guide you through your journey:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Tony Stark</h3>
                <p className="text-gray-300">AI/ML and Innovation Expert</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Steve Rogers</h3>
                <p className="text-gray-300">Leadership and Team Building</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-2">Victor Von Doom</h3>
                <p className="text-gray-300">Advanced Technology and Strategy</p>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-2">Natasha Romanoff</h3>
                <p className="text-gray-300">Cybersecurity and Tactical Planning</p>
              </div>
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Q: Who can participate?</h3>
              <p className="text-gray-300">A: Students from all universities and colleges are welcome to participate. Teams can have 2-4 members.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Q: Is there a registration fee?</h3>
              <p className="text-gray-300">A: No, the hackathon is completely free to participate in.</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-2">Q: What should I bring?</h3>
              <p className="text-gray-300">A: Bring your laptop, chargers, and your creativity! Food and accommodation will be provided.</p>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              We are committed to protecting your privacy and personal information during the Marvel Multiverse Hackathon.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Information We Collect</h3>
                <p className="text-gray-300">We collect only necessary information for registration and event management purposes.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">How We Use Your Information</h3>
                <p className="text-gray-300">Your information is used solely for hackathon organization, communication, and prize distribution.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-2">Data Security</h3>
                <p className="text-gray-300">We implement appropriate security measures to protect your personal information.</p>
              </div>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              By participating in the Marvel Multiverse Hackathon, you agree to the following terms and conditions:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Participation</h3>
                <p className="text-gray-300">Participants must be students and follow all event guidelines and rules.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Intellectual Property</h3>
                <p className="text-gray-300">Participants retain ownership of their projects while granting event organizers rights to showcase work.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-2">Conduct</h3>
                <p className="text-gray-300">All participants must maintain professional and respectful behavior throughout the event.</p>
              </div>
            </div>
          </div>
        );
      case 'conduct':
        return (
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              The Marvel Multiverse Hackathon is committed to providing a safe, inclusive, and respectful environment for all participants.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Respect and Inclusion</h3>
                <p className="text-gray-300">We welcome participants from all backgrounds and expect everyone to treat others with respect and dignity.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Prohibited Behavior</h3>
                <p className="text-gray-300">Harassment, discrimination, or any form of inappropriate behavior will not be tolerated.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-2">Reporting</h3>
                <p className="text-gray-300">If you experience or witness any violations, please report them to event organizers immediately.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (activeModal) {
      case 'mentors':
        return 'MARVEL MENTORS';
      case 'faqs':
        return 'FREQUENTLY ASKED QUESTIONS';
      case 'privacy':
        return 'PRIVACY POLICY';
      case 'terms':
        return 'TERMS OF SERVICE';
      case 'conduct':
        return 'CODE OF CONDUCT';
      default:
        return '';
    }
  };
  return (
    <>
    <footer className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2 mr-4">
                {marvelIcons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className={`relative p-2 rounded-full transition-all duration-500 ${
                        activeIcon === index ? item.bg : "bg-gray-800"
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 transition-colors duration-500 ${
                          activeIcon === index ? item.color : "text-gray-500"
                        }`}
                      />
                      {activeIcon === index && (
                        <div
                          className={`absolute inset-0 rounded-full ${item.bg} animate-ping`}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <h3 className="text-2xl font-bold font-orbitron">
                MARVEL MULTIVERSE
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Where heroes, villains, and innovators collide to forge the
              future. Join the greatest 36-hour hackathon in the multiverse with ₹150K prize pool. Registration: ₹40 per team member.
            </p>{" "}
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/gdgglau/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdg-glau/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400 font-orbitron">
              QUICK ACCESS
            </h4>
            <ul className="space-y-2">
              {[
                "About the Event",
                "Tracks & Challenges",
                "Prizes & Rewards",
                "Schedule",
                "Mentors",
                "FAQs",
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400 font-orbitron">
              MISSION CONTROL
            </h4>{" "}
            <div className="space-y-4">
              <div className="flex items-start">
                <Contact className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Contact Numbers:
                    <br />
                    <a
                      href="tel:+918533806906"
                      className="text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      +91 8533806906
                    </a>
                    <br />
                    <a
                      href="tel:+918445936898"
                      className="text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      +91 8445936898
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <a
                  href="mailto:gdgmathura85@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  gdgmathura85@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-300">
                <span className="text-green-400 font-semibold">Status:</span>{" "}
                Portal Active
              </p>
              <p className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">Security:</span>{" "}
                SHIELD Protected
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Marvel Multiverse Hackathon. All rights reserved across all
              dimensions.
            </div>{" "}
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => handleFooterLinkClick('Privacy Policy')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleFooterLinkClick('Terms of Service')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleFooterLinkClick('Code of Conduct')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
    </footer>

    {/* Modal */}
    <PopupModal
      isOpen={activeModal !== null}
      onClose={() => setActiveModal(null)}
      title={getModalTitle()}
    >
      {renderModalContent()}
    </PopupModal>
    </>
  );
};
