// src/components/ui/Card/CardNote.jsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

import useCardNoteStore from '../../../store/cardNoteStore';
import { PiX } from 'react-icons/pi';
import { PiArrowsOutSimple } from "react-icons/pi";
import { PiArrowsInSimple } from "react-icons/pi"; 

export default function CardNote({ id, data }) {
  const cardNote = data.cardNote;
  const updateCardNoteTitle = useCardNoteStore((state) => state.updateCardNoteTitle);
  const updateCardNoteContent = useCardNoteStore((state) => state.updateCardNoteContent);
  const deleteCardNote = useCardNoteStore((state) => state.deleteCardNote);
  const isExpanded = useCardNoteStore((state) => state.expandedCardNoteIds.includes(id)); // isExpandedの状態を取得
  const toggleCardNoteExpanded = useCardNoteStore((state) => state.toggleCardNoteExpanded); // toggleCardNoteExpandedを取得

  const [isEditingTitle, setIsEditingTitle] = useState(false);

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
      className={`card bg-white shadow-md w-64 mx-2 my-2 ${isExpanded ? 'h-auto w-96' : 'h-38'}`}
    >
      <Handle type="target" position={Position.Top} />
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
          onClick={() => !isExpanded && toggleCardNoteExpanded(id)} // クリックしたら状態を更新
          placeholder="Write your note here..."
          className={`textarea textarea-ghost w-full text-base ${isExpanded ? 'h-64' : 'h-16'}`}
        />
        <button 
          onClick={() => toggleCardNoteExpanded(id)} // クリックしたら状態を更新
          className="btn btn-ghost btn-sm justify-end"
        >
          {isExpanded ? <PiArrowsInSimple size={16} /> : <PiArrowsOutSimple size={16} />}
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}