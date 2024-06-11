'use client';
import localFont from "next/font/local"
import Image, { StaticImageData } from "next/image"
import beerGlass from "../public/beerGlass.jpg"
import rocksGlass from "../public/rocksGlass.jpg"
import tallGlass from "../public/tallGlass.jpg"
import shotGlass from "../public/shotGlass.jpg"
import { SetStateAction, useEffect, useState } from "react";

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})



const pics = [
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
]

export default function Gallary() {

    const [showcasedPic, setShowcasedPic] = useState(pics[0])
    const [showcasedPicIndex, setShowcasedPicIndex] = useState(0)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);


    const gallaryPicList = pics.map((pic, index) => {
        return (
            <div key={index} className="w-1/12 m-2 sm:w-1/5" onClick={(event) => handlePicClick(pic)}>
                <Image
                    src={pic.image}
                    alt="Logo"
                    width={1896}
                    height={2130}
                    priority={true}
                    sizes="10vw"
                    className=""
                />
            </div>
        );
    });

    
    
    useEffect(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    const id = setInterval(handleGalleryTimer, 5000);
    setIntervalId(id);
    return () => {
        clearInterval(id);
    };
}, [showcasedPicIndex]);

    function handlePicClick( imageSrc:any) {
        if (intervalId) {
            console.log(intervalId)
            clearInterval(intervalId); // Clear the interval if it's running
        }
        const newIndex = pics.findIndex(x => x.name === imageSrc.name);
        setShowcasedPicIndex(newIndex);
        setShowcasedPic(imageSrc);
    }

    function handleGalleryTimer() {
        let nextIndex = showcasedPicIndex + 1;
        if (nextIndex >= pics.length) {
            nextIndex = 0;
        }
        setShowcasedPicIndex(nextIndex);
        setShowcasedPic(pics[nextIndex]);
    }
    
        
    
    
    
    return(
        <section className="flex justify-center align-middle flex-col"> 
            <h1 style={myFont.style} className="text-white pt-5 text-6xl self-center mb-5">Gallary</h1>
            <div className="w-5/6 justify-center flex align-middle self-center ">
            <Image
                src={showcasedPic.image}
                alt="Logo" 
                width={1896} 
                height={2130}
                priority={true} 
                sizes="40vw"
                className=""
            /> 
            </div>
            <section className=" flex flex-wrap justify-center">
                {gallaryPicList}
            </section>       
        </section>
    )
}