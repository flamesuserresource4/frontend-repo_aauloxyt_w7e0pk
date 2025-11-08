import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  department: 'Cardiology',
  date: '',
};

const AppointmentForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend specified yet; simulate success UX
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm(initialState);
  };

  return (
    <section id="appointment" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book an Appointment</h2>
        <p className="mt-4 text-lg text-gray-600">Fill out your details and our team will confirm your slot shortly.</p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        {submitted && (
          <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
            Appointment request submitted! We'll get back to you soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@email.com" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select name="department" value={form.department} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Orthopedics</option>
              <option>Radiology</option>
              <option>General Medicine</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input required type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="mt-2 w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
