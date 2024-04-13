"use client";
import { useEffect } from 'react';
import NavigationBar from "../../components/navi/NavigationBar";
import NotebookHome from "../../components/ui/NotePage/NotebookHome";
import Notebook from "../../components/ui/Card/Notebook";
import useNotebookStore from '../../store/notebookStore';


export default function Home() {
    const notebooks = useNotebookStore(state => state.notebooks);
    const createNotebook = useNotebookStore(state => state.createNotebook);
    const fetchNotebooks = useNotebookStore(state => state.fetchNotebooks);

    useEffect(() => {
        fetchNotebooks();
    }, [fetchNotebooks]);

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