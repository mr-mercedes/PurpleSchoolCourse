import { Metadata } from 'next';
import { withLayout } from '@/layout/Layout';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { getProducts } from '@/api/products';
import { JSX } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopPageComponent } from '@/app/(site)/[type]/page-components';

export const metadata: Metadata = {
    title: 'Courses',
};
export const generateStaticParams = async () => {
    let paths: { [key: string]: string }[] = [];
    for (const m of firstLevelMenu) {
        const menu = await getMenu(m.id);
        paths = paths.concat(
            menu.flatMap((s) =>
                s.pages.map((p) => {
                    return {
                        type: m.route,
                        alias: p.alias,
                    };
                }),
            ),
        );
    }
    return paths;
};

const Course = async ({
    params,
}: {
    params: { alias: string; type: string };
}): Promise<JSX.Element> => {
    const firstCategory = firstLevelMenu.find((f) => f.route === params.type);
    if (!firstCategory) notFound();
    const page = await getPage(params.alias);
    const products = await getProducts(page.category, 10);
    if (!page) notFound();
    return (
        <TopPageComponent
            firstCategory={firstCategory.id}
            page={page}
            products={products}
        />
    );
};
export default withLayout(Course);
