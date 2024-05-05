import ProductsPage from "./ProductsPage";
import ContactMe from "./contact";
import FrontPage from "./frontPage";

export default function SinglePage(){
    return(
        <section className=" bg-black overflow-x-hidden">
            <section className="overflow-x-hidden">
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