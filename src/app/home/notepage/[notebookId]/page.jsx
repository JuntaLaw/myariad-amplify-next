"use client";
import React from 'react';
import ReactFlow, { addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import NoteNavBar from '../../../../components/navi/NoteNavBar';
import useNotebookStore from '../../../../store/notebookStore';
import useCardNoteStore from '../../../../store/cardNoteStore';
import CardNote from '../../../../components/ui/Card/CardNote';

const initialEdges = [];

export default function NotePage({ params }) {
  const { notebookId } = params;
  const notebook = useNotebookStore((state) => state.notebooks.find((notebook) => notebook.id === notebookId));
  const cardNotes = useCardNoteStore((state) => state.cardNotes.filter((cardNote) => cardNote.notebookId === notebookId));
  const createCardNote = useCardNoteStore((state) => state.createCardNote);
  const updateCardNotePosition = useCardNoteStore((state) => state.updateCardNotePosition);

  const nodes = cardNotes.map((cardNote) => ({
    id: cardNote.id,
    position: cardNote.position || { x: 0, y: 0 },
    data: { cardNote },
    type: 'cardNote',
  }));

  const [edges, setEdges] = React.useState(initialEdges);

  const onConnect = React.useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const nodeTypes = React.useMemo(() => ({ cardNote: CardNote }), []);

  const onNodeDragStop = React.useCallback((event, node) => {
    updateCardNotePosition(node.id, node.position);
  }, [updateCardNotePosition]);

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
          nodeTypes={nodeTypes}
          onNodeDragStop={onNodeDragStop}
          fitView
        />
      </div>
    </main>
  );
}