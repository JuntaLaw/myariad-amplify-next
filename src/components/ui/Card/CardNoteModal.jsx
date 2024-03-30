// src/components/ui/Card/CardNoteModal.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CardNoteModal = ({ isOpen, onClose, cardNote, onSave }) => {
  const [title, setTitle] = useState(cardNote.title);
  const [content, setContent] = useState(cardNote.content);

  const handleSave = () => {
    onSave(title, content);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal modal-open">
      <div className="modal-box">
        {/* 残りのモーダルコンテンツ */}
      </div>
    </div>,
    document.body
  );
};

export default CardNoteModal;