import Image from "next/image"
import localFont from "next/font/local"
import TTRPG from "../public/TTRPG catagory.jpg"
import spiderWebMirror from"../public/spiderWebMirror.jpg"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

const FeaturedItems = [
    {
        name: "TTRPG Glasses",
        image: TTRPG,
        price:"15.00"
    },
    {
        name:"Spider Web Mirror",
        image: spiderWebMirror,
        price:"15.00"
    }
]

const FeaturedItemListings = FeaturedItems.map((FeaturedItem, index) => {
    
    return(
        <div key={index} className="w-2/5 m-2 sm:w-1/5">
            <Image
                src={FeaturedItem.image}
                alt="Logo" 
                width={1896} 
                height={2130}
                priority={true} 
                sizes="40vw"
                className="" 
            /> 
            <section className="flex justify-between">
                <h3 className="text-white pl-5">{FeaturedItem.price}</h3>
                <section className="pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus text-white" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </section>
            </section>
            <h1 className="text-white text-center text-2xl">{FeaturedItem.name}</h1>
        </div>
    )
});





export default function Featured() {
    
    return(
        <section className="justify-center ">
            <h1 style={myFont.style} className="text-white text-6xl text-center mb-1">Featured</h1>
            <section className=" flex flex-wrap justify-center">
                {FeaturedItemListings}
            </section>
        </section>
    )
}