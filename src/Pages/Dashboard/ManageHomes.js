import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MangeProductcard from '../../Components/Card/MangeProductcard';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';


const ManageHomes = ({role}) => {
    const [booking,setBooking] = useState([]);
    
    const {email} = useParams();
    console.log(email)
    useEffect(()=>{
        fetch(`https://server-nine-mocha.vercel.app/manage/${email}`)
        .then(res=>res.json())
        .then(data => setBooking(data))
    },[email])
    return (
        <div>
            {
                booking.map(book=><MangeProductcard
                key={book._id}
                book ={book}
                ></MangeProductcard>)

            }
        </div>
    );
};

export default ManageHomes;