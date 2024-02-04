import {API} from "@/api/api";
import {TopPageModel} from "@/interfaces/page.interfece";

export const getPage = async (alias: string): Promise<Promise<TopPageModel> | null> => {
    const res = await  fetch(API.topPage.byAlias + alias, {
        next: {revalidate: 10}
    });
    if (!res.ok) return null;
    return res.json();
}
