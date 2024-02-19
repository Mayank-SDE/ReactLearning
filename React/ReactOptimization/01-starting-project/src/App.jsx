import { useState, memo } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    setChosenCount((prevState) => {
      return prevState + 2;
    });

    console.log(chosenCount); // wont't work
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;

/*
 React transalates the jsx code into the js code before giving it to browser.

 React executes the code from top to bottom.

 react builds an component tree.

 The relationship between components is build as an tree model behind the scenes.

 if child component re renders it does not make the parent component gets re-rendered 

 Whereas if the parent component gets re-rendered than the child components also gets re-rendered.


 How can we optimize the react application based on re-rendering of react components ?
  -> if you are having an state value which is changing in the components and due to which the components gets re-rendered again but this component also contains some other components which are not related to the state value and neither they use that state value and still getting re-rendered again and thus to avoid this we must find the way to optimize our react components.

  -> Two main possible solution - 

    -> 1. React givees an function that wrap around the function components that will prevent un-neccessary component execution and that function is called as memo() function imported from 'reacr';

    memo will take a look at the props of the component function and if the parent component re-renders then memo function will first compare the value of old props and new props and based on the fact that whether the props value is changed or not . If the props value is not changed then it will not re-render the component. Thus , avoiding the uneccessary re-rendering of the components.

    Do not overuse the memo() function. Because react will then always checks for the props which is not good for performance.

    memo() takes the whole functional component as an parameter.


    -> 2. Clever components compositions - 

      -> Separating components based on ony needed components gets re-rendered. It is the preferred approach.
    

  useCallback hook avoids the re-creation of the function on component re-rendering.

  Just like you avoid the re-execution of functional component using the memo() similarly you can restrict the normal function execution inside the component function using the hook useMemo() unless the input of the function is changing.

  Just like the memo() function wraps the functional components similarly , the useMemo() wraps the normal function which is inside the functional components to avoid re-executions.

  useMemo() should only be used when you want to prevent the complex function execution for the same input which you pass inside the dependency array.

  So the useMemo(()=>{},[]) function will only executes when the dependency changes. Thus you must add the dependency without it ,  it will show error.

  You should not use useMemo() many times it is costly for react to compare values again and again.


  Virtual DOM - 

  -> React uses the virtual DOM behind the scenes. 

  React uses virtual DOM for neccessary updates .

  React creates and compares Virtual DOM snapshot to find out which part of the rendered UI needed to be updated.

  Virtual DOM which lives in the react memory is faster to interact as compared to the interaction with the real DOM.

  Step 1. Initially react creates the component tree and rendered the html code in the browser.

  Step 2. It then creates the virtual DOM snapshot of the target HTML Code.

  Step 3. React compares the old virtual DOM with the current Virtual DOM created by the react for updating the UI.

  Step 4. Initially since there is no html target code so react compares it with the virtual dom created by react and updates the UI i.e the real DOM.

  The scope of state is limited to that functional component which is having it.

  Every functional component has its own isolated state.

  state is also tracked by the position by react


  React tracks the state by the position of the component in the component tree and also the type of the component.

  So it may happen that sam type of component may exchange their position and thus to avoid state mis management react forces you to provide the key prop to the component so that it can maintain state of an component correctly.

  We must provide key with ourselves instead of using the index built in variable so that react wasily differentiates between the dynamic list of components.

  If you will use the built in index variable in key then on updating the state value total list of dynamic component will change and updated

  When the key prop of any component changes then react delete the old previous component and new component is rendered again.


  Million js is an package which make react faster
   
  To install this use this command ->  $ npm install million

  Million js improves the preformance of react appliation by replacing the virtual DOM with the more effiecient mechanism.
  
 */
