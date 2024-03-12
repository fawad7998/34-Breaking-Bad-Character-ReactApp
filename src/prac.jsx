import React, { useState } from 'react';
import array from "./arr.js";

const ImageComponent = ({ imageUrl, imageTitle, imageDescription, role, occupation }) => {
    return (
        <div className="relative">
            <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg relative">
                <img
                    src={imageUrl}
                    alt={imageTitle}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:rotate-12"
                />
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 rounded-lg">
                <div className="text-white text-center">
                    <h3 className="text-lg font-semibold">{imageTitle}</h3>
                    <h3 className="text-lg font-semibold">{role}</h3>
                    <p className="text-sm">{occupation}</p>
                    <p className="text-sm">{imageDescription}</p>
                </div>
            </div>
        </div>
    );
};

const Prac = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const arr = array.filter((data) => {
        return data.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-200">
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {arr.map((data, index) => (
                    <ImageComponent
                        key={index}
                        imageUrl={data.image}
                        imageTitle={data.name}
                        imageDescription={data.description}
                        role={data.role}
                        occupation={data.occupation}
                    />
                ))}
            </div>
        </div>
    );
};

export default Prac;
