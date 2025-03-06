
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';
import { Button } from './ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full glass-panel">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="text-xl font-bold">
              ComicVault
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 pt-24 pb-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
