import React, { useEffect } from 'react';

function RevealScroll({ children }) {
    useEffect(() => {
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');

            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }

        window.addEventListener('scroll', reveal);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);

    return (
        <div>
            <>{children}</>
        </div>
    );
}

export default RevealScroll;
