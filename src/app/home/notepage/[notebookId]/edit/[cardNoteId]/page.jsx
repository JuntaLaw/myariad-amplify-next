"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useCardNoteStore from '../../../../../../store/cardNoteStore'; 
import './editpage.css';

export default function EditCardNotePage({ params }) {
  const { notebookId, cardNoteId } = params;
  const router = useRouter();
  const cardNote = useCardNoteStore((state) =>
    state.cardNotes.find((note) => note.id === cardNoteId)
  );
  const updateCardNoteTitle = useCardNoteStore((state) => state.updateCardNoteTitle);
  const updateCardNoteContent = useCardNoteStore((state) => state.updateCardNoteContent);
  const [title, setTitle] = useState(cardNote?.title || '');
  const [content, setContent] = useState(cardNote?.content || '');

  const handleSave = () => {
    updateCardNoteTitle(cardNoteId, title);
    updateCardNoteContent(cardNoteId, content);
    router.push(`/home/notepage/${notebookId}`);
  };

  return (
    <div className="container mx-auto my-8  edit-note-page">
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
          onClick={() => router.push(`/home/notepage/${notebookId}`)}
          className="btn btn-ghost ml-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}