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
        <div key={index} className="w-2/5 m-2 ">
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
            <section>
                <h1 style={myFont.style} className="text-white text-center text-6xl">pricing</h1>
                <h1 className="text-white text-center">10 to 20 glasses: 15$ each</h1>
                <h1 className="text-white text-center">21+ glasses: 12$ each</h1>
                <h1 className="text-white text-center">*Minimum 10 glasses per order</h1>
            </section>
        </section>
    )
}