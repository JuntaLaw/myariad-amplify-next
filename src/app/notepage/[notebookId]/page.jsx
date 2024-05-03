"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { generateClient } from 'aws-amplify/api'; 
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import ReactFlow, { addEdge, removeEdge, Controls } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import 'reactflow/dist/style.css';

import NoteNavBar from '../../../components/navi/NoteNavBar'; 
import useCardNoteStore from '../../../store/cardNoteStore';
import CardNote from '../../../components/ui/Card/CardNote';
import { getNotebook } from '../../../graphql/queries';

const client = generateClient();



export default function NotePage({ params }) {
    const { notebookId } = params;
    const router = useRouter();
    const [notebook, setNotebook] = useState(null);
    const cardNotes = useCardNoteStore((state) => state.cardNotes.filter((cardNote) => cardNote.notebookId === notebookId));
    const createCardNote = useCardNoteStore((state) => state.createCardNote);
    const updateCardNotePosition = useCardNoteStore((state) => state.updateCardNotePosition);

    useEffect(() => {
        fetchNotebook();
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


    const nodes = cardNotes.map((cardNote) => ({
        id: cardNote.id,
        position: cardNote.position || { x: 0, y: 0 },
        data: { cardNote },
        type: 'cardNote',
    })); 

    const nodeTypes = useMemo(() => ({
        cardNote: (props) => (
        <CardNote
            {...props}
            onEditClick={(cardNoteId) => router.push(`/notepage/${notebookId}/edit/${cardNoteId}`)}
        />
        ),
    }), [router, notebookId]); 
    
    const onNodeDragStop = useCallback((event, node) => {
        if (node) {
        updateCardNotePosition(node.id, node.position);
        }
    }, [updateCardNotePosition]);


    return (
        <main className="min-h-screen w-screen">
        <div>
            <NoteNavBar onCreateCardNote={() => createCardNote(notebookId)} />
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