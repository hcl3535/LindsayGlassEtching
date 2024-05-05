import Image from "next/image"
import logo from "../public/Logo.jpg"
import localFont from "next/font/local"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

export default function FrontPage (){
    return(
        <section className="flex h-screen w-screen">
            <Image
                src={logo}
                alt="logo" 
                priority={true} 
                layout="responcive"
                sizes="(min-width: 2000px) 1896px, calc(95vw + 15px)"
                className=" object-cover absolute top-20 z-0 scale-150 w-screen" 
            /> 
        </section>
    )
}