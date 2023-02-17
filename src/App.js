import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <footer>
                <p className="left">
                    Subscribe to my{' '}
                    <a href="https://www.youtube.com/c/anisulislamrubel">
                        <FaYoutube className="footer__icon" />
                    </a>{' '}
                    channel
                </p>
                <p className="right">Developed with &hearts; by Anisul Islam</p>
            </footer>
        </div>
    );
};

export default App;
