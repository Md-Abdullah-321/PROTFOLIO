
import React from 'react'

export default function ProtfolioComponent({image, title, gitHub, liveLink, technology}) {
  return (
    
      <div className="lg:w-1/2 sm:w-full p-4 opacity-90">
        <div className="flex relative h-80">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover rounded-lg " src={image} />
          <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-light opacity-0 hover:opacity-90 text-center rounded-lg ">
            <h2 className="tracking-widest text-2xl title-font font-bold text-center text-buttonColor mb-5 md:mb-1 mt-5 md:mt-24 ">{title}</h2>
            
            <p className="title-font text-sm font-light text-gray-900 mb-1"><span className='font-bold mr-2'>GitHub:</span> 
            <a className='hover:text-secondary hover:font-bold' href={gitHub} >{gitHub}</a>
            </p>

            <p className="title-font text-sm font-light text-gray-900 mb-1"><span className='font-bold mr-2'>Live Link:</span> 
            <a className='hover:text-secondary hover:font-bold' href={liveLink} >{liveLink}</a>
            </p>

            <div className='mt-5 md:mt-14 leading-10'>
                {technology.map((item) => item)}
            </div>
          </div>
        </div>
      </div>
  )
}
