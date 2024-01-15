"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Announce from "@/components/ui/Announce";

// import Announce from "@/components/ui/Announce";

export default function Announcements() {
  const [annoucementData, setAnnoucementData] = useState([]);

  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = async () => {
    try {
      const { data } = await axios.get("https://ahead-backend.onrender.com/announcements");

      setAnnoucementData(data.annoucement);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className=" body-font bg-[#fffff2] h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {annoucementData?.length > 0 ? (
              annoucementData.map((annoucement, index) => {
                const { title, description, image, createdAt } = annoucement;
                const convertedDate = new Date(createdAt);
                const date = convertedDate.toDateString().slice(4);

                return (
                  <Announce
                    key={index}
                    title={title}
                    desc={description}
                    date={date}
                    img={image}
                  />
                );
              })
            ) : (
              <h1 className="text-4xl">No announcement available.</h1>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
