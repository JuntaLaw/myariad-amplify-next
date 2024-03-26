// ”src/app/home/page.jsx”
"use client";
import React, { useState } from 'react';
import NavigationBar from "../../components/navi/NavigationBar";
import NotebookHome from "../../components/ui/NotePage/NotebookHome";
import Notebook from "../../components/ui/Card/Notebook";

function Home() {
  const [notebooks, setNotebooks] = useState([]);

  const handleCreateNotebook = () => {
    // 実際のアプリケーションでは、ここでデータベースから取得したNotebook IDを使用します
    const notebookId = Date.now().toString(); // 一時的なIDとしてDate.now()を使用
    const newNotebook = {
      id: notebookId,
      component: (
        <Notebook
          key={notebookId}
          id={notebookId}
          onDelete={handleDeleteNotebook}
        />
      ),
    };
    setNotebooks(prevNotebooks => [...prevNotebooks, newNotebook]);
  };

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