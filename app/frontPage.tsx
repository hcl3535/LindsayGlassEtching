import Image from "next/image"
import logo from "../public/Logo.jpg"
import localFont from "next/font/local"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

export default function FrontPage (){
    return(
        <section>
        
            <section className="flex h-screen w-screen sm:h-100%">
                <section className="sm:w-1/2 hidden sm:flex align-middle justify-center">
                    <h1 style={myFont.style} className="text-white text-8xl z-10 text-center self-center ">Lindsay Glass Etching</h1>
                </section>
                <Image
                    src={logo}
                    alt="logo" 
                    priority={true} 
                    layout="responcive"
                    sizes="(min-width: 2000px) 1896px, calc(95vw + 15px)"
                    className=" object-cover absolute top-20 z-0 scale-150 w-screen sm:w-1/2 sm:relative sm:scale-100 sm:top-0 sm:object-contain" 
                />
            </section>

        </section>
    )
}