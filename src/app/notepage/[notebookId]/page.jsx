"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { generateClient } from 'aws-amplify/api'; 

import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import ReactFlow, { addEdge, removeEdge, Controls } from 'reactflow'; 
import 'reactflow/dist/style.css';

import NoteNavBar from '../../../components/navi/NoteNavBar'; 
import CardNote from '../../../components/ui/Card/CardNote';
import { getNotebook, listNoteCards } from '../../../graphql/queries';
import { createNoteCard, updateNoteCard } from '../../../graphql/mutations';
import useCardNoteStore from '../../../store/cardNoteStore'; 

const client = generateClient(); 

export default function NotePage({ params }) {
    const { notebookId } = params;
    const router = useRouter(); 
    const [notebook, setNotebook] = useState(null);
    const [noteCards, setNoteCards] = useState([]); 
    const nodes = useCardNoteStore((state) => state.nodes);
    const setNodes = useCardNoteStore((state) => state.setNodes);
    const createCardNote = useCardNoteStore((state) => state.createCardNote);
    const updateCardNotePosition = useCardNoteStore((state) => state.updateCardNotePosition);

    useEffect(() => {
        fetchNotebook();
        fetchNoteCards();
    }, []);

    useEffect(() => {
        setNodes(noteCards.map((noteCard) => ({
            id: noteCard.id,
            position: JSON.parse(noteCard.position),
            data: { noteCard },
            type: 'noteCard',
        })));
    }, [noteCards, setNodes]);


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
        const newPosition = { x: 0, y: 0 };
        const newNoteCard = {
            notebookID: notebookId,
            title: '',
            content: '',
            position: JSON.stringify(newPosition),
        };
        try {
            const { data } = await client.graphql({
                query: createNoteCard,
                variables: { input: newNoteCard },
            });
            const newNode = createCardNote(notebookId, data.createNoteCard.id);
            setNoteCards([...noteCards, data.createNoteCard]);
        } catch (error) {
            console.error('Error creating NoteCard:', error);
        }
    }; 

    const nodeTypes = useMemo(() => ({
        noteCard: (props) => (
            <CardNote
                {...props}
                onEditClick={(noteCardId) => router.push(`/notepage/${notebookId}/edit/${noteCardId}`)}
                onDeleteNoteCard={(noteCardId) => {
                    setNoteCards(noteCards.filter(noteCard => noteCard.id !== noteCardId));
                }}
            />
        ),
    }), [router, notebookId, noteCards]);


const onNodeDragStop = React.useCallback((event, node) => {
    if (node) {
        updateCardNotePosition(node.id, node.position);
    }
}, []);


    return (
        <main className="min-h-screen w-screen">
        <div>
        <NoteNavBar onCreateCardNote={handleCreateNoteCard} />
        </div>
        <div>
            <h1 className='ml-6 mt-4 drop-shadow-lg'>{notebook?.title || 'Untitled'}</h1>
        </div>
        <div style={{ width: '100%', height: '80vh' }}>
            <ReactFlow
            nodes={nodes}
            edges={[]} 
            nodeTypes={nodeTypes}
            onNodeDragStop={onNodeDragStop} 
            fitView
            >
                    <Controls />
        </ReactFlow>
        </div>
        </main>
    );
}