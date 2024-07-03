'use client';
import localFont from "next/font/local"
import Image, { StaticImageData } from "next/image"
import beerGlass from "../public/beerGlass.jpg"
import rocksGlass from "../public/rocksGlass.jpg"
import tallGlass from "../public/tallGlass.jpg"
import shotGlass from "../public/shotGlass.jpg"
import bongVideo from "../videos/bong video.mp4"
import bongthumbnail from "../public/bongthumbnail.png"
import { SetStateAction, useEffect, useState } from "react";
import NextVideo from "next-video";

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})



const media = [
    {
        name: "Beer Glass",
        image: beerGlass
    },
    {
        name: "Rocks Glass",
        image: rocksGlass
    },
    {
        name: "Tall Glass",
        image: tallGlass
    },
    {
        name: "Shot Glass",
        image: shotGlass
    }, 
    {
        name: "space Bong",
        image: bongthumbnail,
        video: bongVideo
    }, 

]

export default function Gallary() {

    const [showcasedPic, setShowcasedPic] = useState(media[0])
    const [showcasedPicIndex, setShowcasedPicIndex] = useState(0)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);


    const gallaryPicList = media.map((media, index) => {

            return (
                <div key={index} className=" w-1/12  m-2 mt-4 sm:w-1/5 flex self-center" onClick={(event) => handlePicClick(media)}>
                    <Image
                        src={media.image}
                        alt="Logo"
                        priority={true}
                        sizes="10vw"
                        className=""
                    />
                </div>
            );

    });

    
    
useEffect(() => {
    console.log('trigger')

    if (intervalId) {
        clearInterval(intervalId);
    }

    if(!showcasedPic.video){
        const id = setInterval(handleGalleryTimer, 5000);
        setIntervalId(id);
        return () => {
            clearInterval(id);
        };
    }
}, [showcasedPicIndex]);

    function handlePicClick( clicked:any) {
        if (intervalId) {
            console.log(intervalId)
            clearInterval(intervalId); // Clear the interval if it's running
        }

        const newIndex = media.findIndex(x => x.name === clicked.name);
        setShowcasedPicIndex(newIndex);
        setShowcasedPic(clicked);
        console.log(media)
    }

    function handleGalleryTimer() {
        let nextIndex = showcasedPicIndex + 1;
        if (nextIndex >= media.length) {
            nextIndex = 0;
        }
        setShowcasedPicIndex(nextIndex);
        setShowcasedPic(media[nextIndex]);
    }
    
        
    
    
    
    return(
        <section className="flex justify-center align-middle flex-col"> 
            <h1 style={myFont.style} className="text-white pt-5 text-6xl self-center mb-5">Gallary</h1>
            <div className="w-5/6 justify-center flex align-middle self-center aspect-square ">

            {showcasedPic.video? 
                <NextVideo 
                src={showcasedPic.video} 
                autoPlay 
                muted
                className=""
                onEnded={() => handleGalleryTimer()}
                /> 
            :
            <div>
            <Image
                src={showcasedPic.image}
                alt="Logo" 
                priority={true} 
                sizes=""
                className=""
            />
            </div>
            }
            </div>
            <section className=" flex flex-wrap align-middle justify-center">                {gallaryPicList}
            </section>     
        </section>
    )
}