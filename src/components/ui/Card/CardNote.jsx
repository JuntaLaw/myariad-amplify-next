"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

import useCardNoteStore from '../../../store/cardNoteStore';
import { PiX } from 'react-icons/pi';
import { PiArrowsOutSimple } from "react-icons/pi";
import { PiArrowsInSimple } from "react-icons/pi"; 

export default function CardNote({ id, notebookId }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardNote = useCardNoteStore((state) => state.cardNotes.find((cardNote) => cardNote.id === id));
    const updateCardNoteTitle = useCardNoteStore((state) => state.updateCardNoteTitle);
    const updateCardNoteContent = useCardNoteStore((state) => state.updateCardNoteContent);
    const deleteCardNote = useCardNoteStore((state) => state.deleteCardNote);

    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isExpanded && titleRef.current) {
            titleRef.current.focus();
        }
    }, [isExpanded]);

    if (!cardNote) return null;

    const { setNodes } = useReactFlow();

    useEffect(() => {
      setNodes((nodes) => nodes.map((node) => ({
        ...node,
        style: { pointerEvents: 'auto' },
      })));
    }, [setNodes]);

    return (
      <div 
        className={`card bg-white shadow-md w-[300px] mx-auto my-4 ${isExpanded ? 'h-96' : 'h-32'}`} 
        onDoubleClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsExpanded(!isExpanded);
          }
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <Handle type="target" position={Position.Top} />
        <div className="card-body p-2">
          <div className="card-title flex justify-between items-start mb-1">
            <input
              ref={titleRef}
              value={cardNote.title}
              onChange={(e) => updateCardNoteTitle(id, e.target.value)}
              placeholder="Untitled"
              className="input input-ghost font-bold flex-grow mr-2"
              style={{ pointerEvents: 'auto' }}
            />
            <div className="card-actions flex items-center">
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="btn btn-ghost btn-sm"
                style={{ pointerEvents: 'auto' }}
              >
                {isExpanded ? <PiArrowsInSimple size={16} /> : <PiArrowsOutSimple size={16} />}
              </button>
              <button 
                onClick={() => deleteCardNote(id)} 
                className="btn btn-ghost btn-sm"
                style={{ pointerEvents: 'auto' }}
              >
                <PiX size={16} />
              </button>
            </div>
          </div>
          {isExpanded && (
            <textarea
              ref={contentRef}
              value={cardNote.content}
              onChange={(e) => updateCardNoteContent(id, e.target.value)}
              placeholder="Write your note here..."
              className="textarea textarea-bordered h-64 w-full text-base mt-4"
              style={{ pointerEvents: 'auto' }}
            />
          )}
        </div>
        <Handle type="source" position={Position.Bottom} />
      </div>
    );
}