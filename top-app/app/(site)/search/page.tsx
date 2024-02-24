"use client"
import {withLayout} from "@/layout/Layout";
import {JSX} from "react";
import { useSearchParams } from 'next/navigation'
const SearchPage = ():JSX.Element => {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')
    return (<>Hello search {search}</>)
}

export default withLayout(SearchPage)