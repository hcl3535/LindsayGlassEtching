import Image from "next/image"
import localFont from "next/font/local"
import beerGlass from "../public/beerGlass.jpg"
import rocksGlass from "../public/rocksGlass.jpg"
import tallGlass from "../public/tallGlass.jpg"
import shotGlass from "../public/shotGlass.jpg"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

const avaiableGlasses = [
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

const avaibleGlassesListings = avaiableGlasses.map((glass, index) => {
    
    return(
        <div key={index} className="w-2/5 m-2 sm:w-1/5">
            <Image
                src={glass.image}
                alt="Logo" 
                width={1896} 
                height={2130}
                priority={true} 
                sizes="40vw"
                className="" 
            /> 
            <h1 style={myFont.style} className="text-white text-center text-4xl">{glass.name}</h1>
        </div>
    )
});





export default function ProductsPage() {
    
    return(
        <section className="justify-center ">
            <h1 style={myFont.style} className="text-white text-6xl text-center mb-10">Glasses</h1>
            <section className=" flex flex-wrap justify-center">
                {avaibleGlassesListings}
            </section>
            <h1 style={myFont.style} className="text-white text-2xl text-center mb-5 ml-5 mr-5">We do custom work! if the glass you want is not shown please email us</h1>
            
        </section>
    )
}