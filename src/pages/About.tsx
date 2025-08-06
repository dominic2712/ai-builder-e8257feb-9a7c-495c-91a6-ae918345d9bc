import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600">This website demonstrates a basic CRUD application using React, TypeScript, and Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default About;