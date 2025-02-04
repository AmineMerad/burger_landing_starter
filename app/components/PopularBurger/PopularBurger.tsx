'use client'
import React from 'react'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';

const PopularBurger = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1324 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1324, min: 764 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 764, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='pt-[3rem] pb-[3rem] '>
        <h1 className='heading'>
            Our Popular <span className='text-red-600'>Burgers</span>
        </h1>
        <div className='w-[80%] mt-[4rem] mx-auto'>
            <Carousel 
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
            showDots={false}
             > 
             {/*  burger card */}
             <BurgerCard 
              title="Beef Bite"
              image='/images/b1.png'
              reviews='13'
              price='10.99$' />
              <BurgerCard 
              title="Beef Bite"
              image='/images/b2.png'
              reviews='10'
              price='12.99$' />
              <BurgerCard 
              title="Beef Bite"
              image='/images/b3.png'
              reviews='19'
              price='10.99$' />
              <BurgerCard 
              title="Beef Bite"
              image='/images/b4.png'
              reviews='14'
              price='14.99$' />
              <BurgerCard 
              title="Beef Bite"
              image='/images/b5.png'
              reviews='16'
              price='10.99$' />
              <BurgerCard 
              title="Beef Bite"
              image='/images/b1.png'
              reviews='13'
              price='10.99$' />
              <BurgerCard 
              title="Beef Bite"
              image='/images/b3.png'
              reviews='22'
              price='13.99$' />
            </Carousel>

        </div>
    </div>
  )
}

export default PopularBurger