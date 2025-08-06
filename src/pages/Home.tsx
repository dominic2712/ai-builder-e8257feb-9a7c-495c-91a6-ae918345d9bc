import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold">Welcome to the AI Website</h2>
        <p className="mt-4 text-gray-600">This is a simple website built with React and TypeScript.</p>
      </div>
    </div>
  );
};

export default Home;