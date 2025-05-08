import React from 'react'

const Article = () => {
  return (
    <section className="container mx-auto p-6 rounded-lg ">
        
        <h1 className='text-2xl font-bold'>📰Latest News</h1>
        <div className="flex shadow-lg bg-white p-4 md:flex ">
        
            <img className='  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCbvccA-zVBcvpWnVr307HuODmPMC86j49w&s" alt="" />
            
            
            <div className="article-content ml-4">
                <h1 className='text-xl font-bold'>🚀Vite is Revolutionizing Frontend</h1>
                <p className='mt-2'>Vite is a next-gen Frontend tool that delivers fast Development</p>
            </div>
        </div>
        
       
        
       
    </section>
  )
}

export default Article