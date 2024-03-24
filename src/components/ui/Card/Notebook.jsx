import React from 'react';
import { FaPaw } from 'react-icons/fa';

const Notebook = () => {
    return (
        <div
            className="card glass w-60 h-96 shadow-xl relative bg-cover bg-center text-white rounded-b-xl overflow-hidden"
            style={{ backgroundImage: `url('/amber-kipp-75715CVEJhI-unsplash.jpg')` }}
        >
            <div className="card-body bg-gradient-to-b from-transparent via-transparent to-black flex flex-col justify-end h-full">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="card-title">Notebook title</h2>
                    <p>Notebook Text</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">
                            <FaPaw className="mr-2" />
                            <span>OPEN</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notebook;