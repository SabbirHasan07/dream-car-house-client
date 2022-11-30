import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoriesBrandNew from './CategoriesBrandNew';

const Categories = () => {
    const [product, setProduct] = useState([]);


    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:8000/allproduct/Like%20New`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    console.log(product);

    return (
        <div>
            <div className='flex gap-4'>

                {
                    product.map(prd => <CategoriesBrandNew
                        key={prd._id}
                        prd={prd}
                    ></CategoriesBrandNew>)
                }
            </div>
            
        </div>
    );
};

export default Categories;