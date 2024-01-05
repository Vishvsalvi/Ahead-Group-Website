import Image from "next/image";
import Img1 from "../../../public/Images/Preschool/Img1.JPG";
import Img2 from "../../../public/Images/Preschool/Img2.JPG";
import Img3 from "../../../public/Images/Preschool/Img3.JPG";
import Img4 from "../../../public/Images/Preschool/Img4.JPG";
import Img5 from "../../../public/Images/Preschool/Img5.JPG";
import Img6 from "../../../public/Images/Preschool/Img6.JPG";
import Img7 from "../../../public/Images/Preschool/Img7.JPG";

import Educate from "../../../public/Images/Icons/educate.png";
import Reward from "../../../public/Images/Icons/reward.png";
import Elearning from "../../../public/Images/Icons/elearning.png";
import Teacher from "../../../public/Images/Icons/teacher.png";
import Camping from "../../../public/Images/Icons/camping.png";
import Flags from "../../../public/Images/Icons/flags.png";

export default function Education() {
  const images = [
    {
      src: Img1,
      alt: "Image 1",
    },
    {
      src: Img7,
      alt: "Image 7",
    },
    {
      src: Img3,
      alt: "Image 3",
    },
    {
      src: Img4,
      alt: "Image 4",
    },
    {
      src: Img5,
      alt: "Image 5",
    },
    {
      src: Img6,
      alt: "Image 6",
    },
  ];

  const contentWithImage = [
    {
      title: "Recognized by reputed institutions",
      description:
        "Appreciations from reputed high schools and international schools in the Vasai-Virar area.",
      imageSrc: Reward,
    },
    {
      title: "Educational environment and co-curricular activities",
      description:
        "We provide a safe and secure environment for our students to learn and grow. Our students are encouraged to participate in various co-curricular activities like dance, music, art, and craft.",
      imageSrc: Educate,
    },
    {
      title: "Technology in the classroom",
      description:
        "We have a smart classroom with a projector and a computer. We use technology to enhance our students' learning experience.",
      imageSrc: Elearning,
    },
    {
      title: "Highly qualified and experienced teachers",
      description:
        "Our teachers are highly qualified and experienced. They are trained in the latest teaching methodologies and techniques.",
      imageSrc: Teacher,
    },
    {
      title: "Picnic and field trips",
      description:
        "We organize picnics and field trips for our students to give them a chance to explore the world around them.",
      imageSrc: Camping,
    },
    {
      title: "Annual day for students",
      description:
        "We organize an annual day for our students to showcase their talents and skills.",
      imageSrc: Flags,
    },
  ];

  return (
    <div className="bg-[#FFFFF2]" >
      {/* Preschool heading */}
      <section className="overflow-hidden bg-[#FFFFF2] sm:grid sm:grid-cols-2 pt-16 ">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-[#BA274A] md:text-3xl">
              The First Step to Success: Discover Pre-Primary Education that
              Makes a Difference
            </h2>

            <p className="hidden text-[#02111B] md:mt-4 md:block">
              More than just academics, we nurture the whole child. Play is at
              the heart of our pre-primary experience, providing opportunities
              for collaboration, problem-solving, and developing a strong sense
              of self. We foster a warm and inclusive community where every
              child feels valued and supported, building a foundation for
              empathy, resilience, and a lifelong love of learning.
            </p>
          </div>
        </div>

        <img
          alt="Student"
          src="https://media.istockphoto.com/id/670712598/photo/back-view-of-schoolboy-raising-hand-to-answer-the-question.webp?b=1&s=170667a&w=0&k=20&c=_pcLzgYVFgrPFpTZ1uXYDropqxwqrRD1EFv_lSHM1go="
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#BA274A]">
              APEX Pre-Primary School
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#02111B]">
              We believe in the power of play-based learning to help children
              develop social, emotional, and cognitive skills. Through hands-on
              activities, creative expression, and positive reinforcement, we
              watch our little learners blossom.
            </p>
          </div>

          {contentWithImage.map((content, index) => {
            const { title, description, imageSrc } = content;
            const isImageLeft = index % 2;
            return isImageLeft ? (
              <div
                key={index}
                className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
              >
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image alt={index} src={imageSrc}></Image>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-[#BA274A] text-xl title-font font-medium mb-2">
                    {title}
                  </h2>
                  <p className="text-[#02111B] leading-relaxed text-base">{description}</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
              >
                <div className="flex-grow sm:text-left  text-center mt-6 sm:mt-0">
                  <h2 className="text-[#BA274A] text-xl title-font font-medium mb-2">
                    {title}
                  </h2>
                  <p className="text-[#02111B] leading-relaxed text-base">{description}</p>
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image alt={index} src={imageSrc}></Image>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#BA274A] sm:text-4xl">
              Picture Gallery
            </h2>
          </div>
        </div>

        <hr />

        <div className="mt-10 grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div>
              <Image
                className="rounded-sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}

          <div></div>
        </div>
      </section>

    </div>
  );
}
