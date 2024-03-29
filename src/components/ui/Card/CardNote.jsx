"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';


import useCardNoteStore from '../../../store/cardNoteStore';
import { PiX } from 'react-icons/pi';
import { PiArrowsOutSimple } from "react-icons/pi";
import { PiArrowsInSimple } from "react-icons/pi";
import './CardNote.css';

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

    return (
        <div className={`card ${isExpanded ? 'expanded' : ''}`} onDoubleClick={() => setIsExpanded(!isExpanded)}>
          <Handle type="target" position={Position.Top} />
          <div className="card-title">
            <input
              ref={titleRef}
              value={cardNote.title}
              onChange={(e) => updateCardNoteTitle(id, e.target.value)}
              placeholder="Untitled"
            />
            <div className="card-actions">
              <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <PiArrowsInSimple /> : <PiArrowsOutSimple />}
              </button>
              <button onClick={() => deleteCardNote(id)}>
                <PiX />
              </button>
            </div>
          </div>
          {isExpanded && (
            <textarea
              ref={contentRef}
              value={cardNote.content}
              onChange={(e) => updateCardNoteContent(id, e.target.value)}
              placeholder="Write your note here..."
            />
          )}
          <Handle type="source" position={Position.Bottom} />
        </div>
      );
    }