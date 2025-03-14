
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { CommunityFeed } from '@/components/community/CommunityFeed';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Cộng đồng</h1>
        <CommunityFeed />
      </div>
    </div>
  );
};

export default Community;
