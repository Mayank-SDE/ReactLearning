How to send and recieve data using http request.
There must be some central server which is used for centrally managing the data and sharing the data among various react instances.

You cannot interact with the database directly. Because all of your react code is available in the browser and your code is visible in the browser developer tool, thus anybody can see the code credentials to access the database will be exposed and anybody can manipulate the database.

Not all the operation are possible to perform from the browser like accessing the file system thus we need an backend server.

Backend code is inaccessible to the user using our web application.

To connect the frontend and backend we use http request.

With the help of React you are building the client side web application.

You communicate with the backend via API via HTTP request.

Backend( REST API ) is an web server that exposes certain endpoints or URLs which are available so that our frontend can request and recieve data by hitting those endpoints or URLs.

API stands for application programming interface and REST API are pre-defined endpoints or urls on using which we can send HTTP requests for recieve data and sending data .

You should never try to directly connect with database using react code as it would expose the database credentials.

Frontend and Backend are separated for security reason and can be written on any languages.

We can build Full stack web applicatio using react with the NextJs or RemixJs Framework.

We can send http request using the fetch() function which is not react specific and it is provided by the browser.

fetch(url) takes url as an parameter and returns the promise which is javascript value that will be evaluated to another value and it is basically an wrapper object around the value that is not there yet but that is eventually be there. It is the wrapper around the eventually recieve Response object. Promise<Response>

Promise is an javascript object that will yield different value depending on the state of that promise.

And to evaluate the result of that Promise you chain methods like then() , catch() , finally() to evaluate the result.

We cannot use async directly on functional component.

instead of chainging methods using then() we can use async await.

The updated state value is not immediately availabel after updating the value instead it will be available after the re-execution of the component. Thus we will be using the useEffect(()=>{

    return ()=>{

    };

},[])

return function of the useEffect();
