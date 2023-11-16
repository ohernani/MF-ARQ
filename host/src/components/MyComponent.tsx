// import ReactLogo from './assets/react.svg';
import classes from './MyComponent.module.scss';
import Micro1 from 'micro1/Micro1';
// import Micro2 from 'micro2/Micro2';
import { lazy, Suspense } from 'react';
// const Micro2 = lazy(() => import('micro2/Micro2') as any);

const Micro2 = lazy(() =>
  import(`micro2/Micro2`).catch(() => ({ default: () => <div>Not found</div> })),
);

export const MyComponent = () => {
  return (
    <ul className={classes.container}>
      <span>Esto no es un li</span>
      {/* {ReactLogo} */}
      <li className={classes.spanWithText}>Primer span del componente</li>
      <li className={classes.spanWithText}>Segundo span del componente</li>
      <h1>Despues de aqui son Microfrontends</h1>
      <h2>Micro Frontend 1</h2>
      <Micro1 />
      <h2>Micro Frontend 2 que no existe</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Micro2 />
      </Suspense>
    </ul>
  );
};
