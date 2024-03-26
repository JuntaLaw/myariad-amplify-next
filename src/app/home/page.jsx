// ”src/app/home/page.jsx”
"use client";
import React, { useState } from 'react';
import NavigationBar from "../../components/navi/NavigationBar";
import NotebookHome from "../../components/ui/NotePage/NotebookHome";
import Notebook from "../../components/ui/Card/Notebook";
import { v4 as uuidv4 } from 'uuid'; // uuidをインポート

function Home() {
  const [notebooks, setNotebooks] = useState([]);

  // Notebookコンポーネントの追加機能
  const handleCreateNotebook = () => {
    const notebookId = uuidv4(); // uuidを使用して一意のIDを生成 
    const newNotebook = {
      id: notebookId,
      component: (
        <Notebook
          key={notebookId}
          id={notebookId} // ここでNotebookコンポーネントにidプロパティを渡しています
          onDelete={handleDeleteNotebook}
        />
      ),
    };
    setNotebooks(prevNotebooks => [...prevNotebooks, newNotebook]);
  };

  // Notebookコンポーネントの削除機能
  const handleDeleteNotebook = (id) => {
    // 実際のアプリケーションでは、ここでデータベースからNotebookを削除する処理を行います
    setNotebooks(currentNotebooks => currentNotebooks.filter(notebook => notebook.id !== id));
  };

  return (
    <main className="flex min-h-screen w-screen flex-col" > 
      <div className="app">
        <NavigationBar onCreateNotebook={handleCreateNotebook} />
        <NotebookHome notebooks={notebooks.map(notebook => notebook.component)} />
      </div>
    </main>
  );
}

export default Home;