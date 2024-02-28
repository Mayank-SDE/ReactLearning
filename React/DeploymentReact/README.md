How to deploy react application ?

After writting the code you have to test the code automatically or manually.

There are certain things to optimize in your code - Lazy loading 

Then you have to build the code for production by running certain scripts which compress the code and optimize the code.

Then uploading the code to the server.

Lazy loading - Lazy loading means only loading the code which is needed.

In bigger application loading all the code initially slows down the whole process of rendering the output and thus to avoid this we only load certain components only when needed.

instead of directly importing the function we can set the function as an value inside it we will be returning the import('path').then((module)=>module.propertyName);

For loading the component lazily  we will declare it as an const and then assign the value in the similar manner import('path') wrapped by lazy(). lazy is imported from 'react';

import {lazy} from 'react';

const BlogPost= lazy(() => {
    return import('compoenent/Blog');
});

Now wherever you are using the BlogPost component you have to wrap it around the <Suspense> </Suspense> component as mentioned the import('path') will return the promise.

The Suspense component is imported from react and have an fallback property which can be assigned an value if the resolve is not returned by the promise which is returned by the component.



This is how you implement the lazy loading in the default exports.

import {lazy} from 'react';

const PostPage= lazy(() => {

return import('path');
});

This is how you will implement lazy loading in the non-default exports.
{
    path:'/',
    element:<PostPage />,
    loader:()=>{
        return import('path').then(module=>module.loader);
    }
}

This is how you will implement lazy loading.

To await for the component which may return the promise is wrapped by the <Suspense></Suspense> tag.

After the code is finished we have to use the build process to minified our code so that we can deploy it.

After running the npm run build we get an minified version of our application named as build. Now this build folder is to be deployed to the server.


React SPA application containg only html , css , javascript with no server side coding then it can be deployed to any static hosting website.

For hosting the React SPA we can prefer the firebase hosting.

