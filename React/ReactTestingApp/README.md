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
