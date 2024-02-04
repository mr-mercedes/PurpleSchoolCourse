import {API} from "@/api/api";
import {MenuItem} from "@/interfaces/menu.interfece";

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({firstCategory}),
        headers: new Headers({'content-type': 'application/json'}),
        next: {revalidate:10}
    });
    return res.json();
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}