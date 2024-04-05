"use client";
import { useEffect } from 'react';
import NavigationBar from "../../components/navi/NavigationBar";
import NotebookHome from "../../components/ui/NotePage/NotebookHome";
import Notebook from "../../components/ui/Card/Notebook";
import useNotebookStore from '../../store/notebookStore';

export default function Home() {
    const notebooks = useNotebookStore(state => state.notebooks);
    const createNotebook = useNotebookStore(state => state.createNotebook);
    const setNotebooks = useNotebookStore(state => state.setNotebooks);

    useEffect(() => {
        const storedNotebooks = JSON.parse(localStorage.getItem('notebook-storage'));
        if (storedNotebooks && storedNotebooks.state && storedNotebooks.state.notebooks) {
        const updatedNotebooks = storedNotebooks.state.notebooks.map(notebook => ({
            ...notebook,
            component: undefined,
        }));
        setNotebooks(updatedNotebooks);
        }
    }, []);

    return (
        <main className="flex min-h-screen w-screen flex-col">
        <div className="app">
            <NavigationBar onCreateNotebook={createNotebook} />
            <NotebookHome>
            {notebooks.map(notebook => (
                <Notebook key={notebook.id} id={notebook.id} />
            ))}
            </NotebookHome>
        </div>
        </main>
    );
}