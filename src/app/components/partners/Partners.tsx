"use client";

import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./partners.module.css";

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

interface Partner {
  id: string;
  name: string;
  logo: string;
}

interface PartnersProps {
  partners: Partner[];
}

export default function Partners({ partners }: PartnersProps) {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">
        Our Partners
      </h2>

      <Slider {...sliderSettings} className={styles.mySwiper}>
        {partners.map((card) => (
          <div
            className={`flex justify-center items-center cursor-grab ${styles.card}`}
            key={card.id}
          >
            <Image
              className="max-w-full h-auto"
              src={card.logo}
              width={300}
              height={308.55}
              draggable="false"
              alt={card.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
