import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex flex-col items-center justify-center p-7 w-full gradient-bg max-md:px-5 max-md:max-w-full">
            <h1>
                <Link to="/" className="text-blue-950 drop-shadow font-bold hover:underline">
                    Home
                </Link>
            </h1>
        </header>
    );
}

export default Header;
