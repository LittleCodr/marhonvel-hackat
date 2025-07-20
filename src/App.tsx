import React from "react";
import { Navigation } from "./components/Navigation";
import { VideoHero } from "./components/VideoHero";
import { TitleSection } from "./components/TitleSection";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { VisionSection } from "./components/VisionSection";
// import { InfinityTracksSection } from "./components/InfinityTracksSection";
import { TracksSection } from "./components/TracksSection";
import { PrizesSection } from "./components/PrizesSection";
// import { ScheduleSection } from "./components/ScheduleSection";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <VideoHero />
      <TitleSection />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      {/* <InfinityTracksSection /> */}
      {/* <PrizesSection /> */}
      {/* <ScheduleSection /> */}
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;