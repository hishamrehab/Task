"use client"
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";
import { FaArrowDown } from "react-icons/fa6";
import styles from "./Properties.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Property from "./Property"
export async function Properties() {
  const res = await fetch('https://sunchase.backend.aait-d.com/api/home')
  const repo = await res.json()

  const data = repo.data.properties;

  console.log(data);

  const sliderSettings = {
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
          {data.map((card) => {
            return (
              <div className={`flex items-center flex-wrap ${styles.card}`}
                key={card.id} >

                <Image className={`${styles.Image}`} src={card.image} width={370} height={270} alt={card.name} />
                <div className='flex items-center justify-between flex-row w-full px-2.5 py-6' >
                  <span className='text-primary text-xl font-normal'>{card.name}</span>
                  <FaArrowDown className='text-primary w-5 h-4 cursor-pointer' />
                </div>

              </div>)
          })}
        </Slider>
      </div>
      <Property />
    </>
  );
};

export default Properties;
