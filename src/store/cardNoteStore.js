// src/store/cardNoteStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; 

const useCardNoteStore = create(
  persist(
    (set, get) => ({ 
      expandedCardNoteIds: [], // 新しい状態を追加
      nodes: [], // 新しい状態
      edges: [], // エッジの状態を追加 
      
      createCardNote: (notebookId, cardNoteId) => {
        const lastNode = get().nodes.slice(-1)[0];
        const newPosition = lastNode ? { x: lastNode.position.x + 100, y: lastNode.position.y + 100 } : { x: 0, y: 0 };
        const newNode = {
          id: cardNoteId,
          position: newPosition,
          data: { noteCard: { id: cardNoteId, notebookId, title: '', content: '' } },
          type: 'noteCard',
        };
        set((state) => ({
          nodes: [...state.nodes, newNode],
        }));
        return newNode;
      }, 


      updateCardNotePosition: (id, position) => {
        set((state) => ({
          nodes: state.nodes.map((node) =>
            node.id === id ? { ...node, position: position || { x: 0, y: 0 } } : node
          ),
        }));
      },

      toggleCardNoteExpanded: (cardNoteId) => {
        set((state) => ({
          expandedCardNoteIds: state.expandedCardNoteIds.includes(cardNoteId)
            ? state.expandedCardNoteIds.filter((id) => id !== cardNoteId)
            : [...state.expandedCardNoteIds, cardNoteId],
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
      name: 'cardNote-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCardNoteStore;