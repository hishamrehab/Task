"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./partners.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Partners() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://sunchase.backend.aait-d.com/api/home");
      const repo = await res.json();
      setData(repo.data.partners);
    };
    fetchData();
  }, []);

  return (
    <div className={`container mx-auto px-4 text-center ${styles.partners}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">
        Our Partners
      </h2>

      <Slider {...sliderSettings} className={styles.mySwiper}>
        {data.map((card) => (
          <div
            className={`flex justify-center items-center cursor-grab ${styles.card}`}
            key={card.id}
          >
            <Image
              className={`${styles.Image} max-w-full h-auto`}
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
