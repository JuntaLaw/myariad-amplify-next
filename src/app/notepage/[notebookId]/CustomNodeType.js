// CustomNodeType.js

import React from 'react';
import NoteCard from '../../../components/ui/Card/NoteCard'; // NoteCardコンポーネントのimport

const CustomNodeType = ({ data }) => {
  const { noteCard } = data; // data.noteCardからNoteCardデータを取得
  return (
    <div className="custom-node-type">
      <NoteCard {...noteCard} /> 
      {/* NoteCardコンポーネントにnoteCardデータをpropsとして渡す */}
      {/* 追加のコンテンツや機能をここに追加できます */}
    </div>
  );
};

export default CustomNodeType;