before using routing we must install react-router-dom package.

We can add extra property in the route definition i.e loader.

loader property wants the function as an value. And this function will be executed by the react-router whenever you are about to visit this route or Component. And in this loader function we can load and fetch the data ex - using the fetch api.

Whatever you return inside the loader function is available inside the compoenent you are using.

We can get the data from the loader function inside the component using the useLoaderData imported from the react-router-dom.

Even if loader() is returning the promise you will still get the resolve data using the useLoaderdata() function.

So this is how we can use the fetch api inside the loader function which is passed as an property in the component.

We can fetch the data using useLoaderData() function inside the children route or components but not on the higher level route or parent route or components.

Where should the loader() data be stored ?

Because in the route definition it may bloat the App.js file because of too many code.

So we can define the loader function inside the component where we are going to use the useLoaderData() method and then export it to the app.jsx file and set the loader property inside the route definition.

The loader for the page will start gets executed when we hit that particular route. Before the compoennt is rendered the useLoaderData() must be finished first and then only the component is rendered.

React-router gives us some hooks to check teh route transition state. To find out the transition is been initiated and whether the loader function is finished with its execution.
We can use the useNavigation hook from the react-router-dom which is gives the navigation object which has state property which tells about the data is loading or not.

Returning response in loader() ?

When you are uusing loader() you can also return any kind of data number, text , object and also response object.

const response =new Response();

The loader function is executing inside the browser on the client-side.

The Response constructor takes any kind of data as an first argument and then the object which contains status: property.

Thus we can directly returns the response object we get from the fetch api. No need to await for extra response.json() because it is done by the loader function.

We cannot use react hooks inside the loader function.

We can also handle the error using the loader function again inside it we will be returning the data which is indicating the error.

We can also throw new Error() inside the loader() function. Now this will get us to the most closest errorElement: mentioned inside the Route definition.

Extracting error message and throwing the response.

We catch any error using the useRouteError imported from react-router-dom thrown from the loader function.

Thus we can handle and setup generic error handling and throw generic errors.

JSON() utility function -

constructing the Response object manually is cumbersome. Thus we can return the json() directly and recieves the json function imported from react-router-dom directly.

The loader function contains two parameter request object and second is params property which contains all your route paramters.

useRouteLoaderData('idDefined inside the route as attribte') to use the correct loader function.

Just like loader() function we have action() function

Form element is provided by react-router-dom.

We can import {From} from 'react-router-dom';

This Form tag will make sure that browser default of sending the request will be ommitted and it will take the request and give it to the action attribute set in the route definition. Now th action will have all the data that is been submitted to the form.

Just like the laoder() function action() function also takes two arguments {request,params}

To get the hold of form data we have to get the access of form data using the request.formData();

const data=await request.formData();

data.get("name you provided on the input element.");

redirect is an function imported from react-router-dom which is used for redirecting the user to another route.

you can also use the useSubmit() hook from react-router-dom to submit trigger the action and inside that action you can use the request object which is used for accessing the object.

You must always have server side validation as well because haing only client side validation is not enough because it may be disabled using the browser side dev tools.

useActionData() returns the closest action function data.
