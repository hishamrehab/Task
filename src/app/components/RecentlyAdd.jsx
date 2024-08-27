
"use client"
import styles from "./recentlyAdd.module.css";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationOn } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { PiVectorThreeThin } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";

export async function RecentlyAdd() {

    const res = await fetch('https://sunchase.backend.aait-d.com/api/home');
    const repo = await res.json();

    const data = repo.data.recently_added;

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



        <div className={`container text-center ${styles.recentlyAdd}`}>
            <h2 className="text-2xl font-black mb-10">Recently added</h2>

            <Slider {...sliderSettings} className={styles.mySwiper}>
                {data.map((card) => {
                    return (
                        <div className={`flex items-center flex-wrap cursor-grab text-left	 ${styles.card}`}
                            key={card.id} >
                            <Image className={`${styles.Image}`} src={card.image} width={370} height={308.55} alt={card.name} />
                            <div className="px-6">
                                <h3 className="mt-5 text-xl font-normal leading text-primary pb-3">{card.title}</h3>
                                <div className="flex items-center gap-1 justify-start flex-row">
                                    <CiLocationOn className="text-primary h-3 w-2.5 mb-4" />
                                    <span className="text-sm font-normal leading-4 text-colorLocation">{card.address}</span>
                                </div>

                                <div className="flex items-center justify-between w-full mb-8">
                                    <div>
                                        <FaVectorSquare />
                                    </div>
                                    <div>
                                        <MdOutlineBed />
                                    </div>
                                    <div>
                                        <PiVectorThreeThin />
                                        <span className="text-sm font-normal leading-4 text-colorLocation">2 bedroom</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-sans text-xs font-normal leading-4 text-left">{card.price}EGP</h3>
                                        <p className="font-sans text-xs	font-normal leading-4">{card.monthly} Monthly</p></div>
                                    <div>

                                        <MdArrowOutward className="w-4 h-4 text-primary" />
                                    </div>




                                </div>


                            </div>

                        </div>)
                })}
            </Slider>

        </div >
    )
}

export default RecentlyAdd;











