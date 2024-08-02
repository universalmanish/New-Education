"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';


// Define the correct type for your data
type SidebarProps =  {
  id: number;
  title: string;
  route: string;
}

const SubjectLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [data, setData] = useState<SidebarProps[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/1");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: SidebarProps[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pathname]);

  return (
    <div className="h-full w-full">
      {data && <Sidebar href={pathname} data={data} />}
      <Navbar />
      {children}
    </div>
  );
};

export default SubjectLayout;