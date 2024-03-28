"use client";
import { useState, useEffect } from 'react';
import NavigationBar from "../../components/navi/NavigationBar";
import NotebookHome from "../../components/ui/NotePage/NotebookHome";
import Notebook from "../../components/ui/Card/Notebook";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [notebooks, setNotebooks] = useState(() => {
     // ローカルストレージからNotebookの状態を取得
      const storedNotebooks = localStorage.getItem('notebooks'); 
      if (storedNotebooks) {
        return JSON.parse(storedNotebooks).map(notebook => ({
          ...notebook,
          component: () => <Notebook key={notebook.id} id={notebook.id} onDelete={handleDeleteNotebook} />,
        }));
      }
      return [];
    });

    useEffect(() => {
      // Notebookの状態がアップデートされたらローカルストレージに保存
      localStorage.setItem('notebooks', JSON.stringify(notebooks.map(notebook => ({
        ...notebook,
        component: null,
      }))));
    }, [notebooks]);
  

  // Notebookコンポーネントの追加機能
  const handleCreateNotebook = () => {
    const notebookId = uuidv4();
    const newNotebook = {
      id: notebookId,
      component: () => (
        <Notebook
          key={notebookId}
          id={notebookId}
          onDelete={handleDeleteNotebook}
        />
      ),
    };
    setNotebooks(prevNotebooks => [...prevNotebooks, newNotebook]);
  };

  // Notebookコンポーネントの削除機能
  const handleDeleteNotebook = (id) => {
    setNotebooks(currentNotebooks => currentNotebooks.filter(notebook => notebook.id !== id));
  };

  return (
    <main className="flex min-h-screen w-screen flex-col">
      <div className="app">
        <NavigationBar onCreateNotebook={handleCreateNotebook} />
        <NotebookHome notebooks={notebooks.map(notebook => notebook.component())} />
      </div>
    </main>
  );
}