We must have automated testing for react application.

It's hard to test all possible combinations and scenarios. Thus automated testing was introduced.

In automated testing you write extra code that test your entire application.

You can test your individual building block of your application.

There are three types of testing -

Unit test must be top most priority among all test.

1. Unit test -

-> Test the individual building block (function , component) in isolation.

2. Integrated test -

-> Testing the combination of multiple building blocks.
-> Project typically contains a couple of integrated test.

3. End to End test -

-> Testing workflow of your application.
-> Logging the user in and going to certain page.

For testing react code we need

1. an extra tool for running our tests and asserting results. - we need an Jest. An popular tool for testing.

2. tool for simulating (rendering) React application and components. - we need an react testing library for simulating the browser

Both react testing library and the jest are built in with the project created using the create-react-app.

After creating our project using the create-react-app we will not be deleting the App.test.js file and setupTests.js file as we will be needing these file for defining test for our application.

Inside the App.test.js file there is an test() method which takes two arguments first argument is the description of the test.

The second argument is the function which contains the testing code.

just like npm start is used for running our application. In the similar manner we can test our application by executing the command npm test.

For separate component we can have separate test file following the convention ex-

for Header.js the testing file name should be Header.test.js .

test() method is globally available.

We always want to write our test using three A's -

1. Arrange - set up the test data , test conditions and test environment.

2. Act - Run logic that should be tested. eg - execute function.

3. Assert - Compare execution result with the expected results.

Inside the screen.getByText() we can pass the regular expression or normal string as well.

The second argument inside the screen.getByText() we can pass the js object which have the exact property which is either true or false if it is false then the required string will get matched even if it is case insensitive and if it is an substring.

We are not defining the secind argument {exact:false} then it will look for the exact match.

We may have thousands of tests define in our application and to organize these test we may want of different test suites.

For example all the testing related to one feature or one component can be grouped into one testing suites.

You create the testing suite by using the global describe() function.

When more than one component gets invloved then we call it as integrated testing.

We can also test asynchronous code.

Generally we do send request to real server in test. Because we only test code which we have wrote and hence we do not need to check whether the fetch api is able to send request properly or not instead we want to check wheter after recieving the data from server the component is able to render it or not properly.

Thus we replace the fetch function with the mock function i.e dummy function whcih will accept the request and give the response.

jest have built in support for mocking function.

Inside our test function we will be overriding the

window.fetch=jest.fn(); //The fetch function is overridden

Now we will be setting the value of response resolved via calling mock function -

window.fetch.mockResolvedValueOnce({
json: async ()=>{
return [Any value you want to return];
}
});

so that we can create mock function.

Read official documentation of jest and testing react library.
