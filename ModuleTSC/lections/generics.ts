const logTime = <T>(num: T): T => { // Объявление функции
    console.log(new Date());
    return num;
}

logTime<number>(1); // Вызов функции
logTime<string>('string'); // Вызов функции

interface myInterface { //Объявление интерфейса с дженериком и перечеслением
    transform: <T, F>(a: T) => F;
}

class MyGenClass<T> { // Объявление класса
    value: T;

    constructor(date: T) {
        this.value = date;
    }

}

const myGenClassObj = new MyGenClass<string>("asd"); // Вызов класса

interface TimeStamp { // Объявление интерфейса
    stamp: number;
}

const logTimeStamp = <T extends TimeStamp>(num: T): T => { // Типизация параметра функции по дженерику с наследованием от интерфейса
    console.log(num.stamp)
    return num
}
