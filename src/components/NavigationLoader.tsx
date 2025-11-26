'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Spinner } from './ui/spinner';
import '@/styles/NavigationLoader.css';

/**
 * Componente que muestra un spinner de carga durante las transiciones de navegación.
 */
export default function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detectar clics en todos los links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link) {
        const href = link.getAttribute('href');
        const isExternal = href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:') || href?.startsWith('#');
        const isSamePage = href === pathname;
        
        // Solo mostrar spinner para links internos que cambian de página
        if (href && !isExternal && !isSamePage) {
          setLoading(true);
          
          // Limpiar timeout anterior si existe
          if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick, true);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [pathname]);

  // Ocultar spinner cuando el pathname cambia (navegación completada)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      
      // Ocultar spinner después de un breve delay para permitir que la página se renderice
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      
      loadingTimeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 300);
    }

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [pathname, loading]);

  if (!loading) return null;

  return (
    <div className="navigation-loader">
      <div className="navigation-loader__spinner">
        <Spinner size="size-12" color="#ff6b35" />
      </div>
    </div>
  );
}

