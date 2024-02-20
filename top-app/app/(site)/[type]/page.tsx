import {JSX} from "react";
import {firstLevelMenu} from "@/helpers/helpers";
import {notFound} from "next/navigation";
import {withLayout} from "@/layout/Layout";

export const generateStaticParams = async () => {
    return firstLevelMenu.map(m => '/' + m.route);
};


const Type = async ({params}: { params: { type: string } }): Promise<JSX.Element> => {
    if (!params) notFound();
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) notFound();
    return (<>
        Type: {firstCategoryItem.id}
    </>);
};

export default withLayout(Type);