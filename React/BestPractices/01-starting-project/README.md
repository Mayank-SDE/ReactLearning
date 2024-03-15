# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The Accordion component are used for vertically stacking the content in the page. It isd intended to save some vertical space on the page by hiding the content and reducing the scrolling. Accordions contains the label and on clicking those label the content becomes visible.

We can also add the properties to the Accordion function by using the dot notation. So that we can add the AccordionItem component or other child component as an property to the Accordion component.

Render props are the function which are passed between the react components and then are called using the children() props in the child components.

Setting index as an value to key is not good practice as it is not directly linked to data and of the order of data changes it may affect the performance of component state.

Debouncing -

-> On updating the component on every key stroke may become cumbersome and inefficient.
-> debouncing is the technique where we don not update the state on every key stroke instead we define timing threshold where we update the state if the user stop typing for the couple of millisecond.
-> Debouncing means we are waiting for the user for finishing with the typing.

-> We can achive debouncing using the setTimeout() function by referring it to the ref() so that we can pass the our defined ref to the clearTimeout() function for clearing the previous timeout interval.
