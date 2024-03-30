// src/app/home/notepage/[notebookId]/page.jsx
"use client";
import { useCallback } from 'react';

import NoteNavBar from '../../../../components/navi/NoteNavBar';
import useNotebookStore from '../../../../store/notebookStore';
import useCardNoteStore from '../../../../store/cardNoteStore';
import CardNote from '../../../../components/ui/Card/CardNote';

export default function NotePage({ params }) {
  const { notebookId } = params;
  const notebook = useNotebookStore((state) => state.notebooks.find((notebook) => notebook.id === notebookId));
  const cardNotes = useCardNoteStore((state) => state.cardNotes.filter((cardNote) => cardNote.notebookId === notebookId));
  const createCardNote = useCardNoteStore((state) => state.createCardNote);

  return (
    <main className="min-h-screen w-screen">
      <div>
        <NoteNavBar onCreateCardNote={() => createCardNote(notebookId)} />
      </div>
      <div>
        <h1 className='ml-6 mt-4 drop-shadow-lg'>{notebook?.title || 'Untitled'}</h1>
        <div className="flex flex-wrap">
          {cardNotes.map((cardNote) => (
            <CardNote key={cardNote.id} id={cardNote.id} notebookId={notebookId} />
          ))}
        </div>
      </div>
    </main>
  );
}