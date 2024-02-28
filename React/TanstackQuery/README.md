Tanstack query is an third party react library formerly known as react query.

It is an library that helps in sending the http request inside your react application.

Since we have useEffect() and fetch() api why still we want to use the tanstack query.

Why we use Tanstack query and what is Tanstack query ?

Tanstack query is an library that helps in sending the http request and keeping your frontend UI sync.

However we can also send the http request using the useEffect and fetch api also. But Tanstack query simplifies your code and also your life as an developer.

While using the useEffect() and fetch api we have to write it again and again inside every component which results in cumber some code.

On visiting the website again we might want to re-fetch the data and update the ui.

We might want to perform caching which returns the data if we want that data instead of requesting the same data again and again.

To use tanstack wuery we must first install it using the command -

$ npm i @tanstack/react-query

We will be importing the useQuery from the '@tanstack/react-query' and then

useQuery({
queryKey:'keyName',
queryFn:()=>{
//fetching logic
}
})

useQuery() hook takes the object as an paramter and inside it we define and assign the function to the queryFn query function which is executed for fetching the data from the server.

Tanstack query does not comes with the built in tool to fetch the data using the http request instead we have to write the code to fetch the data using http request but it gives the functionality to cache, errors, data managing functionality.

You must also add one more property i.e queryKey inside the object which is inside the useQuery() hook. So that after getting the response from the server the response is cached inside the cached memory with the key you define inside the queryKey: as an value.

So that the response from that request could be re-used in the future. If you are trying to send the same request again and you can also configure how long the data is going to be stored inside the cached memory.

This will make sure that the data you want to show is getting retirieved quicker because it does not have to be re-fetched all the time.

Thus every query inside the useQuery() hook needs an key and that key is actually an array of values which are internally store by react query such that when you are using the similar array of values react query wuery sees that and re-use the stored or cached data.

The queryKey can be object, nested arrays, string or any kind of values.

useQuery() returns the data object which we can fetch as an response data.

const {data, isPending, isError , error , refetch} =useHook({
querykey:['events'],
queryFn:()=>{
fetching the data from the server.
},
staleTime:0,
gcTime:5*60*1000,

});

here , the data is the object which contains the response object. And the isPending tells us the request is on its way or we got the response.

If the fetching function returns the error , our isError property will be true. Just make sure while fetching the data you must throw the error.

error property contains the error throws by the fetching function.

refetch is used for sending the http request again to the server.

Before using the @tanstack/react-query library we must import QueryClient and QueryClientProvider from @tansatack/react-query library such that we can wrap the main component inside the App.jsx file

const queryClient=new QueryClient();

<QueryClientProvider client={queryClient}>

</QueryClientProvider>

This will unlock all the @tanstack/react-query features.

We does not have to uise the useEffect() hook because whenever you will come out of the window and re-visit the site again everytime the http request will be sent to the server . Howeveer it uses cacahed memory for the same request and we are having the key to identify among several requests thus the response will be return from the same query.

staleTime controls after which time react-query will send the http request to get the updated data if it found data in your cache. The default staleTime is 0.

gcTime stands for garbage collector time it tells or control how long the data will be kept inside the cache memory.

After the gcTime gets over react-query sends the request to the server again so that it can store the new data inside the cache.

If we make the queryKey dynamic react-query can use the same useQuery() hook for different requsts and store the response data and cache it.

React Query can cache and store and re-use the data for different keys based on the same query.

react query by default passes an function as an parameter to the queryFn so that while fetching data we can use the queryKey and signal property.

useMutation() imported from '@tanstack/react-query' is optimized in such a way that it makes sure that request are not sent instantly when the component is rendered but it is sent when you want to send.

Mutation takes an java script object which also has mutationFn as an property and we can also set mutationKey but it is not required as we do not want to cache the response data because they are primarily about changing data on the backend.

useMutation() returns the mutate object which is used for calling the mutateFn in anywhere location inside the application.

const { mutate } = useMutation({

mutateFn:fetchApiFunction

});

We can also add the onSuccess: ()=>{

}

property inside the useMutate() hook.

for get api we will be using the useQuery() and for any kind of updation we will be using the useMutation().

onMutate is just like onSuccess which is assigned function as an value and inisde that function we update the ui using the queryClient imported from '@tanstack/react-query'

await queryClient.cancelQueries(queryKey);
queryClient.setQueries(queryKey,value);

redundant code means repeating the same code again and again.

We can combine react-router features with react-query.

We can still trigger the fetch api without using the useQuery() by using the queryClient object.

queryClient.fetchQuery({

})

However it takes the same object as the useQuery() takes.

action function from react-router will only be trigger when the form is submitted.

To extract the form data inside the action function we can use -

const formData=await request.formData();
const data=Object.fromEntries(formData);

staleTime is the time interval in which the data is fetched from cache and gcTime is the garbage collection time that in that time the cache data is cleared.
