import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReconditionsCard from './ReconditionsCard';

const Reconditions = () => {
    const [product, setProduct] = useState([]);


    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:8000/allproduct/Reconditions`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    console.log(product);
    return (
        <div>
            {
                product.map(prd=><ReconditionsCard
                key ={prd._id}
                prd={prd}
                ></ReconditionsCard>)
            }
        </div>
    );
};

export default Reconditions;