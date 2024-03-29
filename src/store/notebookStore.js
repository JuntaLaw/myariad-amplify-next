import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid'; 

const useNotebookStore = create(
        persist(
        (set, get) => ({
            // ノートブックの配列を初期化
            notebooks: [],
    
            // 新しいノートブックを作成する関数
            createNotebook: () => {
            const notebookId = uuidv4();
            const newNotebook = {
                id: notebookId,
                title: '',
            };
            set(state => ({ notebooks: [...state.notebooks, newNotebook] }));
            },
    
            // ノートブックを削除する関数
            deleteNotebook: (id) => {
            set(state => ({ notebooks: state.notebooks.filter(notebook => notebook.id !== id) }));
            },
    
            // ノートブックのタイトルを更新する関数
            updateNotebookTitle: (id, title) => {
            set(state => ({
                notebooks: state.notebooks.map(notebook =>
                notebook.id === id ? { ...notebook, title } : notebook
                ),
            }));
            },
    
            // ノートブックの配列を設定する関数
            setNotebooks: (notebooks) => {
            set({ notebooks });
            },
        }),
        {
            name: 'notebook-storage',
            storage: createJSONStorage(() => localStorage),
        }
        )
    );

export default useNotebookStore;