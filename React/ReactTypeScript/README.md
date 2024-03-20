We can also use React js with type script.
TypeScript is built upon javascript.
TypeScript is an super set of javascript.
It extends javascript.
TypeScript adds static typing to java script. Because java script is on its own is dynamically typed.
To install typescript use the following command -
->npm install typescript
To create the empty package.json file type the following command -
-> npm init -y

Typescript is an superset of javascript and it cannot be run on the browser side so before sending it to browser side it must get converted to the javascript first and for that it must get compiled using some compiler.

And during that compilation process all our type annotation is removed.

For the compilation of typescript files we must use one of the following command

-> npx tsc fileName - it used for compiling the typescript file directly.

-> npx tsc configurationFileName - There exists an coinfiguration file where we mention that what files we want to compile.

There are following datatypes present in typescript -

1. Primitives - number , boolean , string

2. Complex types - array , objects

3. Function types and parameters

We also have null and undefined as datatype but we never assign these as datatype.

To assign complex datatype like array and object -

for array -

-> let hobbies : string[];

for objects -

-> let randomObject : {
name:string;
age : number;

}

-> randomObject = {

};

If you do not define the datatype then 'any' datatype is assigned to the variable.

Type Inference -

-> The mechanism of typescript of evaluating the datatype of any variable is called type inference and with the help of which typescript gives the type error.

Using Union Types -

-> We also have an type definition feature of Union type which allows for the variable to have more than one data type.

-> let name : string | number | boolean | string[] ;

-> now our name variable can have string , number and boolean value and also array or objects.

Understanding the type aliases -

-> There can be an cases where more than one variable are having same complex types and instead of repeating the types we can have one common type aliases for the complex type and use it multiple variables so that there will be no need to repeat that complex type again and again.

-> We can create the type aliases using the type keyword provided by the typescript. Basically it allowing you to create your own datatype which is the combination of several datatypes.

-> type Person={
name: string;
age:number;
};

-> let people : Person ;
-> let person : Person[];

Functions and Functions Type -

-> Function must also be assinged with the datatype after () so that it tells what type of value the function is going to return.

-> function add(a:number , b:number) : number | string { }

-> When the funtion is not returning nothing then wwe can assign void type whihc is equivalent to the undefined and null type.

Diving to Generics -

-> We can create an generic function by adding <> angular brackets so that when calling the function we can have any type.

-> function randomFunction<T>(value1 : T,value2 : T) : T
{
return value1+value2;
}

We say type is inferred when we do not assign any tpe to an variable but typescript itself inferred the type of variable based on the value assigned to the variable.

To create react application using the type script -

-> npx create-react-app app-name --template typescript

Now extra typescript compilation to javascript takes place.

Now in the package.json file we have the 4 dependencies extra typescript , @types/node , @types/react , @types/react-dom , @types/jest

These @types packages acts as an transaltion bridges between vanilla javascript library and typescript projects.

Since earlier we only have the 'react' and react-dom dependency but these were for javascript and to add the typescript functionality we must also have the @types/react and @types/react-dom dependency as well. SO that these vanilla js library can also work with typesscript as well.

Since we need transaltion from typescript to vanilla javascript library.
Not all library need @types packages because some library have built in types annotations.

Functional component can be converted into the generic function.

We must declare the functional component using the arrow function and we must define the type of every functional component as React.FC imported from 'react'. It is then converted by the @types/react package.

We can describe our props in between the angular bracktes React.FC<{items:string[]}> with their datatype.

We can describe our own datatype using the class , type or interface keyword.

In javascript when we declare class we can directly assign values to the class properties inside the constructor without declaring it outside of constructor.

Whereas in Typescript we must declare the variable outside of constructor with specific type and then use it inside the constructor otherwise it will give error.

We can store all the user-defined datatypes i.e class , interface , type inside the model folder.

The event passed as an parameter on every handler function is of type React.FormEvent. It is the type of event object.

React.MouseEvent is the type when you add the onClick listener or onChange attribute.

React.FormEvent is the type you assigned to event when using the onSubmit handler.

While using ref with typescript we must define the type by adding <> angular brackets after the useRef and passing the type of element we are using ref in.

For example - if we are using the ref in <input> element then we must pass useRef<HTMLInputElement>().

if we are using the ref in the button element then we must pass useRef<HTMLButtonElement>();

if we are using the ref in the paragraph element then we must pass useRef<HTMLParagraphElement>();

So every element is based on some HTMLInputElement , HTMLButtonElement or HTMLParagraphElement and etc.

We must pass these types while using useRef<>() in betweeen the angular brackets.

And additionally we must also pass the starting value to the () closing brackets like null initially to set the value of ref initially.

If there is an object with some property then to access the property using typescript -

1. If you are not sure about the value you must add the ? ex - objectName.property?.value;

2. If you are sure about the value you must add ! for ex - objectName.property!.value;

If you want to assign the function type to an function props you have to use

onAddProp : (paramters) => returnType

We will again add the <> angular brackets after the useState<>(). Inside the <> we must define the type ex - useState<Todo[]>();

bind() is an predefined method avaialable on the function to pre-configure the function parameter before its executions.

Inside the tsconfig.json if we do not assign the strict:"true" then if we do not assign the datatype to variable then any datatype is assigned to the variable.
