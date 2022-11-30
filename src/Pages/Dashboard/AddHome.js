import React, { useContext, useState } from 'react'
import { format } from 'date-fns'
import AddServiceForm from '../../Components/Form/AddServiceForm'
import { getImageUrl } from '../../api/imageUpload'
import { addHome } from '../../api/services'
import { AuthContext } from '../../contexts/AuthProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddHome = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loading,setLoaing]= useState(false)
  const [arrivalDate, setArrivalDate] = useState(new Date())
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  )

  const handleSubmit = event => {
    event.preventDefault()
    const location = event.target.location.value
    const brandName = event.target.title.value
    const date = format(arrivalDate, 'P')
    const price = event.target.price.value
    const advertisement = event.target.advertisement.value
    const condition = event.target.total_guest.value
    const quantity = event.target.bedrooms.value
    const description = event.target.description.value
    const image = event.target.image.files[0]
    setLoaing(true)
    getImageUrl(image)
      .then(data => {
        const homeData = {
          location,
          brandName,
          advertisement,
          date,
          price,
          condition,
          quantity,
          description,
          image: data,
          hostname: user?.displayName,
          hostimage: user?.photoURL,
          hostemail: user?.email,
          
        }

        addHome(homeData).then(data => {
          console.log(data)
          setLoaing(false)
          toast.success('You successfully add your advertises')
          navigate(`/dashboard/manage-homes/${user?.email}`)
        })
      })
      .catch(err => {
        console.log(err)
        setLoaing(false)
        toast.error(err.message);
      })
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
        Add Product
      </h1>
      <AddServiceForm
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        loading={loading}
      />
    </>
  )
}

export default AddHome
