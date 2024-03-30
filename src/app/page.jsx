// src/app/page.js
"use client";
import React from 'react'; 
import { CustomAuthenticator } from "../ui-components/authenticator.override"; 
// import Toppage from './toppage/page';

export default function App() {
  return (
    <div className="authenticator-wrapper">
      <CustomAuthenticator>
        <main>  
          {/* ログイン後に表示するコンテンツをここに追加 */}
          {/* <Toppage/> */}
        </main> 
      </CustomAuthenticator>
    </div>
  );
}