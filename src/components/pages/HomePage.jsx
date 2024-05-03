"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api'; 
import NavigationBar from "../../components/navi/NavigationBar";
import NotebookHome from "../../components/ui/NotePage/NotebookHome";
import Notebook from "../../components/ui/Card/Notebook";
import { listNotebooks } from '../../graphql/queries';
import { createNotebook } from '../../graphql/mutations';

const client = generateClient();

export default function Home() { 
    const [notebooks, setNotebooks] = useState([]);

    useEffect(() => {
    fetchNotebooks();
    }, []);

    const fetchNotebooks = async () => {
    try { 
        const { data } = await client.graphql({ query: listNotebooks }); 
        setNotebooks(data.listNotebooks.items);
    } catch (error) {
        console.error('Error fetching notebooks:', error);
      // エラーハンドリングの処理を追加する
    }
    };

    const handleCreateNotebook = async () => {
        const newNotebook = {
            title: "",
            };
            try {
                const { data } = await client.graphql({
                query: createNotebook,
                variables: { input: newNotebook },
            });
            setNotebooks([...notebooks, data.createNotebook]);
            } catch (error) {
            console.error('Error creating notebook:', error);
            // エラーハンドリングの処理を追加する
            }
        };
        const handleDeleteNotebook = (notebookId) => {
            setNotebooks(notebooks.filter(notebook => notebook.id !== notebookId)); 
        };

    return (
    <main className="flex min-h-screen w-screen flex-col">
        <div className="app"> 
        <NavigationBar onCreateNotebook={handleCreateNotebook} />
        <NotebookHome>
            {notebooks.map(notebook => (
            <Notebook 
            key={notebook.id} 
            notebook={notebook}
            onDeleteNotebook={handleDeleteNotebook} 
            />
            ))}
        </NotebookHome>
        </div>
    </main>
    );
}