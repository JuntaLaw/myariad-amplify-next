"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

import { generateClient } from 'aws-amplify/api'; 
import React from 'react';
import { Handle, Position } from 'reactflow';
import { updateNoteCard, deleteNoteCard } from '../../../graphql/mutations';
import { PiX, PiPencil } from 'react-icons/pi'; 

const client = generateClient();

export default function CardNote({ id, data, onEditClick, onDeleteNoteCard }) {
  const cardNote = data.cardNote; 

  if (!cardNote) return null;

  const handleDeleteNoteCard = async () => {
    try {
        await client.graphql({
            query: deleteNoteCard,
            variables: { input: { id: noteCard.id } },
        });
        onDeleteNoteCard(noteCard.id);
    } catch (error) {
        console.error('Error deleting NoteCard:', error);
    }
};

  return (
    <div className="card bg-white shadow-md w-64 mx-2 my-2 h-auto"> 
      {/* <Handle type="target" position={Position.Top} /> */}
      <div className="card-body p-2">
        <div className="card-title flex justify-between items-center ml-2 w-full">
          <div className="font-bold flex-grow">{noteCard.title || 'Enter New title'}</div>
          <div className="card-actions flex flex-row items-center">
            <button onClick={() => onEditClick(noteCard.id)} className="btn btn-ghost btn-sm">
              <PiPencil size={16} />
            </button>
            <button onClick={handleDeleteNoteCard} className="btn btn-ghost btn-sm">
              <PiX size={16} />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 pl-2 mb-2">{noteCard.content}</p> 
      </div> 
    </div>
  );
}