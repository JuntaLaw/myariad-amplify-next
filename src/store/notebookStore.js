import { create } from 'zustand'; 
// import { fetchNotebooks, createNotebook, updateNotebook, deleteNotebook } from '../graphql/API';

const useNotebookStore = create((set, get) => ({
        notebooks: [],

        fetchNotebooks: async () => {
            const notebooks = await fetchNotebooks();
            set({ notebooks });
        },

        createNotebook: async (title) => {
            const newNotebook = await createNotebook(title);
            set(state => ({ notebooks: [...state.notebooks, newNotebook] }));
        },

        updateNotebookTitle: async (id, title) => {
            await updateNotebook(id, { title });
            set(state => ({
            notebooks: state.notebooks.map(notebook =>
                notebook.id === id ? { ...notebook, title } : notebook
            ),
            }));
        },

        deleteNotebook: async (id) => {
            await deleteNotebook(id);
            set(state => ({ notebooks: state.notebooks.filter(notebook => notebook.id !== id) }));
        },
        }), 
); 

export default useNotebookStore;