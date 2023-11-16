import ReactLogo from './assets/react.svg';
import classes from './MyComponent.module.scss';

export const MyComponent = () => {
  return (
    <>
      <div>MyComponent del Micro1</div>
      <ul className={classes.container}>
        <span>Esto no es un li</span>
        {ReactLogo}
        <li className={classes.spanWithText}>Primer span del componente</li>
        <li className={classes.spanWithText}>Segundo span del componente</li>
      </ul>
    </>
  );
};
