We can validate whenever the user is doe with typing.

it may happen error is very long so we can reduce it considering the user experience.

For binding the label and the input field we can provide two attributes htmlFor="" to the label element and the id attribute to the input element which must be same.

Why page is getting reloaded after clicking the login button ?

-> Because we are having the button inside the form element and by default on clicking the button inside the form element it sends the http request to the server that is serving the website.

-> It is the by default behaviour of the form element.

-> To avoid sending the http request by the button to the server we must call event.preventDefault() method inside the onClick attribute of the button.

-> Another way of preventing it from sending the http request to the browser is by setting the type attribute to the value "button"

-> Another way is by adding the attribute onSubmit setting the value of an function and inside it calling the event.preventDefault(); On even if any button is clicked it will trigger the function specified inside the onSumbit attribute in the form element.

We can extract values using -

-> useState()

-> useRef() advantage of using this that we require less code as compared using state. The disadvantage of using ref ofr form input values is that on resetting the values to default using ref is not recommended.

-> We can use the native built in features which helps you getting hold of certain values.

-> It helps you by allowing you to create the special kind of object using the browser constructor function new FormData();

-> FormData() is provided by the browser and not provided by react. FormData() helps in getting hold of various input values inside the form by just passing the event.target as parameter. But all the input element must have the name props inside it.

const formData = new FormData(event.target);
const acquisationChannel = formData.getAll('acquisition');
const data = Object.fromEntries(formData.entries());
data.acquisition = acquisationChannel;
console.log(data);

You can consider it for taking the form data.

We can also use third party library ex- react-form-hook , formik docs
