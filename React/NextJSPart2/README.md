We can have two types of roting App router and Pages router.

Earlier we have used App Router and this is the most recommended way of using NextJS.

Pages Router is the alternative way of building NextJS. And it was the only way to provide routing in those days. It is the more stable approach as compared to the App router.

Page router approach is simply a different way of building NextJS Full stack Web application.

Older projects are still using the Pages Router.

To create an next js project -

-> npx create-next-app@latest ApplicationName

public folder contains the public resources ex - images.

NextJS allow us to determine when a page should be pre-rendered.

pages folder will contain the file based routing.

We are creating three files inside the pages folder -

1. index.js - This will get executed when the route is only '/'.

import React from 'react'; is imported behind the scenes.

In standard vanilla React application the page is not pre-rendered on the server but in Next js application the page is pre rendered on the server irrespective it is displayed on the screen or not but still it is available on the view page source.

Sub folder created inside pages are also actiong as path segement. We can create an sub folder and then inside it we can further create index.js file.

index is reserved keyword which will be trigger inside any folder by default.

our.domain.com/news -> in this scenario the file named index.js inside the news folder will be executed.

or.domain.com/news/greed -> In this scenario the file named greed.js created inside the news folder will be executed.

If you are having the [] in the name of .js file then that tells the next js it is dynamic page and get rendered for different routes.

But how to extract that dynamic path name from the component. We will import useRouter from the next/router.

We can import {useRouter} from 'next/router';
const router=useRouter();

router.query.fileNameWrittenInsideTheSquareBrackets;

Since because of using the anchor tag <a> on clicking it the page is getting refereshed which only happens when we are sending the http request to the server and thus for normal navigation to another page we do not want that referesh icon to get reloaded and for this we will be using the <Link> tag.

Because of pre-rendering concept nextjs is best for seo.

If you are not declaring the dynamic file like this [fileName].js instead you can also try to create the folder [folderName] and then inside it index.js so both of the way are same and provide you with dynamic routing.

\_app.js file is kind of your root component which is kind of wrapper component of the component which is rendered by the NextJS.

Inside the \_\_app.js file there is MyApp component which takes two arguments Components and pageProps as Java Script object as an parameter.

Which are return as an JSX Component inside the MyApp React component.

So we want to provide an common layout to all the component then we can wrap the root component inside the \_app.js file.

While using the react hooks and passing the hooks state values always remember it is not that good for the seo and thus not available on the pre-rendered page. ex- using the useEffect() code will not get included in the pre-redered page.

So to solve the abpve problem next js provide us with the solution of how we fetch data for pre-rendering.

The page that pre-rendered is generated from the first execution cycle.So when we are visiting a particular route for the first time it may happen that the data is missing from there.

And pre-rendering the html page was the main behind using the NextJS Project as it was good for SEO.

However, Next js provide us with two forms of pre-rendering which tells us how the page should be pre-rendered.

Two forms of pre-rendering -

1. Static generation -

-> When using the static generation the page is pre-rendered when you build your application for production. So when you build your code for production then the static generation happens and the page that is generated or pre-rendered does not change after deployment. If you update data then your page pre-rendered will still not change and you need to start your process again and re-deploy again. Which is worse and not effiecient.

-> If you want to add the data fetching to your page component then you can do so by exporting special function from inside the page component file. This is now only works on page component file and not on other component file. i. All the component that are stored inside the pages folder.

-> Inisde the component inside the page folder an pre-reserved name function getStaticProps(). Next js will always look for this function and if it finds this function then it will execute this function during pre-rendering process.

-> So the next js will first call the getStaticProps() method and then the component function whcih is returning the JSX code.

getStaticProps() has this name because indeed it is preparing the props for the component function. And these props contains the data this component function needs.

getSataicProps() is also allowed to be async i.e asynchronous on nature. Next JS will wait for this promise to resolve and then execute the component inside the page.

The data returned by the getStaticProps() function is passed as an prop to the component function which is returning the jsx code in the same file. Thus , you are able to load data before this function is executed. Thus the component can be rebndered with the required data.

Inside the getStaticProps() we can run any server side code ex accessing the file system or database. The code written inside the getStataicProps() will never executed on the client side. Because thiscode will get executed during the build process not on the server and not on the client or visitor machine.

Whatever you do insde the getStaticProps() you will always return the javascript object which have the props property and inside the component funciton you must define the props which you can use insde the whole component.

usage of getStaticProps() hepls in making the data fetched available for pre-rendering. Thus good for SEO.

For the deployement we have the following command -

npm run build

After running the abaove command you can see all the pages with their routes and there are also some filled dots and empty dots whcih are added as prefix to all the routes.

THus empty dots are referring to the static page or content.

Filled dots are reffering to the the SSG static site generation which are pre-rendered as HTML + JSON using the getStaticProops() function.

filled dots - we are fetching the data using the getStaticProps() and these pages are also called as SSG page.
empty dots - we are not fetching the data using the getStaticProps() and these pagees are called as static page.

The problem using the getStaticProps() are following -

-> It may happen that the data is outdated since the data is generated during the build process and after deployment if we add the data . This pre-generated page will have no idea about them. SO for the data updation we have to re-deploy our web application. Which is good for some kind of web application like Blogging website where the data is not changed frequently .

-> thus to overcome this we have an special property revalidated which we can return insde the object where we are returning the props inside the getStaticProps() .

-> When we add the revalidate property to the object we are returning in getStataicProps()n we unlcok the features called as Incremental static gengeration.

-> Revalidate wants the number which is number of seconds and this is the number of seconds for which next js will wait until it re-generates its page for the incoming request.

-> return {
props:{
meetups:DUMMY_MEETUSP
},
revalidated:10
}

Now the page will not only generated during the build process but also on the time of seconds assinged to the revalidated property and thus every 10 seconds the data is re-generated on the sever. Thus the old re-generated page replaces the old generated page.

-> This is how you make sure that the data we are getting from the getStaticProps() is not older than the 10 seconds or whatever time you define in the revalidated property.

-> using the revalidate property we can ensure that the you have no need to re-deploy the application on the server as the pre-rendered page will be re-generated every 10 seconds.

-> Sometime you want to pre-generate the page for every request and not after certain seconds.

-> Thus there comes getServerSideProps() come into picture.

2. Server side rendering -

-> getServerSideProps() is the function for which the Next jsis looking for beofer the component function execution.

-> However, it will not run during the build process but insted on the server after deployment.

-> You will still return the object with props property. Any code written inside the getServerSideProps() will always run on the server and not on the client side.

-> You cana put code like credentials that should not be exposed to the users. AS it only runs on the server.

-> However you cannot set the revalidate property here. Because it does not make any sense here because by default the code written inside the getServerSideProps() will be executed for every request anyways so there is no need to revalidate every certain seconds.

-> We can recieve the context parameter in the getStaticProps() and getServerSideProps().

-> That context object is used for extracting the request object and response object.

const response = context.response;

const request = context.request;

And hold to request object given by the context object is benificial for authentication purpose and also helps in checking for the cookies.

getServerSideProps() takes longer as for every request the ui is pre-rendered on the server.

When there are minimum changes happening on your web application then you must opt for getStaticProps() as it is best for cache concept.

frequent changes - getServerSideProps();

small changes - getStaticProps();

Both of the method have context parameter which also have the params propery for directly accessing the identifer.

getStaticPaths() is an function you need to export in an page component file if its an dynamic page and using you are using getStaticProps().

getStaticPaths() is not needed when you are using the getServerSideProps().

getStaticPaths() is only needed when you are using the getStaticProps() in the dynamic page components.

Becuase when using the getStaticProps() the page pre-generated during the build process. This means NExtJS have to generate all version of these pages including the dynamic pages in advance for all the supported ids.

i. we next js have to generate the pages for all the id of meetup which we are extracting from the context.params.meetupId property.

In getStaticPaths() we return the object containg all the dynamic possible values i.e id's in this case. The object returned is having the path key and further that path key have the array as value of object haivng the params as key. Inside the params object there is an meetupId property where the id is defined.

getStaticPaths() basically tells next js that the these are the values for which the page is pre-generated.

Introducing the API Routes -

-> Next js helps in building the backend API in our client frontend projects.

-> API Routes are special pages which do not return html code but are about recieving the incoming http request also put , patch , delete with json data attached to them for database interaction.

-> API routes allows you to build your API Endpoints as part of your NEXT project. They will be served by the same server.

-> You have to create the folder name as api inside the pages folder pre defined.

-> Next js will take any js file stored inside the api folder and turn it into the api routes. Endpoint that are target by the request and that sends json and recieves json.

-> The file names inside the api folder will acts as an path segmnent in the url.

-> These js files inside the api folder are not about rendering , defining react components. Instead there are going to define the function which are containg server side code.

-> The code inside the api js files will never run on the client side and it runs on the server side and is also not exposed to the user.

-> We can also use credentials inside the pages of api folder without exposing them.

-> The functions are trigger when the request is coming from the client side.

-> The function inside the js files insde the api folder are exported and have two parameters req and res object.

-> The req object contains the data about the incoming request and the response object will be needed to send the response.

-> With the help of request object we can get the requeset body , method , headers. This allows us to find out which kind of request is sent. And based on the type of request we can perform further operations.

We are using the MONGODB Atlas. We are using the nodejs api driver to send queries to mogodb atlas cluster.

we have to install the mogodb package -> npm i mongodb

This is the official mongodb driver which makes sending the queries to mongodb easy.

This mongodb driver allows us to connect to cluster and insert the mongodb data or fetch data.

Inside the js file inside the api folder we are importing MongoClient object from the 'mongodb'.

The MongoCLient object is used for connecting and it pass the string in the connect method. You must add the plugin of username and password.

Now you must configure the username and password and the database in that url.
Now this MongoClient.connect(url) will connect to the cluster and this code you must never run on the client side. Because you would expose the credentials to the user.

MongoClient returns the promise and thus we must add the async infront of the handler funcrion and await infront od the client() function. It returns the client object where we can call the db methodto get hold of that database to which you are connecting or it will create the database.

In mongodb the data is stored insde in the documents which is inside the collections.

Just like sql the collection refers to the table and the document refers to row but in json format.

To create the collection client.db() returns the db object which further have the
db.collection('collection_name'); it returns the collection. Now using this collection we can perform various operations like insertOne based on the requirement.

An document is an javascript object. However collectionName.insertOne({}); will also returns the promise which we can await.

After performing all the operations we must close the connection suing the client object
client.close();

And then at last using the response object we send the response.

All the things imported whcih are used inside the getStaticPorps() or getServerSideProps() are not not included by next js on the client side bundle. Thus we can write the server side code directly inside the getStaticProps() or getServerSideProps() as it is not exposed to clients.

Adding head meta data for search engine optimizations.

import Head from the 'next/head'. It allows you to add the head element to the head section of your page component.

Vercel is an great hosting provider for next js application.
