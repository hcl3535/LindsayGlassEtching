import Image from "next/image"
import localFont from "next/font/local"
import beerGlass from "../public/beerGlass.jpg"
import TTRPGGroup from "../public/TTRPG catagory.jpg"
import spiderWebMirror from "../public/spiderWebMirror.jpg"
import demure from "../public/Demure.jpg"
import sticker from "../public/StickersCatagory.jpg"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

export default function Catagories() {

    
    
    return(
        <section className="justify-center mt-10">
            <h1 style={myFont.style} className="text-white text-6xl text-center mb-1 ">Categories</h1>
            <section className=" flex flex-wrap justify-center">
                <div className="w-2/5 m-2 sm:w-1/5">
                    <Image
                        src={beerGlass}
                        alt="Logo" 
                        width={1896} 
                        height={2130}
                        priority={true} 
                        sizes="40vw"
                        className="" 
                    /> 
                    <h1 className="text-white text-center text-2xl">Mirrors</h1>
                </div>
                <div className="w-2/5 m-2 sm:w-1/5">
                    <Image
                        src={demure}
                        alt="Logo" 
                        width={1896} 
                        height={2130}
                        priority={true} 
                        sizes="40vw"
                        className="" 
                    /> 
                    <h1 className="text-white text-center text-2xl">Mason Jars</h1>
                </div>
                <div className="w-2/5 m-2 sm:w-1/5">
                    <Image
                        src={TTRPGGroup}
                        alt="Logo" 
                        width={1896} 
                        height={2130}
                        priority={true} 
                        sizes="40vw"
                        className="" 
                    /> 
                    <h1  className="text-white text-center text-2xl">TTRPG</h1>
                </div>
                <div className="w-2/5 m-2 sm:w-1/5">
                    <Image
                        src={spiderWebMirror}
                        alt="Logo" 
                        width={1896} 
                        height={2130}
                        priority={true} 
                        sizes="40vw"
                        className="" 
                    /> 
                    <h1 className="text-white text-center text-2xl">Halloween</h1>
                </div>
                <div className="w-2/5 m-2 sm:w-1/5">
                    <Image
                        src={sticker}
                        alt="Logo" 
                        width={1896} 
                        height={2130}
                        priority={true} 
                        sizes="40vw"
                        className="" 
                    /> 
                    <h1 className="text-white text-center text-2xl">Stickers</h1>
                </div>
            </section>
        </section>
    )
}