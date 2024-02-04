import {API} from "@/api/api";
import {ProductModel} from "@/interfaces/product.interfece";

export const getProducts = async (category: string, limit: number): Promise<ProductModel[]> => {
    const res = await  fetch(API.product.find, {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({category, limit}),
        next: {revalidate: 10}
    });
    return res.json();
}
