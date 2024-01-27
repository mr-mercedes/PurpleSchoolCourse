type Point = { // Объявление типа
    x: number,
    y: number
};

type stringOrNumber = string | number; // Объявление типа по базовому типу
type D3Point = Point & { // Интерсекция типа (Расширение типа) - не реккомендуется
    z: number;
}

interface IPoint { // Объявление интерфейса
    x: number,
    y: number
}

interface I3DPoint extends IPoint { // Расширение интерфейса (аналог интерсекции типа) - реккомендуется к использованию
    z: number;
}

const printS = (coord: IPoint) => { // Типизация объекта параметра функции типом

}
const some = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint; // Каст(явное приведение интерфейса родителя к интерфейс наследника)
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement; // Явное приведение к типу

interface ITest { // Объявление интерфейса ITest
    a: number;
}

interface ITest { // Расширение интерфейса ITest
    a: number;
}