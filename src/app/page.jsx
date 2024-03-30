// src/app/page.js
// "use client";
// import React from 'react'; 
// import { CustomAuthenticator } from "../ui-components/authenticator.override"; 
// import Home from "./home/page";

// export default function App() {
//   return (
//     <div className="authenticator-wrapper">
//       <CustomAuthenticator>
//         <main>  
//           {/* ログイン後に表示するコンテンツをここに追加 */}
//           <Home/>
//         </main> 
//       </CustomAuthenticator>
//     </div>
//   );
// }

// src/app/page.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Home from "./home/page";

export default function App() {
  const router = useRouter();

  // 一時的なリダイレクト処理
  React.useEffect(() => {
    router.replace('/home');
  }, []);

  return (
    <div className="authenticator-wrapper">
      {/* 認証コンポーネントを一時的に削除 */}
      <main>
        {/* ログイン後に表示するコンテンツをここに追加 */}
        <Home />
      </main>
    </div>
  );
}