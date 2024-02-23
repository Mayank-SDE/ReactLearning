npm i redux react-redux @reduxjs/toolkit

Redux is an state management system for cross component or app wide state.

State are the data when changed affects the UI.

It helps us maintain the data across different component or application wide state.

We use useState() or useReducer() for managing the state.

State can be categorised into three parts -

1. Local state - state belongs to single component. It is managed using the useState() or useReducer().

2. Cross component state - state affecting multiple components. Requires prop drilling. Where functions and state are passed using the props.

3. Application wide state - state which affect the whole application ui ex - userAuthentication. We manage this using useState , props , useReducer i.e prop drilling.

To maintain the state in cross component or application wide we use React context - useContext , createContext , ContextName.Provider m ContextName.Consumer.

Redux solves the same problem to maintain the state application wide or cross component.

Then why Redux and not React context ?
-> React context has certain disadvantage which may create problem sometimes.

-> Though you can use Redux and React context in the same application.

-> With React context there is complex setup & management of state. Where there are multiple context you have to add which are nested with each other and it may become complex to manage the state.

-> For high frequency changes we must prefer Redux and for low frequency changes we can consider React Context.

-> For complex state we may have to use nested Context provider which becomes cumbersome in future.

-> React context is not optimized for high frequency state changes.

How Redux Works ?

-> Redux is all about having the one central data store for your application.

-> You never have more than one store for your entire application.

-> The data stored inside the store is available inside the components where we can update the UI.

-> Components subscribe to the store and whenever the data changes store notify the Components and then Components gets the data needed to update the UI accordingly.

-> Component never update the data stored inside the store atleast not directly.

-> Components do not directly changes data stored inside the store.

-> Instead components uses the reducer function for mutating the data stored inside the store.

-> reducer function is not that useReducer() hook it is totally different.

-> So the reducer function updates the store's data and the component subscribe to that data.

How do we connect component with the reducer function ?

-> We have actions and components dispatch certain actions which is the javascript object which describe the action which decide the actions reducer should perform on the store data.

-> After the action performed the components gets notified and it updates the UI accordingly.

-> to install package.json file type npm init

-> to to install redux type npm install redux

-> now import the redux from the redux library.
const redux=require('redux');

-> Now we can create store using the
const store = redux.createStore();

Now this store manages some data which is determine by the reducer function.

Reducer function will produce new state snapshot whenever the action reaches it.

Reducer will also be executed with the default action which will set the initial state.

Reducer function is the datandard library function which will be called nby the redux library.

Reducer function will recieves the two parameters old state and the dispatched actions and then reducer function must return an new state object.

Reducer function must be an pure function which means that for the same input it will always give the same output.

And there must no side effect to that reducer function. i.e no local storage , sending http request.

Reducer function will always be executed by the redux library.

The reducer function must be passed to the createStore(reducerFunction); as an parameter so that the store must know which reducer is responsible for changing the stat in the store.

Now we need someone to subscribe to that store and then we need an action that can be dispatch.

We will be creating an subscriberFunction() inside it we will be using store.getState() to get the latest snapshot of the state.

store.getState() is the function which is available on the store by the createStore method.

the subscription function will soon be trigger when the state is changed.

To make the redux aware of the subscriber function and tell it that this function should be executed whenever our state changes.

store.subscribe(subscriberFunction); Now whenever the state changes it gets executed by the redux.

Now we need to dispatch the action for telling the reducer function to perform what action on the state.

store.dispatch({
type:
});

dispatch is an method which dispatches the action where the action is javascript object which have the type property and acts as an identifier for separating different actions performed on the state.

For using redux in the react project you must install redux , react-redux

Now fter creating the store folder and inside it the index.js file where we have configure our store , redux imported from redux for using the createStore() method which takes the reducer function which further takes two arguments state,action. At last we export default the store.

Now in the parent componenet of all component above the App component we will wrap it with the Provider component provided by the react-redux with the attribute store set to the value of our configure store. For making the state inside the store available to all the child components of App compoenent.

Now all the child components including the App component itself will be able to tap in the store and dispatch the action so that we can perform the action on the state.

There are two hooks provided by the react-redux package useSelector and useStore where useStore directly gives the access to the store and useSelector gives the access of the part of the store.

To connect the class component with the store the react-redux package provides us with the connect function which acts as an wrapper for class component.

useSelector() takes function as an argument which is executed by the react-redux. This function basically determines which piece of data we want to extract from our store.

for a small store having few state we can use useStore(). But for the larger store where we only need few state we can use useSelector();

const counter=useSelector(state=>state.counter);

Now in whatever component you will use the above statement that compoenent will automatically subscribed the store by the react-redux.

Whene the component gets unmounted the react-redux will clear the subscription of the store.

for dispatching actions from inside the component we need to import useDispatch() hook from the react-redux package which returns the dispatch function and further used for dispatching the actions.

We must update all the state before returning because we do not want to loose the other state values.

You should never mutate or change the orignal state , insteade always create an new state and then return it. To avoid further possible bugs.

Redux may become complex further as our project grows and thus an easy approach is to use redux-toolkit.

If you dispatch action you have to make sure that the the type attribute must be same as defined inside the reducer function.

There is an possibility of clasghing of identifier name or type attribute.

If our state is very large then we may need to update the state for even a small change.

We have to ensure that we return an brand new snapshot of state and don't change the existing state.

Redux-toolkit is an library to sove these problems. It makes easy to use redux.

After installing the @reduxjs/toolkit you have no need to install redux externally because it comes with the @reduxjs/toolkit package.

We can import {createSlice,createReducer} from '@reduxjs/toolkit'; we can use any one of them for creating the reducer function but createSlice() is more powerful than the createReducer() function.

createSlice({}); method is used for creating the slice of the global state.

Authentication state must be implemented with application wide scope.
