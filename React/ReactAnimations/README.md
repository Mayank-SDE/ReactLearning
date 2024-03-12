React animation are important for improving the UI/UX of your web application.

There is an third party package called as Framer motion which is used for creating complex animation.

We can provide complex aniumation using the Framer motion library.

When you are making the cite project then you must add the .jsx extension behind as an extension not simply .js.

CSS transition allows you to tell CSS to smoothly transition betweeen two CSS property values.

ex - transform(0) to transform(30deg)

transition : property-name durations ease-in/ease-out;

For defining the animation we use the pre defined keyword

@keyframes animationName{

0%{

}

100%{

}

}

Now we can assign to any selector with the animation property assigned to the animationName.

h1{

    animation : animationName

}

But there is limitation of vanilla css animation and thus we need a library to make it easy to have animation in our application.

Using the vanilla css animation we are not able to animate the disppeareance of html elements.

Run
-> npm install framer-motion

import {motion} from 'framer-motion';

now replace the <div> with <motion.div>.

To make any html element invisible in the dom we can provide the opacity to zero.

If you want your list items to be animated step by step after each other instead of getting animated at the same time and this is called stagering.

We can enable staggering by adding the seconds you want every list item to wait as an value to the staggerChildren property of the transition property. And the number of seconds defined in the staggerChildren property is the amount of time one list item will wait for another list item.


We can also perform animation using in an imperative way.

If your assigning any prop value as an array then it is basically the key-frames through which the animation is going through from 0% to 100%.


