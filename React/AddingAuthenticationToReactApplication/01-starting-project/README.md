Authentication is needed when you want to restrict the content.

We can make the request with the user credentials so that the server can validated based on the user-crdentials.

But how does the server is going to response to the client so that we can access the resource.

Now we could use -

1. Server side tokens - Store unique identifier on server , send same identifier to the client. CLient sends the identifier along with request to protected resources. Server can check if the identifier is valid ( previously issued by the sever to the client). But it requires tigh coupling between the frontend and backend and since most react are SPA are independent of backend and backend does not store information about the react frontend.

2. Authentication tokens -

After the user sends the valid pair of credentials .

Server creates an token based on some algorithm and does not store it instead sends it back to the client.

Client attaches these tokens to future request for protected resources.

Server can then verify the attached token by again creating the token with same algorithm using the same key and then comparing it with the clilent side token.

useSearchParams() hook is used for extracting the params from the url imported from 'react-router-dom'

const [searchParams,setSearchParams]=useSearchparams();

const querParameterName = searchParams.get("queryParameterName");

useSearchParams is hook which can be only be used inside the functional component and is used for extracting the query parameter and setting the query parameters.

TO get the hold of query paramters from the url inside the action method we use browser API.

const searchParams = new URL(request.url).searchParams;

always throw error using json({message:""},{status:200}) using react-router-dom.

To get the data return through api or any operation from the action we have an hook useActionData() hook imported from react-router-dom.

useNavigation() hook imported from the react-router-dom it gives us an object that give the state property which have three values -

1. submitting
2. loading
3. idle

On the same route we can have one loader and action function.

fetch(url,{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify(javascriptObject)
})

Always throw an error using throw json({message:"This is the error message."},{status:400})

redirect is imported from react-router-dom which is used for redirecting the ui to an particular route.

Suppose there is an javascript object which contains the key:value pair. Now to iterate through only the values or keys in an javascript object we can use browser API Object.values(javaScriptObject); or to get the arrays of keys we can use Object.keys(javaScriptObject);

We must have to attach the tokens while sending the request which requires special access.

We can extract the token after logging in which we will be getting from the backend server and save it to the localStorage.

const responseData=await response.json();

const token=responseData.token;

localStorage.setItem('token',token);

For all the fetch api we are sending if we are suppose to add the token we can add it as -

headers:{
'Authorization':'Bearer '+token,
}

But we also need a way to remove the token. i.e adding the logout funtionality.
