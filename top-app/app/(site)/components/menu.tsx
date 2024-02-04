import {getMenu} from "@/api/menu";
import {JSX} from "react";

export const Menu = async ():Promise<JSX.Element> => {
    const menuCategory = 0;
    const menu = await getMenu(menuCategory);
    return (
        <div>
            <ul>
                {menu.map(m=> (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    )
}