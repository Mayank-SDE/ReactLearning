1. import {Link} from 'next/link';

<Link href="" alt=""> it avoid the page to get refershed.

2. import {usePathname} from 'next/navigation';

const path=usePathname();

3. Always add 'use client'; to make your component as client side component at the top of your page.

4. import Image from 'next/image';

-> It automatically detcts the size of image i.e width and height of the image.
-> It takes the whole image object imported from asset folder on the src attribute.
-> By default Image tag have the property loading set to 'lazy'. And to avoid this we can provide the priority attribute to load the image asap.
-> The <Image /> component needs to know the underlying height and width of the image i.e orignal width and height not the height and width adjusted through the css on attribute configuration. And the <Image /> is able to do this automatically.

-> Incase of dynamically loaded or resolved image either taking input image from the user or through the database. Simply the image is not available at the build time and its only available at the runtime. And for this we have an fill prop which is set in the <Image /> component.
-> <Image fill /> we can provide fill prop instead of specifying the width and height of image as we don't know the width and height of the image rendered dynamically in advance.
-> fill tells nextjs that it explicitly filled the image in the available space as defined by the parent component.

5. While importing anything if we want to configure the path from the root directory start with the from '@/' . It is configured inside the jsconfig.json file and it is given by default by the NextJS.

6. npm install better-sqlite3 package allows us to work with the SQLite Database.

-> It is an amazing SQL Database that can be used locally without setup of any external database server or any other complex setup.

7. notFound() imported from next/navigation when executed find the closest not-found.js file and execute it.And stops the rendering of the current component.

8. importing redirect from 'next/navigation'

-> It will redirect the user to the separate page.

9. importing useFormStatus from the react-dom. It returns the status object which have the pending property which is true or false based on the form submitting status. However it work inside the form element where we are using any custom component where we can use this hook. Basically the hook should be used inside the component whose parent element is form element.

10. useFormState() imported from the 'react-dom'

-> It is used for maintaing the state of the form which is submitted using the server actions.

-> Because useFormState() takes two arguments one is the actual server action that should be triggered when the form is submitted.

-> And the second parameter is the initial state that is return by the form state before it yields an new state after the server action is triggered.

-> It is similar to the state it also returns the array having two array values,
state and formAction which is used for setting the server action which is triggered when the form is submitted. As you are already setting the value of formAction by passing the first parameter on the
-> const [state,formAction] = useFormState(serverAction,initialState);

-> When the server action is triggered through the useFormState() then that means it is going to pass two parameters the first one is previousState and the second one is the formData.
