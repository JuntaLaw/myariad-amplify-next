// src/store/NoteCardStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; 

const useNoteCardStore = create(
  persist(
    (set, get) => ({ 
      expandedNoteCardIds: [], // 新しい状態を追加 
      nodes: [], // 新しい状態
      edges: [], // エッジの状態を追加 
      
      createNoteCard: (notebookId, NoteCardId) => {
        const lastNode = get().nodes.slice(-1)[0];
        const newPosition = lastNode ? { x: lastNode.position.x + 100, y: lastNode.position.y + 100 } : { x: 0, y: 0 };
        const newNode = {
          id: NoteCardId,
          position: newPosition,
          data: { noteCard: { id: NoteCardId, notebookId, title: '', content: '' } },
          type: 'noteCard',
        };
        set((state) => ({
          nodes: [...state.nodes, newNode],
        }));
        return newNode;
      }, 


      updateNoteCardPosition: (id, position) => {
        set((state) => ({
          nodes: state.nodes.map((node) =>
            node.id === id ? { ...node, position: position || { x: 0, y: 0 } } : node
          ),
        }));
      },

      toggleNoteCardExpanded: (NoteCardId) => {
        set((state) => ({
          expandedNoteCardIds: state.expandedNoteCardIds.includes(NoteCardId)
            ? state.expandedNoteCardIds.filter((id) => id !== NoteCardId)
            : [...state.expandedNoteCardIds, NoteCardId],
        }));
      },

      setNodes: (nodes) => {
        set({ nodes });
      },

      addEdge: (edge) => {
        set((state) => ({ edges: [...state.edges, edge] }));
      },

      removeEdge: (edgeId) => {
        set((state) => ({ edges: state.edges.filter((edge) => edge.id !== edgeId) }));
      },
    }),
    {
      name: 'NoteCard-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useNoteCardStore;