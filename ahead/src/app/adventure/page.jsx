"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Advent1 from "../../../public/Images/AdventureSportAndCamps/Advent_1.jpg";
import Image from "next/image";
import Family from "../../../public/Images/AdventureSportAndCamps/family.png";
import Safety from "../../../public/Images/AdventureSportAndCamps/safety.png";
import Zipline from "../../../public/Images/AdventureSportAndCamps/zip-line.png";

import Advent2 from "../../../public/Images/AdventureSportAndCamps/Advent_2.jpg";
import Advent3 from "../../../public/Images/AdventureSportAndCamps/Advent_3.jpg";
import Advent4 from "../../../public/Images/AdventureSportAndCamps/Advent_4.jpg";
import Advent9 from "../../../public/Images/AdventureSportAndCamps/Advent_9.jpg";
import Advent11 from "../../../public/Images/AdventureSportAndCamps/Advent_11.jpg";
import Advent8 from "../../../public/Images/AdventureSportAndCamps/Advent_8.jpg";

export default function Adventure() {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  const imagesForFeatures = [
    {
      title: "Diverse and Thrilling Activities",

      description:
        "Ahead Group offers a diverse range of adventure activities, catering to both adrenaline enthusiasts and those seeking more relaxed experiences. Whether it's heart-pounding activities like rock climbing and zip-lining or serene pursuits like nature treks, there's something for everyone.",

      image: Zipline,
    },
    {
      title: "Safety First Approach",

      description:
        "Safety is our top priority. We ensure that all our activities are conducted in a safe and controlled environment. Our instructors are highly trained and experienced, and we use only the best equipment. We also conduct regular safety audits to ensure that our safety standards are always met.",

      image: Safety,
    },

    {
      title: "Family Friendly Atmosphere",

      description:
        "We offer a wide range of activities that are suitable for the whole family. Whether you're looking for a fun day out with the kids or a relaxing weekend getaway, we've got you covered. Our activities are suitable for all ages and skill levels, so everyone can join in on the fun.",

      image: Family,
    },
  ];

  const images = [
    {
      src: Advent2,
      alt: "Image 1",
    },
    {
      src: Advent3,
      alt: "Image 2",
    },
    {
      src: Advent4,
      alt: "Image 3",
    },
    {
      src: Advent9,
      alt: "Image 4",
    },
    {
      src: Advent8,
      alt: "Image 7",
    },
    {
      src: Advent11,
      alt: "Image 8",
    },
  ];

  const videoLinks = [
    {
      url: "https://youtu.be/HQSeKt25f0o",
    },
    {
      url: "https://youtu.be/mjzAlrwze10",
    },
    {
      url: "https://youtu.be/vmpJG9CK2WI?si=dAVuPMTJTTA6UNi-",
    },
  ];

  return (
    <div className="bg-[#fffff2] pt-12">
      {/* Hero section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                src={Advent1}
                alt="Party"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-[#BA274A]">
                Belong to Something Bigger. Adventure Together.
              </h2>

              <p className="mt-4 text-[#02111b]">
                More than just camps, we are a family of adventure enthusiasts.
                Share campfire stories, push each others limits, and create
                bonds that last a lifetime. Our inclusive community welcomes
                all, from seasoned adventurers to wide-eyed beginners. Find your
                tribe, find your next adventure.Build lifelong friendships,
                conquer your fears, and return home transformed. The adventure
                awaits. Are you ready?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="body-font pt-10">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-[#BA274A] mb-20">
            Explore Our Adventures
            <br className="hidden sm:block" />
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {imagesForFeatures.map((feature, index) => {
              const { title, description, image } = feature;
              return (
                <div className=" p-4 md:w-1/3 flex" key={index}>
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
                    <Image src={image} alt={title} />
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-[#BA274A] text-lg title-font font-semibold mb-2">
                      {title}
                    </h2>
                    <p className="leading-relaxed text-base text-[#02111b]">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

            {/* Picture Gallery */}
      <section className="m-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#BA274A] sm:text-4xl">
              Picture Gallery
            </h2>
          </div>
        </div>

        <hr className=" bg-[#fffff2]" />

        <div className="mt-10 grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="w-full h-80">
              <Image
                className="w-full h-full rounded-sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}

          <div></div>
        </div>
      </section>
      
      {/* Video section */}

      <section className="m-10 bg-[#fffff2]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#BA274A] sm:text-4xl">
              Check Out Our Videos
            </h2>
          </div>
        </div>

        <hr />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* USE TAGLINE */}
          {videoLinks.map((video, index) => {
            const { url } = video;
            return (
              <div
                key={index}
                className="w-full flex items-center justify-center"
              >
                <ReactPlayer
                  className="w-full h-80 rounded-sm cursor-pointer object-cover "
                  url={url}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Question and Answer */}

<div className="container text-center text-2xl font-semibold mt-[8em]">

      <p>Contact us for additional details about the upcoming trips</p>
</div>

    </div>
  );
}
