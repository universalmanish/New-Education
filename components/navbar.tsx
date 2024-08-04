"use client"
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { useSidebar } from '@/hooks/use-sidebar';
import { MobileSidebar } from './mobile-sidebar';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { onOpen } = useSidebar()


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed border-b top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? 'bg-white  backdrop-blur-sm shadow-lg' : 'bg-white dark:bg-gray-800'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="hidden lg:block text-xl font-bold text-gray-800 dark:text-white">
              Logo
            </a>
            <Button onClick={onOpen} className="bg-transparent dark:text-white hover:bg-gray-500 lg:hidden">
              <Menu/>
              <MobileSidebar />
            </Button>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Contact
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

