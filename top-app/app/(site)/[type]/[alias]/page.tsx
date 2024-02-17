import {GetStaticProps, GetStaticPropsContext, Metadata} from "next";
import {withLayout} from "@/layout/Layout";
import {getPage} from "@/api/page";
import { notFound } from "next/navigation";
import {getMenu} from "@/api/menu";
import {getProducts} from "@/api/products";
import {JSX} from "react";
import {ProductModel} from "@/interfaces/product.interfece";
import {TopLevelCategory, TopPageModel} from "@/interfaces/page.interfece";
import {MenuItem} from "@/interfaces/menu.interfece";
import {ParsedUrlQuery} from "node:querystring";
import {firstLevelMenu} from "@/helpers/helpers";

export const metadata: Metadata = {
    title: 'Courses'
};
export const generateStaticParams = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params){
        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    try {
        const menu = await getMenu(firstCategoryItem.id);
        if (menu.length == 0) {
            return {
                notFound: true
            };
        }
        const map = menu.flatMap(item=> item.pages.map(page=> ({alias: page.alias})));

        return {
            props: {
                map, firstCategory: firstCategoryItem.id
            }
        }
    } catch {
        return {
            notFound: true
        };
    }

};
interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}

const Course = async ({params}: { params: { alias: string } }):Promise<JSX.Element> => {
    const page = await getPage(params.alias);
    const products = await getProducts(page.category,10);
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
    );
};
export default withLayout(Course);