npm install framer-motion.

1. import {motion} from 'framer-motion'

-> Now replace the <div> with <motion.div>
-> It is an div with high capabilities that can be controlled by framer-motion to animate the div in highly performant way.

-> We can replace <anyHTMLElement> with <motion.anyHTMLElement>

-> We can animate prop to the motion.div element , animate wants the object as an value where we want to describe the animation we want to play.

-> animate={{
    x:,
    y:,
}}

-> animate props is used for providing the declrative animation where we assign javascript object as an value.

-> transition is also an props that is used to configure the animation we are applying. It also takes the js object as an value. Where you can define the duration:3(seconds). After applying all the css changes will take 3 seconds of time in transitions.

-> You can also set the type property inside the transition prop. type can have any value for example 'spring'.

-> If we are not having any kind of external state maintained for altering the animation value then we can provide the initial props to the motion.AnyHTML such that the the based on the initial state the animation is applied. It the animate prop value is different from the initial prop value then frame-motion will provide transition from the initial to animate value.

-> We can also provide disappereance of html element through the prop exit. exit also takes the js object as an value.

-> We also have props starting from while which are while:Focus , whileHover , whileInView , whileTap , whileDrag which allow you to provide animation state which are only applied while the user is tapping or hovering.

-> we can also add variants props to the motion component. This variants props is useful for defining and re-using certain animation state. We can have the keyvalue pair inside the variants object where we can re-use the value in other props using the key defined in the variants prop.

-> Those keys which are defined inside the variants can be accessible when enclosed using single or double quotes.

-> variants can also be used for triggering animation defined deep inside the component tree by setting an variant on the animation on a ancestor component.

-> So you can set three animation state on the motion component initial , animate , exit and you can also define the duration and style of the transition from one these state using the transition prop which also takes js object.

2. import {AnimatePresence} from 'framer-motion'

-> This is used for wrapping around those element which are conditionally rendered on the screen and we want to apply animation to those element.


3. import {useAnimate} from 'framer-motion';

-> This hook return two array elements [scope,animate] elements where the scope is the ref which you can add to the elements.

-> animate is the function which you can use in your code to imperatively trigger certain animation.

-> animate function takes an string argument which contains the css selectors to animate those elements 
    animate('inpit, textarea, .someClass',{});

-> The second argument of animation method is where you define the animation which should be played