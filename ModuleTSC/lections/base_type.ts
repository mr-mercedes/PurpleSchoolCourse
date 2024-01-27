const a: number = 5; // Тип число
const b: string = 'string'; // Тип строка
const c: boolean = true; // Тип булеан
const d: string[] = ['qwe', '1', 'qwe']; // Массив строк

const test = (a: string): string | number => { // Типизация функции
    return '';
}

const map = d.map((i: string) => i.toUpperCase()) // Типизация встроеных функций

const countCoord = (coord: { lat: number, long?: number }) => {
    return coord;
}

const printIt = (id: number | string) => { //Проверка типа параметра функции
    if (typeof id === 'number') {
        console.log(id.toString())
    } else {
      id.toUpperCase();
    }
}

const getSum = (a: number | number[]) => { //Типизация параметра функции
    if (Array.isArray(a)) return '';
}

const x: undefined = undefined;// Типизация undefined
const z: null = null;// Типизация null