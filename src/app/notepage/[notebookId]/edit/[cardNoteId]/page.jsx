"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { generateClient } from 'aws-amplify/api'; 
import React, { useState, useEffect } from 'react'; 
import { useRouter } from 'next/navigation';
import { getNoteCard } from '../../../../../graphql/queries';
import { updateNoteCard } from '../../../../../graphql/mutations'; 
import './editpage.css';

const client = generateClient();

export default function EditCardNotePage({ params }) {
  const { notebookId, cardNoteId } = params;
  const router = useRouter();
  const [noteCard, setNoteCard] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); 

  useEffect(() => {
    fetchNoteCard();
  }, []);

  const fetchNoteCard = async () => {
    try {
      const { data } = await client.graphql({
        query: getNoteCard,
        variables: { id: cardNoteId },
      });
      setNoteCard(data.getNoteCard);
      setTitle(data.getNoteCard.title);
      setContent(data.getNoteCard.content);
    } catch (error) {
      console.error('Error fetching NoteCard:', error);
    }
  };

  const handleSave = async () => {
    try {
      await client.graphql({
        query: updateNoteCard,
        variables: {
          input: {
            id: cardNoteId,
            title,
            content,
          },
        },
      });
      router.push(`/notepage/${notebookId}`); 
    } catch (error) {
      console.error('Error updating NoteCard:', error);
    }
  };

  if (!noteCard) return <div>Loading...</div>;

  return (
    <div className="container mx-auto my-8 edit-note-page">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea textarea-bordered w-full h-48 mb-4"
      />
      <div>
        <button onClick={handleSave} className="btn btn-primary">
          Save
        </button>
        <button
          onClick={() => router.push(`/notepage/${notebookId}`)}
          className="btn btn-ghost ml-4 glass"
        >
          Cancel
        </button> 
      </div>
      <button className="btn btn-secondary mt-4">generate image</button>
    </div>
  );
}