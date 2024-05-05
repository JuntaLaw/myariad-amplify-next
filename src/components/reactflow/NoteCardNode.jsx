// src/components/reactflow/NoteCardNode.jsx
import React from 'react';
import { Node } from 'react-flow';
import NoteCard from '../../components/ui/Card/NoteCard';

const NoteCardNode = (props) => {
    const { data, onEditClick, onDeleteNoteCard } = props;

    return (
        <Node {...props}>
        <NoteCard
            {...data}
            onEditClick={onEditClick}
            onDeleteNoteCard={onDeleteNoteCard}
        />
        </Node>
    );
};

export default NoteCardNode;