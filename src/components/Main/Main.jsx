import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Main = () => {
  return (
<main>
    <section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </section>
</main>
  );
};