// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext'; // Import the ModalProvider
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Landinformation from './pages/Landinformation';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function App() {
  return (
    // <ModalProvider> {/* Wrap everything with ModalProvider */}
    //   <Router>
    //     <div className="min-h-screen bg-white">
    //       <ScrollToTop /> {/* Add ScrollToTop component here */}
    //       <Header />
    //       <main>
    //         <Routes>
    //           <Route path="/" element={<HomePage />} />
    //           <Route path="/about" element={<AboutPage />} />
    //           <Route path="/projects" element={<ProjectsPage />} />
    //           <Route path="/contact" element={<ContactPage />} />
    //           <Route path="/Landinfo" element={<Landinformation />} />
    //         </Routes>
    //       </main>
    //       <Footer />
    //     </div>
    //   </Router>
    // </ModalProvider>
    <h1>NOT FOUND</h1>
  );
}

export default App;
