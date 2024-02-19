We can also build our custom hook which is the combination of many hooks.

You must only use react hooks inside the functional component.

You must declare the hooks at the top of the functional component and not inside any other function , if statement, or for loops or any kind of loop.

Why it is needed i.e Custom Hooks ?

-> To reuse the code with multiple hooks.
-> There may be case where we are creating same kind of hooks sparately in different components.
-> We cannot contain these repeated logics in separate components because it is not returing any JSX code it is just we are using the same hooks multiple times in separate components and thus we need an custom configurable hooks which we can use in separate components instead of creating it again and again and using it separately in different components.
-> We can put thos repeated code into an function and export it where we want to use but it contains state updating which can only be happen inside the functional component not in some random function where we can export it further.

-> So we use custom hooks that gurantees to be used inside the components.

Usually we name custom hooks using the useCustomHookName pattern.

always try to name the custom hook function starting with useYourCustomHookName = () =>
{

}

function that starts with use are treated as hooks and all the rules of an react hooks are applied to the custom hooks.

Custom hook manages all the relevant state.

Custom Hook can also recieves parameters.

Custom Hook then return an array or objects, the values based on your need.

All the states used inside the custom hooks will also be available to components using that custom hooks. So , when any state changes inside the custom hook then the components which are using the custom hook will also gets re-rendered.
