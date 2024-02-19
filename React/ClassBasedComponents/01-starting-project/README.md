Class based components are alternative of functional components.

1. Functional Component -

function Product(props){

    return <h2> JSX Code </h2>;

}

2. Class based Component -

Classes that extends Component class and have render method inside it where it returns the JSX Code.

Class Product extends Component {

    render(){

        return <h2> JSX Code </h2>;
    }

}

Traditionally , you have to use class based components to deal with the management of state and side-effects.

Class based components can't use React Hooks.

In clas based components we can directly access passed props using the this.props object.

To maintain state in class based component you must use the constructor.

In class based component state must always be an object and in functional component state can be string , number , object or boolean.

this.props, this.state and this.setState are provided by default to all the class based component.

An when you use this.setState.property1=value1; and using this you are only setting the state value of only one property then rest state values are automatically updated to previous values.

We can also pass the function to the this.setState((prevState)=>{

return {
...prevState,
property:value,
};
})

When we want to use the previous state value.

you must always call the super() method in your constructor before using this keyword.

We used to handle the side-effect code using the useEffect() hook but here we can't use the useEffect() hook.

Every component have some lifecycle methods using which we can run some code at an particular lifecycle of component.

Just like built-in render() method these are the following methods provided by react -

1. componentDidMount() - called once when component mounted once or evaluated once by react. It is basically similar to using the useEffect(()=>{},[]) where there is no dependency and thus it will only run once.

2. componentDidUpdate() - This is called once the component is re-evaluated or re-rendered by react. This is equivalent to useEffect(()=>{},[someDependencies]) with some some dependencies.

3. componentWillUnmount() - This is called when the component is just getting unmounted or removed from the DOM. It is similar to the function which we return using the useEffect(() => {

   return () => {

   };
   },[]) also called as cleanup function.

   componentDidUpdate(prevProps,prevState) takes two arguments using which we can configure it when to update the state or when not to update the state.

   Whenever you add an componentDidCatch(){} lifecycle method inside any class based component then it becomes the Error boundary. And there is no equivalent in functional based component.

   Now componentDidCatch() method will gets ecxecuted whenever there is an error in child components.

   We can wrap on any component which might throw any kind of error.

   componentDidCatch(error) has built-in error parameter.

   Using ErrorBoundary is more prefarable for handling error in an elegant way.
   It can only be used in class based component and not on functional component.
