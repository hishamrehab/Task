

// import React from "react";


// import Image from 'next/image';
// import Slider from "react-slick";

// import styles from "./partners.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// export async function Partners() {
//     const res = await fetch('https://sunchase.backend.aait-d.com/api/home');
//     const repo = await res.json();
//     const data = repo.data.partners;
//     console.log(data);



//     return (<div className={`container text-center ${styles.partners}`}>
//         <h2 className="text-2xl font-black mb-10">Our Partners</h2>

//         <Slider {...sliderSettings} className={styles.mySwiper}>
//             {data.map((card) => {
//                 return (
//                     <div className={`flex items-center flex-wrap cursor-grab text-left ${styles.card}`}
//                         key={card.id} >
//                         <Image className={`${styles.Image}`} src={card.logo} width={370} height={308.55} draggable="false" alt={card.name} />
//                     </div>)
//             })}
//         </Slider>

//     </div >
//     )
// }

// export default Partners

"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Slider from "react-slick";

import styles from "./partners.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    slidesToShow: 4,




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
            const res = await fetch('https://sunchase.backend.aait-d.com/api/home');
            const repo = await res.json();
            setData(repo.data.partners);
        };
        fetchData();
    }, []);

    return (
        <div className={`container text-center ${styles.partners}`}>
            <h2 className="text-2xl font-black ">Our Partners</h2>

            <Slider {...sliderSettings} className={styles.mySwiper}>
                {data.map((card) => (
                    <div
                        className={`flex items-center flex-wrap cursor-grab text-left ${styles.card}`}
                        key={card.id}
                    >


                        <Image
                            className={`${styles.Image}`}
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















