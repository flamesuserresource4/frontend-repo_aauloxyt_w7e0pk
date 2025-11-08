import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">BH</span>
            <span className="text-lg font-semibold">BlueCross Hospital</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#doctors" className="hover:text-gray-900">Doctors</a>
            <a href="#appointment" className="hover:text-gray-900">Appointment</a>
          </nav>
          <a href="#appointment" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">Book Now</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Doctors />
        <AppointmentForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
