import { useState, useEffect, useRef } from "react";


// Este hook permite saber cuándo un elemento entra o sale del viewport sin necesidad de manejar eventos de scroll manualmente. Es útil para:

// Cargar imágenes perezosamente (lazy loading).
// Animar elementos cuando aparecen en pantalla.
// Mejorar el rendimiento mostrando contenido solo cuando es necesario.

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, [options]);

    return { targetRef, isIntersecting };
};
