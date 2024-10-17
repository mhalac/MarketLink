"use client";
import React, { useEffect, useState } from 'react';

export default function Perfil() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/session');
            const data = await response.json();
            setUser(data.user);
        };

        fetchUser();
    }, []);

    return (

        <div className="z-50 rounded-full bg-red-200">
            <button
                onClick={openMenu}
                className="p-4 text-white rounded-br"
            >
                <div className="w-6 h-1 bg-red-600 shadow-2xl mb-1 rounded"></div>
                <div className="w-6 h-1 bg-red-600 shadow-2xl mb-1 rounded"></div>
                <div className="w-6 h-1 bg-red-600 shadow-2xl rounded"></div>
            </button>
            <div>
                {user ? (
                    <div>
                        <span>Bienvenido, {user}!</span>
                        <button onClick={closeMenu}>Cerrar</button>
                    </div>
                ) : (
                    <span>No estás logueado</span>
                )}
                <button onClick={openMenu}>Abrir Menú</button>
                {isOpen && (
                    <div>
                        <h3>Menú</h3>
                        {/* Agrega aquí las opciones del menú */}
                    </div>
                )}
            </div>
        </div>
    );
}
