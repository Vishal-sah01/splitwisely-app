'use client';

import React from 'react';
import Banner from '@/components/Banner';

export default function LandingPage() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <Banner />
      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
        All rights reserved @Vishal 
      </footer>
    </div>
  );
}