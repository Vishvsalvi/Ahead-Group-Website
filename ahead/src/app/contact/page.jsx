"use client"
import React, { useState } from "react";

export default function Page() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();
    // Checl if all fields are filled
    if (!name || !email || !phone || !message) {
      alert("Please fill all fields");
      return;
    }
    console.log(name, email, phone, message);
  }


  return (
    <div>
    
   
      <section className=  " bg-[#fffff2] text-gray-600 body-font relative mt-16">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
  width="100%"
  height="100%"
  className="absolute inset-0"
  
  title="map"
  src="https://maps.google.com/maps?q=%20Bolinj%20Naka,Virar%20(W),%20Maharashtra,%20India-401303&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
></iframe>

      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Regd. Add.: 10, First Floor, Pancharatna Society, Bolinj Naka,
                  Virar (W), Thane, Maharashtra, India-401303</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a> */}
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">Add phone number</p>
        </div>
      </div>
    </div>
    <div className="rounded-lg bg-white p-8 shadow-md lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    required={true}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      required={true}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      required={true}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Write enquiry here..."
                    rows="8"
                    id="message"
                    required={true}
                  
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="relative px-5 py-3 overflow-hidden font-medium text-gray-800 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-700 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      Send Enquiry
                    </span>
                  </button>
                </div>
              </form>
          </div>
  </div>
</section>

    </div>
  );
}
