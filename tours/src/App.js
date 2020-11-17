import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(url)
    const tours = await response.json();
    console.log(tours)
  }

  /**
   * By default, it runs after every re-render
   * Callback function 
   * Second parameter: []; run only on initial render
   *                    [something]; re-run the errect if something changes 
   * You can have multiple useEffect functions 
   */
  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return <Loading />
  } 

  return (<main><Tours /></main>)
}

export default App
