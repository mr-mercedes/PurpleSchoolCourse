const literal: 'test' = 'test'; // Объявление литерала

type actionType = 'up' | 'down'; // Пример литерального типа (аналог enum)

const performAction = (action: actionType | ComplexAction) => { // типизация параметра функции литеральным типом
    switch (action) {                                                   // с объединением с интерфейсом
        case "up":
            return 1;
        case "down":
            return -1;
    }
}

interface ComplexAction { // Объявление интерфейса
    s: string;
}