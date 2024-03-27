import React from 'react';
import Link from "next/link";
import { PiTrash } from 'react-icons/pi'; 

export default function TrashButton() {
    return (
        <div className='btn my-2 w-30 flex flex-row justify-start items-center'>
            <PiTrash size={25} className='' />
            <p className='m-2'>ゴミ箱</p>
        </div>
    );
}
