import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

type Props = {
    header: string;
    content: string[]
}

export const LevelDataCard = ({header, content}: Props) => {

  return (
    <div className="w-full mx-auto p-4">
      <Card className="overflow-hidden w-full shadow-2xl transform transition-all hover:scale-105 duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 relative">
          <CardTitle className="text-3xl font-bold text-center mb-2">
            {header}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 bg-white dark:bg-black">
          <ul className="space-y-3">
            {content.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-bold mr-3">
                  {index + 1}
                </span>
                <span className="dark:text-white text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
