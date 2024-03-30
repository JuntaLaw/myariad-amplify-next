"use client";
import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactFlow, { addEdge } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import 'reactflow/dist/style.css';

import NoteNavBar from '../../../../components/navi/NoteNavBar';
import useNotebookStore from '../../../../store/notebookStore';
import useCardNoteStore from '../../../../store/cardNoteStore';
import CardNote from '../../../../components/ui/Card/CardNote';

export default function NotePage({ params }) {
  const { notebookId } = params;
  const router = useRouter();
  const notebook = useNotebookStore((state) => state.notebooks.find((notebook) => notebook.id === notebookId));
  const cardNotes = useCardNoteStore((state) => state.cardNotes.filter((cardNote) => cardNote.notebookId === notebookId));
  const createCardNote = useCardNoteStore((state) => state.createCardNote);
  const updateCardNotePosition = useCardNoteStore((state) => state.updateCardNotePosition);
  const addEdge = useCardNoteStore((state) => state.addEdge);
  const removeEdge = useCardNoteStore((state) => state.removeEdge);
  const persistedEdges = useCardNoteStore((state) => state.edges);

  const nodes = cardNotes.map((cardNote) => ({
    id: cardNote.id,
    position: cardNote.position || { x: 0, y: 0 },
    data: { cardNote },
    type: 'cardNote',
  }));

  const [edges, setEdges, onEdgesChange] = React.useState([]);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge({ ...params, id: uuidv4() }, eds));
    },
    [addEdge, setEdges]
  );

  const onEdgesChangeCallback = useCallback(
    (removedEdges) => {
      removedEdges.forEach((edgeId) => {
        removeEdge(edgeId);
      });
    },
    [removeEdge]
  );

  const nodeTypes = React.useMemo(() => ({
    cardNote: (props) => (
      <CardNote
        {...props}
        onEditClick={(cardNoteId) => router.push(`/home/notepage/${notebookId}/edit/${cardNoteId}`)}
      />
    ),
  }), [router, notebookId]);

  const onNodeDragStop = React.useCallback((event, node) => {
    if (node) {
      updateCardNotePosition(node.id, node.position);
    }
  }, [updateCardNotePosition]);

  useEffect(() => {
    setEdges(persistedEdges);
  }, [persistedEdges, setEdges]);

  return (
    <main className="min-h-screen w-screen">
      <div>
        <NoteNavBar onCreateCardNote={() => createCardNote(notebookId)} />
      </div>
      <div>
        <h1 className='ml-6 mt-4 drop-shadow-lg'>{notebook?.title || 'Untitled'}</h1>
      </div>
      <div style={{ width: '100%', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onEdgesChange={onEdgesChangeCallback}
          nodeTypes={nodeTypes}
          onNodeDragStop={onNodeDragStop}
          fitView
        />
      </div>
    </main>
  );
}