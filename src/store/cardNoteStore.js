// src/store/cardNoteStore.js
import { create } from 'zustand'; 
// import { fetchNotes, createNote, updateNote, deleteNote } from '../graphql/API';


const useCardNoteStore = create((set, get) => ({
  cardNotes: [],
  expandedCardNoteIds: [],
  nodes: [],
  edges: [], 
  
      fetchNotes: async (notebookId) => {
        const notes = await fetchNotes(notebookId);
        set({ cardNotes: notes });
      },

      createCardNote: async (notebookId, title, content, position) => {
        const newNote = await createNote(notebookId, title, content, position);
        set((state) => ({
          cardNotes: [...state.cardNotes, newNote],
          nodes: [
            ...state.nodes,
            {
              id: newNote.id,
              position: newNote.position,
              data: { cardNote: newNote },
              type: 'cardNote',
            },
          ],
        }));
      },

      updateCardNoteTitle: async (id, title) => {
        await updateNote(id, { title });
        set((state) => ({
          cardNotes: state.cardNotes.map((cardNote) => (cardNote.id === id ? { ...cardNote, title } : cardNote)),
        }));
      },

      updateCardNoteContent: async (id, content) => {
        await updateNote(id, { content });
        set((state) => ({
          cardNotes: state.cardNotes.map((cardNote) => (cardNote.id === id ? { ...cardNote, content } : cardNote)),
        }));
      },

      deleteCardNote: async (id) => {
        await deleteNote(id);
        set((state) => ({ cardNotes: state.cardNotes.filter((cardNote) => cardNote.id !== id) }));
      },

      updateCardNotePosition: async (id, position) => {
        await updateNote(id, { position });
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

    }),

  )

export default useCardNoteStore;