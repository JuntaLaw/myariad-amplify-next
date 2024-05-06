 //src/app/notepage/[notebookId]/page.jsx
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
import { createNoteCard, deleteNoteCard } from '../../../graphql/mutations';

import useNodePositionStore from '../../../store/nodePositionStore';

const client = generateClient(); 

export default function NotePage({ params }) {
    const { notebookId } = params;
    const router = useRouter(); 
    const [notebook, setNotebook] = useState(null);
    const [noteCards, setNoteCards] = useState([]); 

    const nodePositions = useNodePositionStore((state) => state.nodePositions);
    const setNodePosition = useNodePositionStore((state) => state.setNodePosition); 

    const onNodeDragStop = useCallback((event, node) => {
        setNodePosition(node.id, node.position);
    }, [setNodePosition]); 

    const nodes = useMemo(() => noteCards.map((noteCard) => ({
        id: noteCard.id,
        position: nodePositions[noteCard.id] || { x: 0, y: 0 },
        data: { noteCard },
        type: 'noteCard',
    })), [noteCards, nodePositions]); 

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

    const handleDeleteNoteCard = async (noteCardId) => {
        try {
            await client.graphql({
                query: deleteNoteCard,
                variables: { input: { id: noteCardId } },
            });
            setNoteCards(noteCards.filter(noteCard => noteCard.id !== noteCardId));
            } catch (error) {
            console.error('Error deleting NoteCard:', error);
            }
        }; 
        
    const nodeTypes = useMemo(() => ({
        noteCard: (props) => (
            <NoteCard
            {...props}
            onEditClick={(noteCardId) => router.push(`/notepage/${notebookId}/edit/${noteCardId}`)}
            onDeleteNoteCard={handleDeleteNoteCard}
            />
        ),
    }), [router, handleDeleteNoteCard]);

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
            nodes={nodes} 
            edges={[]} 
            nodeTypes={nodeTypes} 
            fitView
            nodesConnectable={true}
            nodesDraggable={true}
            > 
            <Controls />
            </ReactFlow>
            </div>
        </main>
    );
}