import localFont from "next/font/local"

const myFont = localFont({src: "../fonts/Abhinaya.ttf"})

export default function Header (){
    
    return (
        <section className="flex justify-between  z-10 sm:hidden ">
            <h1 style={myFont.style} className="text-white text-4xl z-10 pl-3  pt-2 ">Lindsay Glass Etching</h1>
        </section>
    )
}
