// src/store/cardNoteStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const useCardNoteStore = create(
  persist(
    (set, get) => ({
      cardNotes: [],
      createCardNote: (notebookId) => {
        const cardNoteId = uuidv4();
        const newCardNote = {
          id: cardNoteId,
          notebookId,
          title: '',
          content: '',
        };
        set((state) => ({ cardNotes: [...state.cardNotes, newCardNote] }));
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
    }),
    {
      name: 'cardNote-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCardNoteStore;