"use client";
import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { FaArrowDown } from "react-icons/fa6";
import Property from "./Property";

interface PropertyData {
  id: string;
  name: string;
  image: string;
}

interface ApiResponse {
  data: {
    properties: PropertyData[];
  };
}

export async function Properties(): Promise<JSX.Element> {
  const res = await fetch("https://sunchase.backend.aait-d.com/api/home");
  const repo: ApiResponse = await res.json();

  const data = repo.data.properties;

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto text-center px-4 py-8">
        <h2 className="text-2xl font-black mb-10">Properties</h2>

        <Slider {...sliderSettings} className="slick-slider">
          {data.map((card) => (
            <div
              className="flex items-center flex-wrap justify-between gap-6"
              key={card.id}
            >
              <Image
                className="w-[370px] h-[270px] sm:w-[300px] sm:h-[225px] md:w-[350px] md:h-[260px]"
                src={card.image}
                width={370}
                height={270}
                alt={card.name}
              />

              <div className="flex items-center justify-between gap-5 px-3 py-5 w-full sm:w-[300px]">
                <div className="text-primary text-xl">{card.name}</div>
                <div>
                  <FaArrowDown className="text-primary w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Property />
    </>
  );
}

export default Properties;
