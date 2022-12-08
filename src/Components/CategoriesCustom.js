import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CetagorisModified from './CetagorisModified';

const CategoriesCustom = () => {
    const [product, setProduct] = useState([]);


    const { id } = useParams(); ///sekectCategories/Modified Car


    useEffect(() => {
        fetch(`https://server-nine-mocha.vercel.app/allproduct/Modified`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    console.log(product);

    return (
        <div>
            <div className='flex gap-4'>

                {
                    product.map(prd => <CetagorisModified
                        key={prd._id}
                        prd={prd}
                    ></CetagorisModified>)
                }
            </div>
            
        </div>
    );
};

export default CategoriesCustom;