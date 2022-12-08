import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllproductCart from './AllproductCart';

const Allproducsts = () => {
    //const [product, setProduct] = useState([]);


    //const { id } = useParams(); ///sekectCategories/Modified Car

    const { data: product = [] } = useQuery({
        queryKey: ['allproduc'],
        queryFn: async () => {
            const res = await fetch(`https://server-nine-mocha.vercel.app//allproduc`);
            const data = await res.json();
            return data
        }
    });


    // useEffect(() => {
    //     fetch(`https://server-nine-mocha.vercel.app//allproduc`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, []);
    console.log(product);
    return (
        <div className='gap-6'>
            {
                product.map(prd=>
                    <AllproductCart
                    key={prd._id}
                    prd={prd}
                    
                    ></AllproductCart>
                )
            }

        </div>
    );
};

export default Allproducsts;