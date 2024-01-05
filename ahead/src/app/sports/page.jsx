import Link from 'next/link'
import React from 'react'

export default function Sports() {
  return (
    <div>
      

<section className=" body-font bg-[#fffff2] ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">

      <div className="sm:w-1/2 mb-10 px-4 hover:shadow-md transition-all duration-300 ease-in-out py-3 rounded-sm ">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full"  src="https://images.unsplash.com/photo-1603714196939-6f6436c8d0c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxhZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D"/>
        </div>
        <h2 className="title-font text-2xl font-bold text-[#6A7062] mt-6 mb-3">Adventure Sports And Camps </h2>
        <p className="text-start leading-relaxed text-base  ">Embark on thrilling adventures with Ahead Group's Adventure Camps and Treks. Immerse yourself in the beauty of nature while experiencing adrenaline-pumping activities. Our camps are designed for both enthusiasts and beginners.</p>
        <button href="/adventure" className="text-center flex mx-auto mt-6 text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded"> <Link href="/adventure" >Explore</Link> </button>
      </div>

      <div className="sm:w-1/2 mb-10 px-4 hover:shadow-md transition-all duration-300 ease-in-out py-3 rounded-sm">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://plus.unsplash.com/premium_photo-1663013066703-d00f8538b642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRhZWt3b25kb3xlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
        <h2 className="title-font text-2xl font-bold text-[#6A7062] mt-6 mb-3 ">Martial Arts</h2>
        <p className="text-start leading-relaxed text-base ">Join our Dragon Warriors, where martial arts meet discipline and fitness. Our expert instructors provide top-notch training, fostering a sense of strength, focus, and self-confidence in every participant.</p>
        <button className="flex mx-auto mt-6 text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded">Explore</button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
