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
      <div className="container text-center">
        <h2 className="text-2xl font-black mb-10">Properties</h2>

        <Slider {...sliderSettings} className={styles.mySwiper}>
          {data.map((card) => (
            <div
              className={`flex items-center flex-wrap ${styles.card}`}
              key={card.id}
            >
              <Image
                className={styles.Image}
                src={card.image}
                width={370}
                height={270}
                alt={card.name}
              />

              <div className=" flex items-center justify-between flex-row py-6 pr-5">
                <span className="text-primary text-xl font-normal ml-5">
                  {card.name}
                </span>
                <FaArrowDown className="text-primary w-5 h-4 cursor-pointer mr-5" />
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
