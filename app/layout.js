import React from 'react';
import "../app/globals.css";
import Background from '@/app/Components/Background';
import Navbar from '@/app/Components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
      <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}