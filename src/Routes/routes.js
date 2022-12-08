import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import Checkout from '../Pages/Checkout'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'
import Welcome from '../Pages/Dashboard/Welcome'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AddHome from '../Pages/Dashboard/AddHome'
import ManageHomes from '../Pages/Dashboard/ManageHomes'
import Categories from '../Components/Categories'
import CategoriesCustom from '../Components/CategoriesCustom'
import Allproducsts from '../Components/Allproducsts'
import Reconditions from '../Components/Reconditions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/allproducts/:id',
        element: <Details />,
        loader:({params})=>{
          fetch(`https://server-nine-mocha.vercel.app/allproducts/${params.id}`)
        }
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/sekectCategories/Like New',
        element: <Categories/>,
      },
      {
        path: '/allProducts',
        element: <Allproducsts/>,
      },
      {
        path: '/sekectCategorie/Modified',
        element: <CategoriesCustom/>,
      },
      {
        path: '/sekectCategories/Reconditions',
        element: <Reconditions/>,
      },
      {
        path: '/sekectCategories/Recondition Car',
        element: <Categories/>,
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout />

          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <Welcome />,
      },
      {
        path: 'my-bookings/:email',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'become-host',
        element: (
          <PrivateRoute>
            <BecomeAHost />
          </PrivateRoute>
        ),
      },
      {
        path: 'all-users',
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: 'all-bookings/:email',
        element: (
          <PrivateRoute>
            <AllBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-home',
        element: (
          <PrivateRoute>
            <AddHome />
          </PrivateRoute>
        ),
       
      },
      {
        path: 'manage-homes/:email',
        element: (
          <PrivateRoute>
            <ManageHomes></ManageHomes>
          </PrivateRoute>
        ),
      }
    ],
  },
])

export default router
