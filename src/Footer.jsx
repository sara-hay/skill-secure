import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-8 w-full gradient-bg max-md:px-5 max-md:max-w-full">
            <Link
                to="https://github.com/sara-hay/course-recommender"
                className="drop-shadow font-bold hover:underline">
                Github repo
            </Link>
        </footer>
    );
}

export default Footer;