"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { generateClient } from 'aws-amplify/api'; 

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import NoteNavBar from '../../../components/navi/NoteNavBar'; 
import NoteCard from '../../../components/ui/Card/NoteCard';
import { getNotebook, listNoteCards } from '../../../graphql/queries';
import { createNoteCard } from '../../../graphql/mutations';

const client = generateClient(); 

export default function NotePage({ params }) {
    const { notebookId } = params;
    const router = useRouter(); 
    const [notebook, setNotebook] = useState(null);
    const [noteCards, setNoteCards] = useState([]); 

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
            <div className="grid grid-cols-4 gap-4 p-4">
                {noteCards.map((noteCard) => (
                    <NoteCard 
                        key={noteCard.id}
                        id={noteCard.id}
                        data={{ noteCard }}
                        onEditClick={(noteCardId) => router.push(`/notepage/${notebookId}/edit/${noteCardId}`)}
                        onDeleteNoteCard={(noteCardId) => setNoteCards(noteCards.filter((card) => card.id !== noteCardId))}
                    />
                ))}
            </div>
        </main>
    );
}