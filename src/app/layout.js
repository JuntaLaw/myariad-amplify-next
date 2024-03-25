// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

const inter = Inter({ subsets: ["latin"] });

Amplify.configure(awsconfig);

export const metadata = {
  title: "Miyariad Notebook",
  description: "Miyariad Notebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}