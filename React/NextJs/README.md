This project is the full stack web application build over Next js.

Full stack application with Nextjs Framework using react.js.

Creating NextJS project -

-> Next js is the framework of react js.

-> npx create-next-app@latest

File System Based Routing -

NextJS uses files and folders to define the routes.

Only files and folder inside the app folder are considered!

Inside the app folder the page.js and the layout.js are reserved files and page.js tells that how the page should be rendered.

Inside the page.js the react component is stored.

NextJS works with the React Server component. Component which requires the special environment. NextJS provides such an environment. React server component renders only on the server side and not on the client side.

Inside the page.js the react server component is stored which is not rendered on the client side and is rendered on the server side and it is made sure by the nextJS.

Now this server side component is sent to the browser as an html.

If we want to react the page - localhost:3000/about and to achieve this we will be adding the about folder inside the app folder.

Now inside the about folder there are certain .js pages which names are reserved and you have to create these pages inside the about folder and some of these are -

As NextJS relies on reserved , special filesnames. But the filesnames matter only inside the app folder.

1. page.js - Define page content.

2. layout.js - Define the wrapper around the pages.

3. not-found.js - Define "Not Found" fallback page.

4. error.js - Define Error fallback page.

etc.

The server derives the html to be rendered on the client side from the react server component and then client side browser renders the html on the browser.

On clicking the anchor tag the page gets reload and which is against the SPA and thus instead of using the anchor tag a we can use the Link tag which is imported from 'next/link'.

The props are same used in Link and a tags.

Every next js project needs atleast one root layout.js file which is the wrapper around the single page.js or multiple page.js files.

metadata is also an reserved keyword which is assigned an javascript object having several properties like title , description etc and we need to export it so that is can be added to our project by the nextjs.

All the content set inside the head section is set inside the const metadata in the { key : value } pair behind the scene by next js.

Any image stored inside the app folder with the name icon will always be treated as icon.png.

The globals.css file contains the css which is applied to all the components because it is imported in the layout.js file.

Favicon is the image beside the title shown on the tab.

We usually name the component file with the small letters. However the component name can start with the capital letter.

We can also create the component folder outside the app folder so that the app folder is only used for routing purpose.

We can use the @ symbol for directly reffering to the root directory of the project and we have configured this inside the jsconfig.json file.

Reserved Filenames
As you already learned, there are some reserved filenames when working with NextJS.

Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in NextJS - you'll, of course, learn about the important ones throughout this section:

page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

layout.js => Create a new layout that wraps sibling and nested pages

not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

Using Dynamic Routes & Using Route Parameters -

Since if we are having many routes created on some operation performed by the user then it would become cumbersome as we have to create separate folder again and again and inside it page.js again and again and thus to avoid this we have to provide an way of creating the dynamic folder and we can achieve this using the [] square brackets.

NextJS passes the props component to all the children components and that props have the params property which is set by nextJs

So for creating the dynamic routes inside any folder all you have to do is to create an folder and name it inside the [folderName] square brackets and that name is stored inside the params object with the key of folderName. This is how you configure the dynamic routes.

We can import Link as an default from 'next/link'.

Before looking for dynamic routes inside the app folder next js first look for the whether the direct route is available or not.

We must have atleast one root layout.js stored inside the app folder and further we can have more subset of layout.js to have more specialized additional information.

In NextJS we can import the image directly from the path and the the image is stored inside the property name src.

import logoImage from '@/assets/image/logo.png';

<img src={logoImage.src} />

@ refers to the root directory of your project and is configured inside the jsconfig.json file.

We can also use tailwind css library for applying the css to our next js project.

We can also use css modules which can be used for styling and are only scoped to the components.

All you have to do is to create css files which are ending with the .module.css extensions.

Then we can import styles from that file. Now this will give access to all the classes define inside the css file as an java script object.

Now we can default import from the fileName.module.css file path and now we can access the classes defined inside the css file using the classes.className.

In NextJS we have an Image component which helps you to render the image in an optimized way. For example by lazy loading.

Always use the Image component for rendering the image in your application.

The <Image /> component can be imported from the 'next/image'

When using the Image component we can directly pass the image object imported from the asset folder to the src attribute of the Image component so that more informatio can be transferred. For example it automatically detects the size of the image.

The <Image loading="lazy" /> component have the default property set to the lazy on loading attribute so that the image is only loaded when it is required.

The <Image srcset="" src="" > component set the srcset value so that it gets adjusted based on the view port avaialable and it also get the image in such a format that is more efficient ex- .webp instead of .png.

However we want the image to loaded asap so that we provide the priority attribute in the <Image priority /> component.

There are two types of components -

1. React Server Components ( RSC )

-> With NextJS it changes , It is an Fullstack framework and it has backend as well not just frontend and therefore code also executes on backend not only on frontend when working with NextJS.

-> The backend derives the to be rendered HTML code by executing the server side components functions and sends it back to the client.

-> The client side recieves and render's the to be rendered HTML code.

2. Client Components

-> The components you used to create using the vite or create-react-app. React JS is an pure client side library. Backend returns only one single html file which contains the client side js code.

-> The visible content is generated and rendered on the client side ( by the client-side react code.)

By default all react component in NextJS are React Server Components RSCs and are only rendered on the server.

Thus all the components function you define inside the next js application are rendered on the server side not on the client side.

IN NextJS you have less javascript code on the client side to be downloaded which increses the performance and thus also improves the serach engine optimization. Because scrollers now see the complete cleared content. And in vanilla react code the client side is continously evaluating based on the user interactions.

In NextJS we can also create the react component on the client side which are pre-rendered on the server first and then on the client.

Hooks and event listeners are not used on the react server components.

But by default in NextJS all the components are react server components and if you want to make it as an client side components then you must explicitly tell next.js by putting the foolowing statement at the top -> use client; directive

Now this will allow you to utilize the client side features like hooks and event listeners in your component.

Using Client Components Effieciently -

Nextjs gives the usePathname() hook which you can import from the 'next/navigation'. This hook gives you the currently active path that is the path after your domain.

Always try to make majority of your components as an server components.
