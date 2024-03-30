// src/components/ui/Card/CardNote.jsx
"use client";
import React, { useState, useRef, useEffect } from 'react';

import useCardNoteStore from '../../../store/cardNoteStore';
import { PiX } from 'react-icons/pi';
import { PiArrowsOutSimple } from "react-icons/pi";
import { PiArrowsInSimple } from "react-icons/pi"; 

export default function CardNote({ id, notebookId }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const cardNote = useCardNoteStore((state) => state.cardNotes.find((cardNote) => cardNote.id === id));
  const updateCardNoteTitle = useCardNoteStore((state) => state.updateCardNoteTitle);
  const updateCardNoteContent = useCardNoteStore((state) => state.updateCardNoteContent);
  const deleteCardNote = useCardNoteStore((state) => state.deleteCardNote);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isEditingTitle && titleRef.current) {
      titleRef.current.focus();
    }
  }, [isEditingTitle]);

  if (!cardNote) return null;

  return (
    <div 
      className={`card bg-white shadow-md w-64 mx-auto my-4 ${isExpanded ? 'h-auto w-96' : 'h-38'}`}
    >
      <div className="card-body p-2">
        <div className="card-title flex justify-start items-start ml-2">
          {isEditingTitle ? (
            <input
              ref={titleRef}
              value={cardNote.title}
              onChange={(e) => updateCardNoteTitle(id, e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              placeholder="Enter title"
              className="input input-ghost w-5/6 font-bold flex-grow mr-2"
            />
          ) : (
            <div onClick={() => setIsEditingTitle(true)} className="font-bold flex-grow">
              {cardNote.title || 'Enter New title'}
            </div>
          )}
          <div className="card-actions flex items-center"> 
            <button onClick={() => deleteCardNote(id)} className="btn btn-ghost btn-sm">
              <PiX size={16} />
            </button>
          </div>
        </div>
        <textarea
          ref={contentRef}
          value={cardNote.content}
          onChange={(e) => updateCardNoteContent(id, e.target.value)}
          onClick={() => !isExpanded && setIsExpanded(true)}
          placeholder="Write your note here..."
          className={`textarea textarea-ghost w-full text-base ${isExpanded ? 'h-64' : 'h-16'}`}
        />
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="btn btn-ghost btn-sm justify-end"
        >
          {isExpanded ? <PiArrowsInSimple size={16} /> : <PiArrowsOutSimple size={16} />}
        </button>
      </div>
    </div>
  );
}