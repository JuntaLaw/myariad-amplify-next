"use client";
import React, { useRef } from 'react';
import { PiX } from "react-icons/pi";
import './Notebook.css';
import OpenButton from '../Button/OpenButton';
import useNotebookStore from '../../../store/notebookStore';

export default function Notebook({ id }) {
    // notebookStoreから必要な関数を取得
    const deleteNotebook = useNotebookStore(state => state.deleteNotebook);
    const updateNotebookTitle = useNotebookStore(state => state.updateNotebookTitle);
    
    // idに基づいてnotebookを取得
    const notebook = useNotebookStore(state => state.notebooks.find(notebook => notebook.id === id));

    // タイトル入力用のrefを作成
    const titleRef = useRef(null);

    // タイトル変更ハンドラ
    const handleTitleChange = (event) => {
        updateNotebookTitle(id, event.target.value);
    };

    return (
        <div
        className="card glass w-72 h-96 shadow-xl relative bg-cover bg-center text-white rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url('/amber-kipp-75715CVEJhI-unsplash.jpg')` }}
        >
        <div className="card-body bg-gradient-to-b from-transparent via-transparent to-black flex flex-col justify-end h-full">
            <div className="absolute top-0 right-0 p-4">
            {/* 削除ボタン */}
            <PiX onClick={() => deleteNotebook(id)} className="text-sm cursor-pointer" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* タイトル入力エリア */}
            <textarea
                ref={titleRef}
                value={notebook?.title || ''}
                onChange={handleTitleChange}
                className="notebook-title-input"
                placeholder="Enter Notebook Title"
                rows="2"
            />
            <div className="card-actions justify-end mt-4">
                {/* OpenButtonにnotebookIdを渡す */}
                <OpenButton notebookId={id} />
            </div>
            </div>
        </div>
        </div>
    );
}