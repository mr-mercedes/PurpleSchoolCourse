import {Metadata} from "next";
import {withLayout} from "@/layout/Layout";

export const metadata: Metadata = {
    title: 'News'
}

const News = () => {
    return (
        <div>
            News
        </div>
    )
}
export default withLayout(News);