"use client";
import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { FaArrowDown } from "react-icons/fa6";
import styles from "./Properties.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
      <div className="container text-center bp-15 m-auto">
        <h2 className="text-2xl font-black mb-10">Properties</h2>

        <Slider {...sliderSettings} className={styles.mySwiper}>
          {data.map((card) => (
            <div
              className={`flex items-center flex-wrap flex-row justify-between ${styles.card} gap-[30px] `}
              key={card.id}
            >
              <Image
                className={`${styles.Image} w-[370px] h-[270px]`}
                src={card.image}
                width={370}
                height={270}
                alt={card.name}
              />

              <div className="flex items-center justify-between gap-5 px-3 py-5 w-[370px]">
                <div className="text-primary text-xl 	loading-lh23">
                  {card.name}
                </div>
                <div>
                  <FaArrowDown className="self-end text-primary w-[17px] h-[17px] cursor-pointer" />
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
