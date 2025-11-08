import React from 'react';

const Hero = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:flex lg:items-center lg:gap-12 lg:px-8">
        <div className="flex-1">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">24/7 Emergency Care</span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Compassionate Care, Modern Medicine
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Welcome to BlueCross Hospital, your trusted destination for world-class healthcare.
            Our expert team provides comprehensive services with a patient-first approach.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollToId('appointment')} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Book an Appointment
            </button>
            <button onClick={() => scrollToId('services')} className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Explore Services
            </button>
          </div>
        </div>
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative h-72 w-full rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-[2px] shadow-lg sm:h-96">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
              <div className="grid w-full grid-cols-2 gap-4 p-6 sm:p-8">
                {[
                  { title: 'Cardiology', stat: '98% satisfaction' },
                  { title: 'Pediatrics', stat: '10k+ families' },
                  { title: 'Orthopedics', stat: '5k+ surgeries' },
                  { title: 'Radiology', stat: 'AI-assisted' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-100 p-4 shadow-sm">
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{item.stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">State-of-the-art facilities, trusted by thousands.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
