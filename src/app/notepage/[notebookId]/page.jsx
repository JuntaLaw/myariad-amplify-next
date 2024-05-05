
"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { generateClient } from 'aws-amplify/api'; 

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ReactFlow, { applyEdgeChanges, applyNodeChanges, Controls } from 'reactflow';
import 'reactflow/dist/style.css'; 
import NoteNavBar from '../../../components/navi/NoteNavBar'; 
import NoteCard from '../../../components/ui/Card/NoteCard';
import { getNotebook, listNoteCards } from '../../../graphql/queries';
import { createNoteCard } from '../../../graphql/mutations';

const client = generateClient(); 

const nodeTypes = {
    noteCard: (props) => (
      <NoteCard
        {...props}
        onEditClick={(noteCardId) => router.push(`/notepage/${notebookId}/edit/${noteCardId}`)}
      />
    ),
  };

export default function NotePage({ params }) {
    const { notebookId } = params;
    const router = useRouter(); 
    const [notebook, setNotebook] = useState(null);
    const [noteCards, setNoteCards] = useState([]); 
  
    const nodes = noteCards.map((noteCard) => ({
        id: noteCard.id,
        position: noteCard.position || { x: 0, y: 0 },
        data: { noteCard },
        type: 'noteCard',
    }));

    const memoizedNodes = useMemo(() => noteCards.map((noteCard) => ({
        id: noteCard.id,
        position: noteCard.position || { x: 0, y: 0 },
        data: { noteCard },
        type: 'noteCard',
      })), [noteCards]);

    useEffect(() => {
        fetchNotebook();
        fetchNoteCards();
    }, []);

    const fetchNotebook = async () => {
        try {
            const { data } = await client.graphql({
                query: getNotebook,
                variables: { id: notebookId },
            });
            setNotebook(data.getNotebook);
        } catch (error) {
            console.error('Error fetching notebook:', error);
        }
    }; 

    const fetchNoteCards = async () => {
        try {
            const { data } = await client.graphql({
                query: listNoteCards,
                variables: { filter: { notebookID: { eq: notebookId } } },
            });
            setNoteCards(data.listNoteCards.items);
        } catch (error) {
            console.error('Error fetching NoteCards:', error);
        }
    }; 

    const handleCreateNoteCard = async () => {
        const newNoteCard = {
            notebookID: notebookId,
            title: '',
            content: '',
        };
        try {
            const { data } = await client.graphql({
                query: createNoteCard,
                variables: { input: newNoteCard },
            });
            setNoteCards([...noteCards, data.createNoteCard]);
        } catch (error) {
            console.error('Error creating NoteCard:', error);
        }
    };


    return (
        <main className="min-h-screen w-screen">
            <div>
                <NoteNavBar onCreateNoteCard={handleCreateNoteCard} />
            </div>
            <div>
                <h1 className='ml-6 mt-4 drop-shadow-lg'>{notebook?.title}</h1>
            </div>
            <div style={{ width: '100%', height: '80vh' }}>
            <ReactFlow
            nodes={memoizedNodes} // メモ化したノードを渡します
            edges={[]} 
            nodeTypes={nodeTypes} 
            fitView
            > 
                <Controls />
        </ReactFlow>
            </div>
        </main>
    );
}