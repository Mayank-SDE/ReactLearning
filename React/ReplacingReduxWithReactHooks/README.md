May be you do not want to use the redux i.e extra library of react. ex - react-redux and redux.

redux is used for managing the state globally.

For creating the context we import React from 'react' and then

export const RandomContext=React.createContext({
products:[]
});

Now on the same we will be creating the state where we will define the data for that state.

const [productList,setProductList] = useState({
initialValueOf the state you want to manage.
});

return <RandomContext.Provider value={productList}>{children}</RandomContext.Provider>

Now we can have this state throughout the project.

Now we can import the default directly in our index.js file via

import ProductsProvider from './context/prducts-context';

And where ever we will be wrapping this component all the child component will have access to our state data.

We are exporting two objects one the default ProductsProvider component function and other the ProductContext which we will pass to the useContext() hook so that we can have access to the state data.

When the state data is changing frequently then you must not prefer context api because it is good for authentication purpose but not for high frequency changes.

So , context API is not ideal for high frequency changes.

Thus we can manage state globally with just react and java script by creating our own custom hooks.

Custom hooks always starts with useCustomHookName() and inside it we will be using the useState() hook such that whenever the state changes our custom hook also gets re-rendered.

So we are making an custom hook named as useStore() where outside we have declare three global objects -

1. globalState object
2. listeners array
3. actions object

Inside the useStore hook we are using the useState() hook initialized with the globalState and we are using the useEffect with setState dependencies returned by useState(globalState);

Inside the useEffect we are pushing the setState inside the listeners array and we are also returning the function where we are cleaning the listeners array by removing the setState from the listeners array.

We are also creating the dispatch function inside the useStote() hook which is creating the actionIdentifier as an argument and using which we are getting the newState to add it to the globalState i.e

newState=actions[actionIdentifer](globalState);

globalState={...globalState,...newState};

Now we are visiting every listeners array object and passing the globalState to it and caliing that function.

for(const listener of listeners)
{
listener(globalState);
}

At last we are returning two values in the form of array the [globalState , dispatch];

Remember we used to do the same thing with the useReducer() hook.

We can wrap our whole component inside the React.memo() sot that it will make sure that our components only gets re-rendered when our props get changed for that component.

React.memo() memoizes the functional component and the props and it makes sure that on re-rendering of parent component this components will not gets re-rendered until and unless the props are not changing.
