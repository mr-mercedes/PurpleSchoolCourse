"use client"
import {TopPageComponentProps} from "./TopPageComponent.props";
import React, {JSX, useReducer, useState} from "react";
import {Advantages, HhData, Htag, Product, Sort, Tag} from "@/components";
import styles from "./TopPageComponent.module.css";
import {TopLevelCategory} from "@/interfaces/page.interfece";
import {SortEnum} from "@/components/Sort/Sort.props";
import {sortReducer} from "@/app/(site)/[type]/page-components/TopPageComponent/sort.reducer";
import {ProductModel} from "@/interfaces/product.interfece";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort:SortEnum.Rating})
    const setSort = (sort:SortEnum) => {
      dispatchSort({type: sort});
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && (<Tag size={14} color={'green'} aria-label={products.length + 'элементов'}>{sortedProducts.length}</Tag>)}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {products && (sortedProducts.map(p=> <Product key={p._id} layout product={p}/>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag size={14} color={'red'}>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 &&
                <>
                    <Htag tag={'h2'}>Преимущества</Htag>
                    <Advantages advantages={page.advantages}/>
                </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag={'h2'}>Получаемые навыки</Htag>
            {page.tags.map(t=> (<Tag key={t} color={'primary'} size={14}>{t}</Tag>))}

        </div>
    );
};