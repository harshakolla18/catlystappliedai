import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Slight delay to allow content to render, then retry a few times
            let retries = 0;
            const scroll = () => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (retries < 10) {
                    retries++;
                    setTimeout(scroll, 100);
                }
            };
            setTimeout(scroll, 100);
            return;
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}
