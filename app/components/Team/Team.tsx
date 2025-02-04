import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>Meet Our Proffesionnal <span className='text-red-600'>Chefs</span>
        </h1>
        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
            {/* team card */ }
            <div data-aos='fade-wight' data-aos-anchor-placement='top-center'  >
              <TeamCard image="/images/t1.jpg" name="John Doe" position="kitchen Porter" />
            </div>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='300'  >
              <TeamCard image="/images/t2.jpg" name="John Doe" position="Chef Executif" />
            </div>
            <div data-aos='fade-riht' data-aos-anchor-placement='top-center' data-aos-delay='600'  >
              <TeamCard image="/images/t3.jpg" name="John Doe" position="Pizzayolo" />
            </div>

            
            
            
        </div>
    </div>
  )
}

export default Team