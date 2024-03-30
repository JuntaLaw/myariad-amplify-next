import React from 'react'; 
import { CustomAuthenticator } from "../ui-components/authenticator.override"; 
import Home from "./home/page";

export default function App() {
  return (
    <div className="authenticator-wrapper">
      <CustomAuthenticator>
        <main>  
          {/* ログイン後に表示するコンテンツをここに追加 */}
          {/* <Home/> */}
        </main> 
      </CustomAuthenticator>
    </div>
  );
}

