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

If we want to raech the page - localhost:3000/about and to achieve this we will be adding the about folder inside the app folder.

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

Adding sqllite dependency -> npm install better-sqlite3

This package will allow us to work with SQLLite database.

We can directly interact with the database in server react components.

Server component function can be converted into the async function which you were not able to do in the react component.

NextJS caches any page you visited including the data of the page.Thus it is fast just like we were using @tanstack/react-router library for caching functionality.

To show something while loading you can add the code inside the loading.js file. Just like page , layout , loading is the reserved filename.

It becomes active if any sibling page or layout or nested page or layout is loading the data.
The content of loading.js is rendered as fallback until the content is there.

Suspense is an component imported from react and it allows you to handle loading state and show fallback content until the data or resource has been loaded.

The error.js must be the client side react component and it will handle the client side as well as the server side error. And this is why you must add the 'use client'; directive at the top of the client react component.

If the input type is file in the input element then we can store the file in the const file like -

const [pickedImage,setPickedImage]=useState();

const file=event.target.files[0];

const fileReader=new FileReader();

fileReader.onload=()=>{
setPickedImage(fileReader.result);
}

fileReader.readAsDataURL(file);

We must also provide the accept="image/png,image/jpeg" attribute to the input element.

We can add the 'use server'; directive inside the function and it creates the server action which is guranteed to get executed on the server. To completely create an server action function we must add the async keyword ahead of the function inside which we define the 'use server'; directive.

This feature is provided so that you can use this function as an value on the action attribute on the form element.

Now we can handle the form submission inside this server action function. Now in the server action function we can have the by default attribute formData which is the data submitted to the form.

And now we can create our own object and assign the value of formData in the below manner -

async function shareMeal(formData)
{
const meal={
title:formData.get('title'),
name:formData.get('name')
}
}

<form action={shareMeal}>

<input name='title' />
<input name='name'>
</form>

However you are not alowed to have Server actions in the client react component.

And you always want to separate the server side logic and the jsx code rendering.

And to achieve this separation we can haev an separate file named as actins.js where at the top you define the 'use server'; directive which makes all the functions define inside the actions.js file as the server actions.

One more advantage of creating the server actions separately is that now we can also use the server action inside the react client component and react server component together. As earlier where we have used the 'use client'; directive there we cannot use the 'use server'; directive. As it mmight throw an error.

Always try to separate the client side code and the server action to avoid security issues.

We are installing an new package
-> npm install slugify (SO that we can create slug -> meal.slug=slugify(meal.title,{lower:true}));
-> npm install xss (To get prevented from cross site scripting attack. meal.instructions=xss
(meal.instructions));

Whenever you take the input from the user and used this input to render on the UI you must use the xss package to get it prevented from the cross-site-scripting-attack.

Storing the user uploaded images in the public folder also has its own disadvantages.

Before uploading any file to the database make sure that the fileName is uniques and will never get conflict with other file names.

For uploading the file to the file system we will be using the node js api
->
import fs from 'node:fs';

We can use the fs to create the writeStream

-> fs.createWriteStream('path in which you want to write')

Right now we are only providing the validation from the client side component by adding the required attribute on all the input elements but we must also provide the server side validation because the client side validation may get alter from the chrome developer tools.

So client side validation is not enough and you must add the server side validation either through third party library or putting your own logic on the server side.

To move from development to production we can run the following command -

-> npm run build - It will create the build named folder and that folder will be dployed because it contains the minified version of your application.

-> Now if you run -> npm start this will start the production server and no the development server.

Next JS pre-renders all the non-dynamic pages i.e static pages are pre-rendered and then caches it so that it is visible to all the users. The downside is that it never re-fetches the meals because the code never executed again.

Thus we must tell the next js to clear the cache.And we can do this in the sever action right after we save the meal before i redirect. revalidatePath() function tells the next js to clear the cache of particular path.

revalidatePath(path,type); imported from 'next/cache'
type value either can be the 'page' which is the default value and tells the next js only to clear the cache of the that particular path and not the children path but if we set this type to layout then it means that all the children path cache are also removed.

The image is missing because local folders are not stored inside the .next folder and that .next folder is serving our next js application during production level.

The dynamic files which are going to be saved at the runtime must be stored insde the third party service like Amazon AWS S3.

As explained in the previous lecture, storing uploaded files (or any other files that are generated at runtime) on the local filesystem is not a great idea - because those files will simply not be available in the running NextJS applications.

Instead, it's recommended that you store such files (e.g., uploaded images) via some cloud file storage - like AWS S3.

AWS S3 is a service provided by AWS which allows you to store and serve (depending on its configuration) files. You can get started with this service for free but you should check out its pricing page to avoid any unwanted surprises.

In this lecture, I'll explain how you could use AWS S3 to store uploaded users images & serve them on the NextJS website.

1. Create an AWS account

In order to use AWS S3, you need an AWS account. You can create one here.

2. Create a S3 bucket

Once you created an account (and you logged in), you should navigate to the S3 console to create a so-called "bucket".

"Buckets" are containers that can be used to store files (side-note: you can store any files - not just images).

Every bucket must have a globally unique name, hence you should become creative. You could, for example, use a name like <your-name>-nextjs-demo-users-image.

I'll use maxschwarzmueller-nextjs-demo-users-image in this example here.

When creating the bucket, you can confirm all the default settings - the name's the only thing you should set.

3. Upload the dummy image files

Now that the bucket was created, you can already add some files to it => The dummy images that were previously stored locally in the public/images folder.

To do that, select your created bucket and click the "Upload" button. Then drag & drop those images into the box and confirm the upload.

Thereafter, all those images should be in the bucket:

4. Configure the bucket for serving the images

Now that you uploaded those dummy images, it's time to configure the bucket such that the images can be loaded from the NextJS website.

Because, by default, this is not possible! By default, S3 buckets are "locked down" and the files in there are secure & not accessible by anyone else.

But for our purposes here, we must update the bucket settings to make sure the images can be viewed by everyone.

To do that, as a first step, click on the "Permissions" tab and "Edit" the "Block public access" setting:

Then, disable the "Block all public access" checkbox (and with it, all other checkboxes) and select "Save Changes".

Type "confirm" into the confirmation overlay once it pops up.

That's not all though - as a next (and final step), you must add a so-called "Bucket Policy". That's an AWS-specific policy document that allows you to manage the permissions of the objects stored in the bucket.

You can add such a "Bucket Policy" right below the "Block all public access" area, still on the "Permissions" tab:

Click "Edit" and insert the following bucket policy into the box:

{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "PublicRead",
"Effect": "Allow",
"Principal": "_",
"Action": [
"s3:GetObject",
"s3:GetObjectVersion"
],
"Resource": [
"arn:aws:s3:::DOC-EXAMPLE-BUCKET/_"
]
}
]
}
Replace DOC-EXAMPLE-BUCKET with your bucket name (maxschwarzmueller-nextjs-demo-users-image in my case).

Then, click "Save Changes".

Now the bucket is configure to grant access to all objects inside of it to anyone who has a URL pointing to one of those objects.

Therefore, you should now of course not add any files into the bucket that you don't want to share with the world!

To test if everything works, click on one of the images you uploaded (in the bucket).

Then click on the "Object URL" - if opening it works (and you can see the image), you configured everything as needed.

5. Update the NextJS code to use those S3 images

Now that the images are stored + served via S3, it's time to also load them from there in your NextJS app.

As a first step, you can delete the public/images folder (so that an empty public/ folder remains).

Now, if you also delete the .next folder in the NextJS project and you then visit localhost:3000/meals, you should see a bunch of meals without images.

To bring them back, as a first step, edit the database data by updating the initdb.js file: Change all the image property values from image: '/images/burger.jpg', to image: 'burger.jpg' (and do that for all meals).

Alternatively, you find an updated initdb.js file attached.

Next, go to the components/meals/meal-item.js file (which contains the MealItem component) and update the <Image> src:

<Image
src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${image}`}
alt={title}
fill
/>
Of course, use your S3 URL / bucket name!

The new src value is a string that contains the S3 URL to your bucket objects (i.e., the URL you previously clicked for testing purposes - without the image file name at the end). The actual image name that should be loaded is then dynamically inserted via ${image}.

Note: This will only work if the images stored in the S3 bucket have the names referenced in the initdb.js file!

You should also update the app/meals/[mealSlug]/page.js file and make sure that the image on this page is also fetched from S3:

<Image
src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
alt={meal.title}
fill
/>
Of course, use your S3 URL / bucket name!

Now, to reset the database data, you should delete your meals.db file (i.e., delete the SQLite database file) and re-run node initdb.js to re-initialize it (with the updated image values).

If you do that, and you then restart the development server (npm run dev), you'll notice that you now get an error when visiting the /meals page:

Error: Invalid src prop (https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/burger.jpg) on `next/image`, hostname "maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com" is not configured under images in your `next.config.js`

6. Allowing S3 as an image source

You get this error because, by default, NextJS does not allow external URLs when using the <Image> component.

You explicitly have to allow such a URL in order to get rid of this error.

That's done by editing the next.config.js file:

const nextConfig = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com',
port: '',
pathname: '/**',
},
],
},
};
Of course, use your S3 URL / bucket name!

This remotePatterns config allows this specific S3 URL as a valid source for images.

With the config file updated + saved, you should now be able to visit /meals and see all those images again.

7. Storing uploaded images on S3

Now that we can see those dummy images again, it's finally time to also "forward" user-generated (i.e., uploaded) images to S3.

This can be done with help of a package provided by AWS - the @aws-sdk/client-s3 package. This package provides functionalities that allow you to interact with S3 - e.g., to store files in a specific bucket.

Install that package via npm install @aws-sdk/client-s3.

Then, go to your lib/meals.js file and import the AWS S3 SDK (at the top of the file):

import { S3 } from '@aws-sdk/client-s3';
Next, initialize it by adding this line (e.g., right above the line where the db object is created):

const s3 = new S3({
region: 'us-east-1'
});
const db = sql('meals.db'); // <- this was already there!
Almost there!

Now, edit the saveMeal() function and remove all code that was related to storing the image on the local file system.

Instead, add this code:

s3.putObject({
Bucket: 'maxschwarzmueller-nextjs-demo-users-image',
Key: fileName,
Body: Buffer.from(bufferedImage),
ContentType: meal.image.type,
});
Of course, use your S3 URL / bucket name!

Also make sure to save the image filename under meal.image:

meal.image = fileName;
The final saveMeal() function should look like this:

export async function saveMeal(meal) {
meal.slug = slugify(meal.title, { lower: true });
meal.instructions = xss(meal.instructions);

const extension = meal.image.name.split('.').pop();
const fileName = `${meal.slug}.${extension}`;

const bufferedImage = await meal.image.arrayBuffer();

s3.putObject({
Bucket: 'maxschwarzmueller-nextjs-demo-users-image',
Key: fileName,
Body: Buffer.from(bufferedImage),
ContentType: meal.image.type,
});

meal.image = fileName;

db.prepare(
`   INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
`
).run(meal);
} 8) Granting the NextJS backend AWS access permissions

Now, there's just one last, yet very important, step missing: Granting your NextJS app S3 access permissions.

We did configure S3 to serve the bucket content to everyone.

But we did not (and should not!) configure it to allow everyone to write to the bucket or change the bucket contents.

But that's what our NextJS app (via the S3 AWS SDK) now tries to do!

To grant our app appropriate permissions, you must set up AWS access keys for your app.

This is done by adding a .env.local file to your root NextJS project. This file will automatically be read by NextJS and the environment variables configured in there will be made available to the backend (!) part of your app.

You can learn more about setting up environment variables for NextJS apps here: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables.

In this .env.local file, you must add two key-value pairs:

AWS_ACCESS_KEY_ID=<your aws access key>
AWS_SECRET_ACCESS_KEY=<your aws secret access key>
You get those access keys from inside the AWS console (in the browser). You can get them by clicking on your account name (in the top right corner of the AWS console) and then "Security Credentials".

Scroll down to the "Access Keys" area and create a new Access Key. Copy & paste the values into your .env.local file and never share these keys with anyone! Don't commit them to Git or anything like that!

You can learn more about them here: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

With all that done, finally, you should be able to create new meals, upload images and see them on /meals. Even in production! Because now, the images are stored on S3!

You find the finished, adjusted code attached to this lecture. Please note that the .env.local file is not included - you must add it (and use your own credentials) if you want to run the attached code.

We specify and export the metadata name object in the layout.js file inside the app folder. And it is the meta data for all the routes unti and unless the layout.js is defined separately inside any folder.

Any nested layout metadata will also win iver any layout metadata.

To add any dynamic metadata instead of exporting the const metadata.

we export async function generateMetadata(). When NextJS will not able to look for the const metadata it will look for the async generateMetadata() function.

and if there is such an function NextJS will execute for you. Then its your job to return that metadata in that function.
