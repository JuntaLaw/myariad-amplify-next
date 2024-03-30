"use client";
import React from 'react';
import { Handle, Position } from 'reactflow';
import useCardNoteStore from '../../../store/cardNoteStore';
import { PiX, PiPencil } from 'react-icons/pi'; 
// import './CardNote.css';

export default function CardNote({ id, data, onEditClick }) {
  const cardNote = data.cardNote;
  const updateCardNoteTitle = useCardNoteStore((state) => state.updateCardNoteTitle);
  const deleteCardNote = useCardNoteStore((state) => state.deleteCardNote);

  if (!cardNote) return null;

  return (
    <div className="card bg-white shadow-md w-64 mx-2 my-2 h-auto"> {/* ここを変更 */}
      <Handle type="target" position={Position.Top} />
      <div className="card-body p-2">
        <div className="card-title flex justify-between items-center ml-2 w-full">
          <div className="font-bold flex-grow">{cardNote.title || 'Enter New title'}</div>
          <div className="card-actions flex flex-row items-center">
            <button onClick={() => onEditClick(cardNote.id)} className="btn btn-ghost btn-sm">
              <PiPencil size={16} />
            </button>
            <button onClick={() => deleteCardNote(id)} className="btn btn-ghost btn-sm">
              <PiX size={16} />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-2">{cardNote.content}</p> {/* この行を追加 */}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}