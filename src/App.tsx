import { I18nProvider } from './lib/i18n';
import CulturalAccents from './components/CulturalAccents';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Sectors from './components/Sectors';
import Compliance from './components/Compliance';
import Partners from './components/Partners';
import Stories from './components/Stories';
import Gallery from './components/Gallery';
import Process from './components/Process';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen text-ink antialiased">
        <CulturalAccents />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Sectors />
            <Compliance />
            <Partners />
            <Stories />
            <Gallery />
            <Process />
            <News />
          </main>
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
