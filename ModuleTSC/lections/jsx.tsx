import React, {JSX} from "react";

const a: JSX.Element = <div tabIndex={0}>{1 + 1}</div>; //Объявление JSX элемента
const b: JSX.Element = React.createElement('div', {tabIndex: 0}, 1 + 1);//Объявление JSX элемента нативно
const example: number = 1;
/*const castTypeJSX = example as string;*/ // пример каста jsx объектов
