If you are updating the state your component will get re-render again.

You must always put your code which have side effect inside the useEffect majority times.

useEffect() will noly gets re-executed when the dependency changes.Other wise it will get run only once.

The CartContext or AnNameContext created using the createContext imported from react is only there to share data across all the components which are consuming this cotext whether using the AnyNameContext.Provider or using the context useContext() hook.

When there is a situation where multiple or complex number of state are required then you can use the useReducer() hook.

useReducer() hook needs an reducer takes function as an 1st parameter and state initial value as an 2nd parameter.

that reducer function will be needing the two parameters state and action.

splice() method takes an index as an first paramter and number of items to be removed from the array as an second paramter.

useReducer() function returns two values wrapped inside the array the state value and the dispatch function using this function we will be upadting the state values by passing the object which is equivalent to the action parameter inside the reducer function.
