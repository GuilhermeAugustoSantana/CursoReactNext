import React, { Suspense, useState } from 'react';
import './styles.css';

const loadComponent = () => import('./lazy-component');

const LazyComponent = React.lazy(loadComponent);

export const HomeCodeSlitting = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'LC on screen' : 'LC is off screen'}
        </button>
      </p>

      <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
