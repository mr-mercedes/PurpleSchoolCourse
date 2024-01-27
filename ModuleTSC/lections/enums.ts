enum DirectionNumber { //Числовой enum
    Up = 1,
    Down,
    Left,
    Right
}

enum DirectionString { //Строковый enum
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

const calcEnum = () => { // Функция
    return 2;
}

enum HeterogenEnum { // Гетерогенный enum + расчет значения
    Yes = 1,
    No = 'No',
    MayBe = calcEnum()
}

const runEnum = (obj: { Up: string }) => { // Функция с параметром объект с возможностью принять enum

}

runEnum(DirectionString); // Передача enum в параметр функции

enum Test { // Объявление enum
    A
}

const testA = Test.A // Обращение к enum по имени
const nameA = Test[testA] // Образение к enum по значению

const enum ConstEnum { // Объявление константного enum (реккомендуется если используется в качестве базового перечесления)
    A,
    B
}

const testConstEnum = ConstEnum.A; // Получение enum по имени

enum Dice { //Объявление
    One = 1,
    Two,
    Tree
}

const ruDice = (dice: Dice) => { //Использование enum c защитой от пропущеного case
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        case Dice.Tree:
            return 'три'
        default:
            const a: never = dice;
    }
}