import ReactLogo from './assets/react.svg';
import { useEffect, useState } from 'react';
import classes from './MyComponent.module.scss';

export const MyComponent = () => {
  const [estado, setEstado] = useState<number>();
  const [test, setTest] = useState<number>();

  useEffect(() => {
    if (estado) {
      setTest(1234);
    }
  }, []);

  return (
    <ul className={classes.container}>
      <span>Esto no es un li</span>
      {ReactLogo}
      <li className={classes.spanWithText} onClick={() => setEstado(1234)}>
        Primer span del componente
      </li>
      <li className={classes.spanWithText}>Segundo span del componente {test}</li>
    </ul>
  );
};
