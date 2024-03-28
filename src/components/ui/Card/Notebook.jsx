// src/components/ui/Card/Notebook.jsx
import React, { useState, useEffect, useRef } from 'react'; 
import { v4 as uuidv4 } from 'uuid'; // uuidをインポート
import { PiX } from "react-icons/pi"; 
import './Notebook.css'; 
import OpenButton from '../Button/OpenButton'; // OpenButton コンポーネントをインポート 

export default function Notebook({id, onDelete}) {

        // タイトルの状態を管理するためのuseStateフック
        const [title, setTitle] = useState('');
        const titleRef = useRef(null); // テキストエリアへの参照を作成
        const [inputId, setInputId] = useState(''); // 一意のIDを保持するためのstate

        useEffect(() => {
            setInputId(`notebook-title-${uuidv4()}`); // コンポーネントのマウント時に一意のIDを生成
            // コンポーネントがマウントされた後にテキストエリアのスクロール位置を設定
            if (titleRef.current) {
                titleRef.current.scrollTop = 0; // スクロール位置を上端に設定
            }
        }, []); // 空の依存配列を渡して、マウント時にのみ実行されるようにする 

        // タイトルが変更されたときに呼ばれる関数
        const handleTitleChange = (event) => {
            setTitle(event.target.value);
        };
    
    return (
        <div
            className="card glass w-72 h-96 shadow-xl relative bg-cover bg-center text-white rounded-b-xl overflow-hidden"
            style={{ backgroundImage: `url('/amber-kipp-75715CVEJhI-unsplash.jpg')` }}
        >
            <div className="card-body bg-gradient-to-b from-transparent via-transparent to-black flex flex-col justify-end h-full">

                <div className="absolute top-0 right-0 p-4">
                    {/* PiXアイコンにonDeleteイベントを接続 */}
                    <PiX onClick={() => onDelete(id)} className="text-sm cursor-pointer" />
                </div> 

                    {/* Notebookの内容 */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    {/* タイトルを編集可能にする */} 
                    <textarea
                        id={inputId} // 生成した一意のIDを使用
                        ref={titleRef}
                        value={title}
                        onChange={handleTitleChange}
                        className="notebook-title-input"
                        placeholder="Enter Notebook Title"
                        rows="2"
                    />
                    {/* <h2 className="card-title">Notebook title</h2>  */}
                    <div className="card-actions justify-end mt-4">

                        <OpenButton openNotePage={() => {}} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
