// src/app/layout.js
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css"; 
import React from 'react'; 

export const metadata = {
  title: "Miyariad Notebook",
  description: "Miyariad Notebook",
}; 

export default function Layout({ children }) {
  return (
    <html lang="ja">
    <body> 
      <main>
        <div>{children}</div>
      </main> 
    </body>
  </html>
  );
}


