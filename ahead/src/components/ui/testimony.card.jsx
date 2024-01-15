import Image from 'next/image'
import React from 'react'

const Testimony = ({img}) => {

  const missionString = "Director's Mission: Pioneering"
  const missionString2 = "Personal Growth"
  const missionString3 = "Our Director at Ahead Group is dedicated to fostering an environment where personal growth takes center stage. With a vision for excellence, the mission is to instill values of discipline, creativity, and resilience. Through innovative educational programs, inclusive initiatives, and strategic partnerships, the Director aims to inspire a lifelong love for learning and build a legacy of leadership that transcends traditional boundaries. The goal is clear: guide individuals towards unlocking their fullest potential and navigating life's challenges with confidence and determination."

  return (
    <div>
     <section className="body-font transition-all duration-300 ease-in-out hover:shadow-lg">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className='rounded-md' src={img} alt="testimony" width={500} height={400} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#BA274A]">{missionString}
        <br className="hidden lg:inline-block"/> {missionString2}
      </h1>
      <p className="mb-8 leading-relaxed mt-1 text-md text-[#02111b]">{missionString3}</p>
     
    </div>
  </div>
</section>


    </div>
  )
}

export default Testimony