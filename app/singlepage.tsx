import Gallary from "./Gallary";
import Featured from "./Featured";
import ContactMe from "./contact";
import FrontPage from "./frontPage";
import Catagories from "./Catagories";

export default function SinglePage(){
    return(
        <section className=" bg-black">
            <section className=" ">
                <FrontPage/>
            </section>
            <section className="">
                <Featured/>
            </section>
            <section>
                <Catagories/>
            </section>
            <section className="">
                <Gallary/>
            </section>
            <section className="">
                <ContactMe/>
            </section>
        </section>
    )
}