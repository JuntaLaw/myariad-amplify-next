//src/components/ui/Card/NoteCard.jsx 
"use client"; 
import React from 'react'; 
import { PiX, PiPencil } from 'react-icons/pi'; 

export default function NoteCard({ id, data, onEditClick, onDeleteNoteCard, draggable = true }) {
  const noteCard = data.noteCard; 

  if (!noteCard) return null; 

  return (
    <div className="card bg-white shadow-md w-64 mx-2 my-2 h-auto">
      <div className="card-body p-2">
        <div className="card-title flex justify-between items-center ml-2 w-full">
          <div className="font-bold flex-grow">{noteCard.title || 'to edit, Click Pencil'}</div>
          <div className="card-actions flex flex-row items-center">
            <button onClick={() => onEditClick(noteCard.id)} className="btn btn-ghost btn-sm">
              <PiPencil size={16} />
            </button>
            <button onClick={() => onDeleteNoteCard(noteCard.id)} className="btn btn-ghost btn-sm">
              <PiX size={16} />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 pl-2 mb-2">{noteCard.content}</p>
      </div>
    </div>
  );
}