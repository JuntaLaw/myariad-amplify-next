"use client";
import { useCallback, useMemo } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

import NoteNavBar from '../../../../components/navi/NoteNavBar';
import useNotebookStore from '../../../../store/notebookStore';
import useCardNoteStore from '../../../../store/cardNoteStore';
import CardNote from '../../../../components/ui/Card/CardNote';

const initialNodes = [];
const initialEdges = [];

const Flow = () => {
    const { notebookId } = params;
    const notebook = useNotebookStore((state) => state.notebooks.find((notebook) => notebook.id === notebookId));
    const cardNotes = useCardNoteStore((state) => state.cardNotes.filter((cardNote) => cardNote.notebookId === notebookId));
    const createCardNote = useCardNoteStore((state) => state.createCardNote);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const reactFlowInstance = useReactFlow();

    const nodeTypes = useMemo(() => ({ cardNote: CardNote }), []);
    const edgeTypes = useMemo(() => ({}), []);

    useEffect(() => {
        setNodes((nodes) => nodes.map((node) => ({
        ...node,
        style: { pointerEvents: 'auto' },
        })));
    }, [setNodes]);

    return (
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        >
        {cardNotes.map((cardNote) => (
            <CardNote key={cardNote.id} id={cardNote.id} notebookId={notebookId} />
        ))}
        </ReactFlow>
    );
    };

    export default function NotePage({ params }) {
    return (
        <main className="min-h-screen w-screen">
        <div>
            <NoteNavBar onCreateCardNote={() => createCardNote(notebookId)} />
        </div>
        <div>
            <h1>{notebook?.title || 'Untitled'}</h1>
            <div style={{ height: '500px', width: '100%' }}>
            <ReactFlowProvider>
                <Flow />
            </ReactFlowProvider>
            </div>
        </div>
        </main>
    );
}