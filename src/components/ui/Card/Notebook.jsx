"use client";
import { Amplify } from "aws-amplify"; 
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true }); 

import { generateClient } from 'aws-amplify/api'; 
import React, { useRef, useState } from 'react';
import { PiX } from "react-icons/pi"; 
import OpenButton from '../Button/OpenButton'; 
import { updateNotebook, deleteNotebook } from '../../../graphql/mutations'

const client = generateClient();

export default function Notebook({ notebook, onDeleteNotebook }) {
    const [title, setTitle] = useState(notebook.title || '');
    const titleRef = useRef(null);
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        };
    
    const handleTitleBlur = async () => {
        if (title !== notebook.title) {
            const updatedNotebook = {
            id: notebook.id,
            title: title,
            };
            await client.graphql({
            query: updateNotebook,
            variables: { input: updatedNotebook },
            });
        }
        };

        const handleDeleteNotebook = async () => {
        await client.graphql({
            query: deleteNotebook,
            variables: { input: { id: notebook.id } },
        });
        onDeleteNotebook(notebook.id);
        };

    return (
        <div
        className="card glass w-72 h-96 shadow-xl relative bg-cover bg-center text-white rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url('/amber-kipp-75715CVEJhI-unsplash.jpg')`, pointerEvents: 'auto', cursor: 'auto'}}
        >
        <div className="card-body bg-gradient-to-b from-transparent via-transparent to-black flex flex-col justify-end h-full">
            <div className="absolute top-0 right-0 p-4">
            {/* 削除ボタン */}
            <PiX onClick={handleDeleteNotebook} className="text-sm cursor-pointer" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* タイトル入力エリア */}
            <textarea
                ref={titleRef}
                value={title}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
                className="textarea textarea-ghost w-full text-xl font-bold border-none resize-none placeholder-zinc-300"
                placeholder="Enter Notebook Title"
                rows="2"
            />
            <div className="card-actions justify-end mt-4">
                {/* OpenButtonにnotebookIdを渡す */}
                <OpenButton notebookId={notebook.id} />
            </div>
            </div>
        </div>
        </div>
    );
}