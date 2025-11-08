import React from 'react';

const doctors = [
  {
    name: 'Dr. Amelia Carter',
    specialty: 'Cardiologist',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Dr. Noah Patel',
    specialty: 'Orthopedic Surgeon',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Dr. Sophia Nguyen',
    specialty: 'Pediatrician',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Dr. Liam Rodriguez',
    specialty: 'Radiologist',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1740&auto=format&fit=crop',
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Specialists</h2>
          <p className="mt-4 text-lg text-gray-600">Highly qualified, compassionate, and committed to your health.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <img src={d.photo} alt={d.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{d.name}</h3>
                <p className="mt-1 text-sm text-blue-600">{d.specialty}</p>
                <button className="mt-4 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
