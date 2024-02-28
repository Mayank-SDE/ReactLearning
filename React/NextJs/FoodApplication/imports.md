1. import {Link} from 'next/link';

<Link href="" alt=""> it avoid the page to get refershed.

2. import {usePathname} from 'next/navigation';

const path=usePathname();

3. Always add 'use client'; to make your component as client side component at the top of your page.
