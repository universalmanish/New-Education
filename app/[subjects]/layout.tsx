"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { sidebarData } from '@/db/queries';
import { countSlashes, lastItem, routeItem } from '@/lib/route-finder';


// Define the correct type for your data
type SidebarProps = {
  id: number;
  title: string;
  route: string;
};

const SubjectLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [data, setData] = useState<SidebarProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const countSlash = countSlashes(pathName)
  const routeItems = routeItem(pathName)
  const lastItems = lastItem(pathName)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await sidebarData(countSlash, routeItems);
        if (response === undefined) {
          setData(null);
      } else {
          setData(response);
      }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countSlash, routeItems]);
   
  if (!data) return null

  return (
    <div className="h-full w-full">
      {data && <Sidebar href={lastItems} data={data} onlyLevels={countSlash === 3}/>}
      <Navbar />
      {children}
    </div>
  );
};

export default SubjectLayout;