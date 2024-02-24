"use client"
import {withLayout} from '@/layout/Layout';
import {Button, Htag, Input, Paragraph, Rating, Tag, TextArea} from "@/components";
import {useState} from "react";


const Home = () => {
    const [rating, setRating] = useState(0)
    return (
        <div>
            <Htag tag={'h1'}>Текст</Htag>
            <Button appearance={'primary'} arrow={'right'}>Кнопка</Button>
            <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
            <Paragraph size={16}>Средний</Paragraph>
            <Paragraph size={14}>Маленький</Paragraph>
            <Paragraph size={18}>Большой</Paragraph>
            <Tag size={12}>Мал</Tag>
            <Tag size={12} color={"ghost"}>Мал</Tag>
            <Tag size={14}>Сред</Tag>
            <Tag size={14} color={"red"}>Сред</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
            <Input/>
            <TextArea/>
        </div>
    );
};


export default withLayout(Home);
