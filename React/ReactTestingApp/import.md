1. import {render} from '@teseting-library/react';

-> it is used for rendering the component inside the second argument function passed to the test function inside the AnyComponent.test.js file.

2. import {screen} from '@testing-library/react'

-> it gives access to the virtual dom or virtual screen.

-> We can use that screen to find the element from the screen.

-> screen has various function that have get , query and find function that are used for fetching the content from the screen.

-> get function will throw an error if the element is not found.
-> query function will not throw the error.
-> find function will returns the promise.

-> getByText() will return an element and if it is not able to find the element then it will throw an error.

-> screen.queryByText('text') returns null if the element is not found on the screen.

3. expect() is also an globally available method where we can pass the element we are fetching using the screen. methods. The expect method further have the toBeInDocument() method which tells that the element is in the rendered component screen or not.

4. import userEvent from '@testing-library/user-event';

-> userEvent is an object that helps us trigger user's event in the virtual screen.
-> userEvent.click() needs an one argument in which you want to simulate the click.
