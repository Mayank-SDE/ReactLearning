Everything happens on the same page - the URL will never change.

Linking to sub-page is therefore impossible.

How does we are going to linking to certain resources.

Bu building application without linking with each other and using same url we are forcing the user to start with the same page.

We need to provide an particular url that will load to certain part of the web application.

Thus Single page Routing comes into play. Multiple pages in single page aaplication.

different urls are leading different pages of your web application.

1. What is client-side routing ?
2. How to use the package called React-router ?
   -> React router brings the feeling of multiple pages in our SPA i.e Single page application.

3. Data Fetching and submission.

What is Routing ?

When you visit website you can append the path for a particular page.

Different url paths loads different parts of the screen.

When building complex user interfaces we will be building SPA.

With SPAs you only sends one HTML request & response. Page(URL) changes are handled by client-side react code.

Visible content are changed without fetching the new HTML file.

To add routing we start by adding the external package.

-> npm install react-router-dom

react-router-dom package belongs to the react router tool.

This package helps in listening different urls so that we can change our UI.

We must define the routing i.e for which URL , Which component is going to be rendered.

Defining Routes ?
-> import { createBrowserRouter } from 'react-router-dom';

createBrowserRouter is an function provided by the react-router-dom package which allows us to define the routes we want to add.

To this function we pass the array of route definition objects.

Where every object defines some route.

These routes definition object contains several properties like path=''

Instead of using the anchor tag <a> we use <Link> tag which uses the to attribute and its prevent the browser from sending the http request and refreshing the page.

We are importing the createBrowserRouter from the 'react-router-dom' and createBrowserRouter is used for creating the routes. We pass the array containing different javascript objects which consists of path and element attribute where path is the url to which the element contining component is mapped.

With path , element , attribute there is one more attribute that is children attribute which is used for setting common parent component on multiple components.

We can add the special errorElement attribute on the Route definitions so that the component we have choosen for showing error will be assigned as an value to the errorElement property inside the route definition.

NavLink is also provided by react-router-dom which is similar to Link but it additionally provide the className attribute which takes function as an value where that function takes {isActive} object which becomes true if the NavLink is active and false if the navLink is not active. Thus it is used for highlighting the NavLink.

To navigate through different componenets using the different urls we can use the <NavLink> or <Link> tags.

To switch to different component via route programmatically using the useNavigate() hook from the react-router-dom library.

-> const navigate = useNavigate();
-> navigate("/path");
