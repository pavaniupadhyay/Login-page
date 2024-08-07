import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';
const Home = () => {
  const [signedInUser, setsignedInUser] = useState('');
  const [products, setProducts] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
      setsignedInUser(localStorage.getItem('signedInUser'))
  }, [])

  const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('signedInUser');
      handleSuccess('User Loggedout');
      setTimeout(() => {
          navigate('/signin');
      }, 1000)
  }

  const fetchProducts = async () => {
      try {
          const url = "http://localhost:8081.products";
          const headers = {
              headers: {
                  'Authorization': localStorage.getItem('token')
              }
          }
          const response = await fetch(url, headers);
          const result = await response.json();
          console.log(result);
          setProducts(result);
      } catch (err) {
          handleError(err);
      }
  }
  useEffect(() => {
      fetchProducts()
  }, [])

  return (
      <div>
          <h1>Welcome {signedInUser}</h1>
          <button onClick={handleLogout}>Logout</button>
          <div>
              {
                  products && products?.map((item, index) => (
                      <ul key={index}>
                          <span>{item.name} : {item.price}</span>
                      </ul>
                  ))
              }
          </div>
          <ToastContainer />
      </div>
  )
}

export default Home