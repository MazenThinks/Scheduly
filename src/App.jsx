import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import About from './pages/About';
import Contact from './pages/Contact';
import Developer from './pages/Developer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/book" element={<BookAppointment />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/developer" element={<Developer />} />
              </Routes>
            </main>
            <Footer />
            <FloatingCTA />
          </div>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
