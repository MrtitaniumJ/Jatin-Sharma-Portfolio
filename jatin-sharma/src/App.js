// client/src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import VerticalTimelineSection from './components/VerticalTimeline';
// import WordCloudSection from './components/WordCloud';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <HeroSection />
        <IntroductionSection />
        <VerticalTimelineSection />
        {/* <WordCloudSection /> */}
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
