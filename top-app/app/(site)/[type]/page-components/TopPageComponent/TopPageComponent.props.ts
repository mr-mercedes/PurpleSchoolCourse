import {TopLevelCategory, TopPageModel} from "@/interfaces/page.interfece";
import {ProductModel} from "@/interfaces/product.interfece";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}