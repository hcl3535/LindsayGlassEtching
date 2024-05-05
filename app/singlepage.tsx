import ProductsPage from "./ProductsPage";
import ContactMe from "./contact";
import FrontPage from "./frontPage";

export default function SinglePage(){
    return(
        <section className=" bg-black">
            <section className="">
                <FrontPage/>
            </section>
            <section className="">
                <ProductsPage/>
            </section>
            <section className="">
                <ContactMe/>
            </section>
        </section>
    )
}