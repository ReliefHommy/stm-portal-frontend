//app/layout.tsx
import React from 'react';
import './globals.css'


export const metadata = {
  title: 'STM Portal',
  description: 'Frontend for STM Portal',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
 
      <body>
        
          {children}
       
       
        </body>
    </html>
  );
}
