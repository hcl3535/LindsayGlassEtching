import Image from "next/image"
import logo from "../public/Logo.jpg"
import localFont from "next/font/local"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

export default function FrontPage (){
    return(
        <section className="flex h-screen ">
            <Image
                src={logo}
                alt="Picture of me" 
                width={1896} 
                height={2130} 
                priority={true} 
                className=" object-cover absolute top-10 z-0 scale-150" 
            /> 
        </section>
    )
}