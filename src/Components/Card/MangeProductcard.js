import React from 'react';

const MangeProductcard = ({book}) => {
    return (
        <div>
           
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Date
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <div className='flex items-center'>
                                            <div className='flex-shrink-0'>
                                                <div className='block relative'>
                                                    <img
                                                        alt='profile'
                                                        src={book?.image}
                                                        className='mx-auto object-cover rounded h-10 w-15 '
                                                    />
                                                </div>
                                            </div>
                                            <div className='ml-3'>
                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                    {book?.brandName}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>
                                            {book?.location}
                                        </p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>${book?.price}</p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>{book?.date}</p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <button  className='btn'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MangeProductcard;