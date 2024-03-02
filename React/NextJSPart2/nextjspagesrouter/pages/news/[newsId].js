import React from 'react'
import { useRouter } from 'next/router';
//our.domain.com/news/any-dynamic-value

const DetailPage = () => {

    const router = useRouter();

    const newsId = router.query.newsId;

    //sednd a request to backend api to fetch
    // news with the help of newsId.



    return (
        <h1>DetailPage</h1>
    )
}

export default DetailPage