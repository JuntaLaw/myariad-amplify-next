// src/store/cardNoteStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const useCardNoteStore = create(
  persist(
    (set, get) => ({
      cardNotes: [],
      expandedCardNoteIds: [], // 新しい状態を追加
      nodes: [], // 新しい状態
      edges: [], // エッジの状態を追加 
      
      createCardNote: (notebookId) => {
        const cardNoteId = uuidv4();
        const lastCardNote = get().cardNotes.slice(-1)[0];
        const newPosition = lastCardNote ? { x: lastCardNote.position.x + 100, y: lastCardNote.position.y + 100 } : { x: 0, y: 0 };
        const newCardNote = {
          id: cardNoteId,
          notebookId,
          title: '',
          content: '',
          position: newPosition, // 新しい位置を設定
        };
        set((state) => ({
          cardNotes: [...state.cardNotes, newCardNote],
          nodes: [
            ...state.nodes,
            {
              id: cardNoteId,
              position: newPosition,
              data: { cardNote: newCardNote },
              type: 'cardNote',
            },
          ],
        }));
      }, 
      updateCardNoteTitle: (id, title) => {
        set((state) => ({
          cardNotes: state.cardNotes.map((cardNote) => (cardNote.id === id ? { ...cardNote, title } : cardNote)),
        }));
      },

      updateCardNoteContent: (id, content) => {
        set((state) => ({
          cardNotes: state.cardNotes.map((cardNote) => (cardNote.id === id ? { ...cardNote, content } : cardNote)),
        }));
      },

      deleteCardNote: (id) => {
        set((state) => ({ cardNotes: state.cardNotes.filter((cardNote) => cardNote.id !== id) }));
      },
      updateCardNotePosition: (id, position) => {
        set((state) => ({
          cardNotes: state.cardNotes.map((cardNote) =>
            cardNote.id === id ? { ...cardNote, position: position || { x: 0, y: 0 } } : cardNote
          ),
          nodes: state.nodes.map((node) =>
            node.id === id ? { ...node, position: position || { x: 0, y: 0 } } : node
          ),
        }));
      },
      // 新しい関数を追加
      toggleCardNoteExpanded: (cardNoteId) => {
        set((state) => ({
          expandedCardNoteIds: state.expandedCardNoteIds.includes(cardNoteId)
            ? state.expandedCardNoteIds.filter((id) => id !== cardNoteId)
            : [...state.expandedCardNoteIds, cardNoteId],
        }));
      },

      // 新しい関数を追加
      setNodes: (setNodes) => {
        const cardNotes = get().cardNotes;
        const newNodes = cardNotes.map((cardNote) => ({
          id: cardNote.id,
          position: cardNote.position || { x: 0, y: 0 },
          data: { cardNote },
          type: 'cardNote',
        }));
        setNodes(newNodes);
      },

      // addEdge: (edge) => {
      //   set((state) => ({ edges: [...state.edges, edge] }));
      // },
      // removeEdge: (edgeId) => {
      //   set((state) => ({ edges: state.edges.filter((edge) => edge.id !== edgeId) }));
      // }, 


    }),
    {
      name: 'cardNote-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCardNoteStore;