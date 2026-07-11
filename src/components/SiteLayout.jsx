import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import DatumLine from '@/components/DatumLine';
import Footer from '@/components/Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      <DatumLine />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
