"use client";

import Image from "next/image";
import kick from "../../public/Images/Icons/taekwondo.png";
import school from "../../public/Images/Icons/school.png";
import education from "../../public/Images/Icons/education.png";
import hiking from "../../public/Images/Icons/hiking.png";
import leader from "../../public/Images/Icons/leader.png";
import community from "../../public/Images/Icons/community.png";


import Slide1 from "../../public/Images/SliderImages/Slide1.jpg";
import Slide2 from "../../public/Images/SliderImages/Slide2.JPG";
import Slide3 from "../../public/Images/SliderImages/Slide3.jpg";
import Slide4 from "../../public/Images/SliderImages/Slide4.jpg";


import Advent10 from "../../public/Images/AdventureSportAndCamps/Advent_9.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "swiper/css";

const descriptionAndIcons = [
  {
    title: "Tiny Minds, Big Dreams: Pre-Primary School",
    description:
      "Give your child the best start in life with Ahead Group's Pre-Primary School. Our curriculum is designed to help your child develop their social, emotional, and cognitive skills, preparing them for the next step in their educational journey.",
    icon: school,
  },
  {
    title: " Primary Education Beyond Boundaries: Primary School",
    description:
      "Experience education that goes beyond the classroom at Ahead Group's Primary School. Our dynamic approach to learning encourages curiosity and critical thinking, preparing students not just for exams but for the challenges of the ever-evolving world.",
    icon: education,
  },
  {
    title: " Kick into Confidence: Taekwondo Classes",
    description:
      "Step into the world of confidence and discipline with Ahead Group's Taekwondo classes. Our experienced instructors blend the art of self-defense with character development, empowering you to kick your way to both physical and mental strength.",
    icon: kick,
  },
  {
    title: "Conquer Nature, Conquer Yourself: Adventure Camps/Treks",
    description:
      "Explore the great outdoors with Ahead Group's Adventure Camps and Treks. Our experienced instructors will guide you through the wilderness, helping you develop your physical and mental strength as you conquer nature and yourself.",
    icon: hiking,
  },
  {
    title: "Develop, Thrive, Succeed: Holistic Development Programs",
    description:
      "Join Ahead Group's holistic development programs to unlock your full potential. From fostering creativity to building leadership skills, our programs go beyond academics, shaping well-rounded individuals ready to thrive in a competitive world.",
    icon: leader,
  },
  {
    title: "Community Connection: Where Journeys Unite",
    description:
      "Become part of the Ahead Group community, a vibrant space where individuals connect, grow, and celebrate achievements. Whether it's through martial arts, education, adventure, or personal development, our community is a supportive network fostering lasting connections.",
    icon: community,
  },
];

const images = [Slide2, Advent10, Slide1, Slide4];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-[#FFFFF2]">
      <div>
        {/* // 50% on small screens and 33% on larger screens. */}

        <Carousel
          opts={{
            align: "start",
            loop: true,
            items: 1, // Set the number of items to display to 1
          }}
          className="mx-16" // Set the height to 75% of the screen
        >
          <CarouselContent className="rounded-md" >
            {images.map((item, index) => (
              <CarouselItem key={index} className="md:w-1/1 lg:w-1/1 rounded-md">
                <Image
                  alt="Slide"
                  src={item}
                  // style={{ width: "100%", objectFit: "cover" }}
                  className="w-full h-[28rem] md:h-[23rem] lg:h-[35rem] xl:h-[42rem] object-cover rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <section className="mt-5 ">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-[#BA274A] text-3xl font-bold sm:text-4xl">
              What is Ahead Group ?
            </h2>

            <p className="mt-4 text-[#02111b]">
              Ahead Group is a group of enthusiastic people who come together
              and share their great ideas, thoughts and views. Ahead Group
              spreads the importance of health, education, adventure and sports
              development and accordingly conducts activities for the same.
              Plans and projects are designed to empower youth with knowledge
              and skills that will help them to make wise life choices.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {descriptionAndIcons.map((item, index) => (
              <div
                key={index}
                className=" border border-gray flex items-start gap-4 transition-all duration-300 ease-in-out hover:shadow-md rounded-sm py-2 px-4"
              >
                <span className="shrink-0 rounded-lg p-4">
                  <Image alt={item.icon} src={item.icon} height={60} />
                </span>

                <div>
                  <h2 className="text-lg font-bold text-[#BA274A] ">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-[#02111b]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-900">

        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-[#BA274A] capitalize lg:text-4xl dark:text-white">
            Our Directors Vision
          </h1>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">

            <div className=" hover:shadow-md shadow-sm p-6 bg-white rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-[#02111b] ">
                “As the Director of Ahead Group, my vision is to pioneer a paradigm shift in the adventure sports and camps industry. I aspire to create an organization that transcends conventional boundaries, providing not just experiences but transformative journeys for individuals and families alike. Through innovation, inclusivity, and a relentless commitment to safety, I envision Ahead Group as the catalyst for fostering a global community of adventure enthusiasts.”
              </p>

              <div className="flex items-center mt-6">
                <div className="mx-4">
                  <h1 className="font-semibold text-[#BA274A]">Paresh Raut</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Director at Ahead Group
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-sm  hover:shadow-md p-6 bg-white rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-[#02111b] dark:text-gray-300">
                “As a Director at Ahead Group, my vision revolves around cultivating an environment where adventure becomes a way of life. I am dedicated to establishing Ahead Group as the epitome of family-friendly adventure, where individuals of all ages discover the joy of pushing their boundaries in a secure and welcoming setting. Our vision extends beyond thrilling activities; it encompasses building a tight-knit community that shares stories around campfires and forms bonds that withstand the test of time.”
              </p>

              <div className="flex items-center mt-6">
                <div className="mx-4">
                  <h1 className="font-semibold text-[#BA274A]">Prakash Ghadi</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                  Director at Ahead Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
