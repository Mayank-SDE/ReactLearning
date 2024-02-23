import React from 'react'
import { useParams, Link } from 'react-router-dom';
const ProductDetail = () => {

    const params = useParams();


    return (
        <>
            <h1>Products Details</h1>
            <p>{params.id}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    )
}

export default ProductDetail