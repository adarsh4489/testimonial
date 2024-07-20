import React from 'react'
import './App.css'
import reviews from './Components/data.js'
import Testimonial from './Components/Testimonial.jsx'

function App() {
  

  return (
    <div className='w-100 md:h-[100vh] sm:h-auto flex flex-col justify-center bg-slate-200 text-black'>
      <h2 className='text-center pt-4 text-3xl text-purple-600 font-bold'>Our Testimonial</h2>
      <div className='p-0.5 w-48 mx-auto bg-purple-600 '></div>
      <Testimonial reviews={reviews}/>
    </div>
  )
}

export default App
