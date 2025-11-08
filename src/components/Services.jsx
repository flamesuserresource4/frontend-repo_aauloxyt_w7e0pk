import React from 'react';

const services = [
  {
    name: 'Emergency Care',
    desc: 'Round-the-clock emergency services with rapid response teams and advanced life support.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"> 
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" />
      </svg>
    ),
  },
  {
    name: 'Cardiology',
    desc: 'Comprehensive heart care including diagnosis, treatment, and rehabilitation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 21s-6.716-4.293-9.193-8.254C1.03 11.65 1 10.2 1.8 9.1 3.2 7.1 6 6.7 7.9 8.2c.9.7 1.6 1.7 2.1 2.8.5-1.1 1.2-2.1 2.1-2.8 1.9-1.5 4.7-1.1 6.1.9.8 1.1.8 2.55-.99 3.646C18.716 16.707 12 21 12 21z" />
      </svg>
    ),
  },
  {
    name: 'Pediatrics',
    desc: 'Dedicated child health services from newborn care to adolescent medicine.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0v1H5v-1z" />
      </svg>
    ),
  },
  {
    name: 'Diagnostics',
    desc: 'Modern imaging and lab services with quick turnaround times.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4 3h16v2H4V3zm2 4h12v12H6V7zm-2 14h16v2H4v-2z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Medical Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          A full spectrum of care delivered by leading specialists using the latest technology.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.name} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              {s.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
