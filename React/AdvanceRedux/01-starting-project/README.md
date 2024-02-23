Your reducer function must be pure , side-effect free and synchronous.

And if the reducer function are side effect free , pure functions and synchronous function then where should we put our asynchronous and side effect code ?

We can put the async and side effect code in two places -

1. Inside the useEffect(()=>{},[]) inside the component itself.

2. Inside the action creators functions created by us not given by redux.

When updating state through redux the redux follow the immutable way of updating the state behind the scenes i.e by not updating the existing state instead creates an new copy of state and then update it and then returns it.

Firbase provides free dummy backend.

Reducers function must be seid-effect free , pure function and synchronous. SO we can't send http request to backend inside the reducer function.

We can write async or side effect code inside the useEffect(()=>{},[]) inside the component or we create our own actions creators.

You must never mutate or change redux state specially outside the reducer functions.

You have three options to put your code into three places -

1. Fat Reducers - always prefer it for synchronous and side effect free code.

2. Fat Components - putting inside the useEffect(()=>{},[]) function.

3. Fat Actions (action creators) - using Thunk

useSelector sets up the subscription to the redux store.

Thunk is an function that delays an action until something else if finished.

An action creator function that does not return he action itself but instead another function that returns the action.

So we will be creating the function inside the same slice file where that function will return another function which further returns the action.

Because redux accepts the actions as well as the action creators.

The action creators recieved by the function inside the slice file will then return the function inside it where we can dispatch the action and thus we can say it action creators.

Using Action creator Thunk for executing the async or side effect code ?

-> we will export an create an function inside the slice file where we will be recieving state through the dispatch() function called inside the component and then the exported function returns an async function which takes the dispact as an argument that is used for dispatching the action on the same file. this is how we can dispatch the action to the action created by us.

We can use Redux Dev tools for easy debugging of redux application.
