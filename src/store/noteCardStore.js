// src/store/NoteCardStore.js

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { fetchNotes, createNote, updateNote, deleteNote } from '../graphql/API';

const useCardNoteStore = create(
  persist(
    (set, get) => ({
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