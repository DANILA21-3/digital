var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Одномерный массив
function find_median(arr) {
    var sorted_numbers = arr.slice().sort(function (a, b) { return a - b; });
    var mid = Math.floor(sorted_numbers.length / 2);
    if (sorted_numbers.length % 2 === 0) {
        return (sorted_numbers[mid - 1] + sorted_numbers[mid]) / 2;
    }
    else {
        return sorted_numbers[mid];
    }
}
var arr_1 = [3, 1, 4, 1, 5, 9, 2, 6];
var median = find_median(arr_1);
console.log("\u041C\u0435\u0434\u0438\u0430\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ".concat(median));
// Двумерный массив
function Counter(arr, row_begin, row_end, col_begin, col_end) {
    var count = 0;
    for (var i = row_begin; i <= row_end; i++) {
        for (var j = col_begin; j <= col_end; j++) {
            if (arr[i][j] !== 0) {
                count++;
            }
        }
    }
    return count;
}
var arr_2 = [
    [1, 0, 2],
    [0, 3, 0],
    [4, 5, 0]
];
var Count = Counter(arr_2, 0, 2, 0, 2);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u043D\u0443\u043B\u0435\u0432\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439: ".concat(Count));
function get_multiply(tuple) {
    var num1 = tuple[0], str = tuple[1], num2 = tuple[2];
    return num1 * num2;
}
var myTuple = [5, "example", 10];
var product = get_multiply(myTuple);
console.log("\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u043B\u043E\u0432\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439: ".concat(product));
// Перечисление
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "Vitamin A";
    Vitamins["B3"] = "Vitamin B3";
    Vitamins["B6"] = "Vitamin B6";
    Vitamins["B12"] = "Vitamin B12";
    Vitamins["E"] = "Vitamin E";
    Vitamins["C"] = "Vitamin C";
    Vitamins["D"] = "Vitamin D";
})(Vitamins || (Vitamins = {}));
var myVitamin = Vitamins.B12;
console.log("\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0442\u0430\u043C\u0438\u043D: ".concat(myVitamin));
// Реализованный метод
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function print(animal) {
    if (animal instanceof Dog) {
        console.log("\u041C\u0435\u0442\u043A\u0430: ".concat(animal.label));
    }
    else {
        console.log("\u0418\u043C\u044F: ".concat(animal.name));
    }
    console.log("\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(animal.age));
    console.log("\u0417\u0432\u0443\u043A: ".concat(animal.speak()));
}
var my_Dog = new Dog();
var my_Cat = new Cat();
console.log("\nИнформация о собаке:");
print(my_Dog);
console.log("\nИнформация о кошке:");
print(my_Cat);
var vitamin_obj = {
    type: Vitamins.C,
    dosage: 90,
    isWaterSoluble: true,
    sources: ["Citrus fruits", "Bell peppers", "Broccoli"]
};
console.log(JSON.stringify(vitamin_obj, null, 2));
