"use client";
import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { FaArrowDown } from "react-icons/fa6";
import Property from "./Property";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-black mb-10">Properties</h2>

        <Slider
          {...sliderSettings}
          className="w-full max-h-[500px] flex items-center justify-between gap-4"
        >
          {data.map((card) => (
            <div
              className="flex flex-col items-center justify-between h-[270px] w-[370px] m-5 bg-white shadow-lg rounded-lg"
              key={card.id}
            >
              <Image
                className="object-cover rounded-t-lg"
                src={card.image}
                width={370}
                height={270}
                alt={card.name}
              />

              <div className="flex items-center justify-between w-full py-4 px-5">
                <span className="text-primary text-xl font-normal">
                  {card.name}
                </span>
                <FaArrowDown className="text-primary w-5 h-4 cursor-pointer" />
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
