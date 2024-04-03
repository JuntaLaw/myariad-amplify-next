// src/app/page.js
"use client";
import React from 'react'; 
import { CustomAuthenticator } from "../ui-components/authenticator.override"; 


export default function App() {
  return (
    <div className="authenticator-wrapper">
      <CustomAuthenticator>
        <main>  
          {/* ログイン後に表示するコンテンツをここに追加 */} 
        </main> 
      </CustomAuthenticator>
    </div>
  );
}