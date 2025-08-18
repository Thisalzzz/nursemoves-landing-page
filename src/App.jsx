import './App.css'
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ScreenshotSection from './components/ScreenshotSection';
import FeaturesSection from './components/FeaturesSection';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';

function App() {


  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ScreenshotSection />
      <FeaturesSection />
      <EmailCapture />
      <Footer />
    </div>
  )
}

export default App
