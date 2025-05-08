import React from 'react'

const Hero = () => {
  return (
    <section className='text-center py-10 bg-gray-100'>
        <img className='inline rounded-2xl w-3xs shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxl1HJ98dfvdyOLDQccASYb8or2Vn6x0SBA&s" alt="" />
        <h2 className='text-3xl font-bold mt-2' >🎨Build amazing UIs with React & Vite</h2>
        <p className='text-gray-900 mt-2'>Fast, lightweight and mordern frontend development</p>
        <button className= 'bg-blue-500 mt-4  text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'>🚀Get started</button>
    </section>
  )
}
export default Hero