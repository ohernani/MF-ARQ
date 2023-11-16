// import reactLogo from "./assets/react.svg";
import { MyComponent } from './MyComponent';
import classes from './App.module.scss';

const App = () => {
  return (
    <>
      <div>App del Micro1</div>
      <ul className={classes.container}>
        <span>Esto tampoco es un li</span>
        <li className={classes.spanWithText}>Primer span</li>
        <li className={classes.spanWithText}>Segundo span</li>
      </ul>
      <MyComponent />
    </>
  );
};

export default App;
