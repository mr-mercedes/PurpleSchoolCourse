import {Metadata} from "next";
import {withLayout} from "@/layout/Layout";
import {getPage} from "@/api/page";
import { notFound } from "next/navigation";
import {getMenu} from "@/api/menu";
import {getProducts} from "@/api/products";

export const metadata: Metadata = {
    title: 'Product'
}
export const generateStaticParams = async () => {
    const menu = await getMenu(0);
    return menu.flatMap(item=> item.pages.map(page=> ({alias: page.alias})))
}

const Products = async ({params}: { params: { alias: string } }) => {
    const page = await getPage(params.alias);
    if (!page) return "";
    const products = await getProducts(page.category,10)
    if (!page) notFound();
    return (
        <div>
            { page.title }
            <div>
                <ul>
                    {products.map(p=> <li key={p._id}>{p.title}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default withLayout(Products);