"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationOn } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { PiVectorThreeThin } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";

interface PropertyData {
  id: string;
  name: string;
  image: string;
  title: string;
  address: string;
  price: number;
  monthly: string;
}

interface ApiResponse {
  data: {
    recently_added: PropertyData[];
  };
}

export async function RecentlyAdd(): Promise<JSX.Element> {
  const res = await fetch("https://sunchase.backend.aait-d.com/api/home");
  const repo: ApiResponse = await res.json();

  const data = repo.data.recently_added;

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

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
    <div className={`container text-center m-auto content-center`}>
      <h2 className="text-2xl font-black mb-10">Recently added</h2>

      <Slider {...sliderSettings} className="cursor-grab">
        {data.map((card) => {
          return (
            <div
              className={`flex items-center flex-wrap cursor-grab text-left w-[370px]`}
              key={card.id}
            >
              <Image
                className="w-[370px] h-[308.55px]"
                src={card.image}
                width={370}
                height={308.55}
                draggable="false"
                alt={card.name}
              />

              <div className="px-6">
                <h3 className="mt-5 text-xl font-normal leading text-primary pb-3">
                  {card.title}
                </h3>

                <div className="flex items-center gap-1 justify-start flex-row mb-4">
                  <AiOutlineEnvironment className="text-primary h-3 w-3" />
                  <span className="text-sm font-normal leading-4 text-colorLocation">
                    {card.address}
                  </span>
                </div>

                <div className="flex items-center flex-row gap-6 mb-8">
                  <div className="flex gap-1">
                    <FaVectorSquare className="w-3 h-3 text-primary" />
                    <span className="text-sm font-normal leading-4 text-colorLocation">
                      2 bedroom
                    </span>
                  </div>

                  <div className="flex gap-1">
                    <MdOutlineBed className="w-3 h-3 text-primary" />
                    <span className="text-sm font-normal leading-4 text-colorLocation">
                      2 bedroom
                    </span>
                  </div>

                  <div className="flex gap-1 items-center">
                    <PiVectorThreeThin className="w-3 h-3 text-primary" />
                    <span className="text-sm font-normal leading-4 text-colorLocation">
                      2 bedroom
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-[308.55px]">
                  <div>
                    <h3 className="font-sans text-base leading-4 font-bold text-primary pb-1">
                      {card.price}EGP
                    </h3>

                    <p className="font-sans text-xs	font-normal leading-[17px] text-monthlyColor">
                      {card.monthly}Monthly
                    </p>
                  </div>

                  <MdArrowOutward className="w-[h-17px] h-[17px] text-primary" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default RecentlyAdd;
