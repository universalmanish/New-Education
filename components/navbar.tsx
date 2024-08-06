"use client"
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { useSidebar } from '@/hooks/use-sidebar';
import { MobileSidebar } from './mobile-sidebar';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { SearchBox } from './search-box';


export const Navbar = () => {
  const pathName = usePathname()
  const [isScrolled, setIsScrolled] = useState(false);
  const { onOpen } = useSidebar()
  const isHomePage = pathName === '/'


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed h-14 top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? 'bg-white/10   backdrop-blur-sm shadow-xl' : 'bg-white dark:bg-gray-800'
      }`}>
      <div className="w-full justify-end pt-3 lg:pl-6 pr-6">
        <div className="flex justify-between">
          <div className="items-center justify-center pl-4">
            {isHomePage ? (
              <a href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                Logo
              </a>
            ) : (
              <>
                <a href="/" className="hidden lg:block text-xl font-bold text-gray-800 dark:text-white">
                  Logo
                </a>
                <Button onClick={onOpen} className="bg-transparent dark:text-white hover:bg-gray-500 lg:hidden">
                  <Menu />
                  <MobileSidebar />
                </Button>
              </>
            )}
          </div>
          <div className="flex  lg:gap-x-6 items-center mr-0">
            <div>
              <SearchBox/>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              About
            </a>           
              <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
};

