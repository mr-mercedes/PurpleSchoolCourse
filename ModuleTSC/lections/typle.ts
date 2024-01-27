const typle: [number, string, number] = [0, 'a', 2]; // Объявление картежа

typle.push(1); // Добавление элемнта в картеж (работает) не реекомендуется (нельзя достучаться до добавленного объекта)
typle.map(s => { // map по картежу с использование typeof
    switch (typeof s) {
        case "string":
            return '';
        case "number":
            return 1;
    }
});

const [one, two, tree] = typle; //Деструктизация
const [first, ...other] = typle; //Спред оператор