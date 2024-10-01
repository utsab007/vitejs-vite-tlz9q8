import { useState } from 'react';
import store from './store';

function App() {
  const { value } = store.getState();

  const [txtvalue, setTxtValue] = useState(value);

  const increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

  store.subscribe(() => {
    const { value } = store.getState();
    console.log(value);
    setTxtValue(value);
  });

  return (
    <>
      <p>Value: {txtvalue}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
