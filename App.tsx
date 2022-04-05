import * as React from 'react';
import ChildComp from './ChildComp';
import { SumOfNumber } from './func';

const App = () => {
  return (
    <div>
      <h2>Typescript JsDoc reference</h2>
      <ChildComp>
        <div>JsDoc types</div>
      </ChildComp>

      <h3>Sum of the number : {SumOfNumber(10, 12)}</h3>
    </div>
  );
};

export default App;
