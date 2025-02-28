// Одномерный массив
function find_median(arr: number[]): number {
    const sorted_numbers = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted_numbers.length / 2);

    if (sorted_numbers.length % 2 === 0) {       
        return (sorted_numbers[mid - 1] + sorted_numbers[mid]) / 2;
    } 
    else {
        return sorted_numbers[mid];
    }
}

const arr_1 = [3, 1, 4, 1, 5, 9, 2, 6];
const median = find_median(arr_1);
console.log(`Медианное значение: ${median}`);


// Двумерный массив
function Counter(arr: number[][], row_begin: number, row_end: number, col_begin: number, col_end: number): number {
    let count = 0;

    for (let i = row_begin; i <= row_end; i++) {
        for (let j = col_begin; j <= col_end; j++) {
            if (arr[i][j] !== 0) {
                count++;
            }
        }
    }

    return count;
}

const arr_2 = [
    [1, 0, 2],
    [0, 3, 0],
    [4, 5, 0]
];

const Count = Counter(arr_2, 0, 2, 0, 2);
console.log(`Количество ненулевых значений: ${Count}`);


// Кортеж
type Tuple = [number, string, number];

function get_multiply(tuple: Tuple): number {
    const [num1, str, num2] = tuple;
    return num1 * num2; 
}

const myTuple: Tuple = [5, "example", 10];
const product = get_multiply(myTuple);
console.log(`Произведение числовых значений: ${product}`);


// Перечисление
enum Vitamins {
    A = "Vitamin A",
    B3 = "Vitamin B3",
    B6 = "Vitamin B6",
    B12 = "Vitamin B12",
    E = "Vitamin E",
    C = "Vitamin C",
    D = "Vitamin D"
}

const myVitamin: Vitamins = Vitamins.B12; 
console.log(`Выбранный витамин: ${myVitamin}`);


// Реализованный метод
class Pet { 
    name: string = 'Some pet'; 
    age: number = -1; 

    speak() { 
        return "No speak. I am fish!"; 
    } 
}

class Dog extends Pet { 
    label: string = "AngryHunter"; 
    age: number = 8; 

    speak() { 
        return "Yaw-Gaw!"; 
    } 
}

class Cat extends Pet { 
    name: string = 'Barsik'; 
    age: number = 2; 

    speak() { 
        return "Miyau!"; 
    } 
}

function print<T extends Pet>(animal: T): void {
    if (animal instanceof Dog) {
        console.log(`Метка: ${animal.label}`);
    } 
    else {
        console.log(`Имя: ${animal.name}`);
    }
    console.log(`Возраст: ${animal.age}`);
    console.log(`Звук: ${animal.speak()}`);
}

const my_Dog = new Dog();
const my_Cat = new Cat();

console.log("Информация о собаке:");
print(my_Dog);

console.log("\nИнформация о кошке:");
print(my_Cat);


// Свой тип данных
type vitamin_info = {
    type: Vitamins; 
    dosage: number;     
    isWaterSoluble: boolean; 
    sources: string[];     
}

const vitamin_obj: vitamin_info = {
    type: Vitamins.C, 
    dosage: 90,                  
    isWaterSoluble: true,       
    sources: ["Citrus fruits", "Bell peppers", "Broccoli"] 
};

console.log(JSON.stringify(vitamin_obj, null, 2));
