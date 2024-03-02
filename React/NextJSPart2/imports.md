1. import {useRouter} from 'next/router';

-> It is an custom hook build by next team. it returns the router object which helps in accessing certain pieces of data. We can extract values encoded into the URL.

-> const router = useROuter(); now this router object have the query property. Now that query object have the dynamic file name written inside the the [] square brackets and we can directly accesss it as for ex - router.query.newsId.

-> const router=useRouter(); router does not only have the query property but also the push method and this pushes the new page into the stack of the pages and which is equivalent of using the Link component.

2. import { Link } from 'next/link';

-> It prevents the page to get reloaded as it was happening on using the anchor <a> tag.
-> It gives the feeling of SPA. i.e Single Page Application.

3. getStaticProps()

-> IT is the function which can be async also and it is executed by the next js before executing the component function which returns the JSX code so that we can fetch the data inside the getStaticProps() and return it as an javascript object having the props property inside whihc the data is stored.

-> This props is passed behind the scene to the component function and thus this is how we make the fetched data available for pre-rendering.

-> hence getStaticProps() is good for seo.

-> getStaticProps(){

    props:{

    },
    revalidate:10 //(seconds)

}

4. getStaticPaths() is used with getStaticProps() for telling the next js for the values that might take place of the dynamic pages such that the pages gets pre-rendered.

5. Both getStaticProps() and getServerSideProps() are used for pre-rendering of pages with the fetched data for better seo.

6. import head from 'next/head' this allows you to add the head element to the head section of your page.
