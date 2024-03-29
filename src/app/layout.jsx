// src/app/layout.js
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css"; 
import React from 'react'; 
// Amplifyの設定をインポート
import amplifyConfig from '../config/amplifyConfig';
import { Amplify } from 'aws-amplify';

// Amplifyにカスタム設定を適用
Amplify.configure(amplifyConfig);

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

