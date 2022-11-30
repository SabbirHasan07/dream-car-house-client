import React, { useEffect, useState } from 'react'

import ExpCard from '../Components/Card/ExpCard'
import { Link } from 'react-router-dom'
import HomeCard from '../Components/Card/HomeCard'
import Spinner from '../Components/Spinner/Spinner'
import { getAllHomes } from '../api/allservices'
import first from '../images/se-image-e273a881495acbebe4fc6f0a150b8678.jpg'
import second from '../images/Ferrari-488-GTB-main.jpg'
import trird from '../images/58e03110e4830815c7378bfb314cc916.jpg'
import fourth from '../images/11-1024x555.jpg'


const Home = () => {
  const [loading, setLoading] = useState(false)

  const [homes, setHomes] = useState([])
  useEffect(() => {
    setLoading(true)
    getAllHomes()
      .then(data => setHomes(data))
      .catch(err => console.log(err))

  }, [])


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cetagories`)
      .then(res => res.json())
      .then(data => {

        console.log(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={first} className="w-full " alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={second} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={trird} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={fourth} className="w-full" alt=''/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>


        <div className='flex-1'>
          <div>
          </div>
          <div>
            <div className='flex justify-between px-4 mt-10'>
              <p className='text-xl font-bold'>Advertisement</p>
              <Link to='/allProducts'>
                <p>See All</p>
              </Link>
            </div>
            <div className='container pb-8 pt-2 mx-auto'>
              <div className='flex flex-wrap'>
                {homes.slice(0, 3).map((home, i) => (
                  <HomeCard key={i}
                    home={home} />
                ))}
              </div>
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div >
              <div className='flex justify-between px-4'>
                <p className='text-xl font-bold'>Categories</p>
              </div>
              <div className='container pb-8 pt-2 mx-auto'>
                <div className='flex flex-wrap gap-6'>
                  <ExpCard />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home
