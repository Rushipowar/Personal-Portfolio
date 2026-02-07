import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="bg-white py-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Rushikesh Nandkumar Powar. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Rushipowar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors"><FiGithub size={20} /></a>
                    <a href="https://www.linkedin.com/in/rushikesh-nandkumar-powar-9848a4259/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors"><FiLinkedin size={20} /></a>
                </div>

                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-2 bg-accent text-white rounded-full shadow-lg hover:bg-accent/80 transition-all duration-300 z-50 animate-bounce"
                        aria-label="Back to top"
                    >
                        <FiArrowUp size={20} />
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;

