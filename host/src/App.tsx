// import reactLogo from "./assets/react.svg";
import { MyComponent } from './components/MyComponent';
import classes from './App.module.scss';
import { Button } from 'my-lib';
import { useGetPetById } from './hooks/queries/useGetPetById';

export const App = () => {
  const { data: useGetPetByIdResponse } = useGetPetById(1);

  // eslint-disable-next-line no-console
  console.log(useGetPetByIdResponse);
  return (
    <>
      <div>App del host</div>
      <Button />
      <ul className={classes.container}>
        <span>Esto tampoco es un li</span>
        <li className={classes.spanWithText}>Primer span</li>
        <li className={classes.spanWithText}>Segundo span</li>
      </ul>
      <MyComponent />
    </>
  );
};
