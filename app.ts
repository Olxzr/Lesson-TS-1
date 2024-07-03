// ! Создайте массив чисел от 1 до 5 и опишите его типы.

let numbers: Array<number> = [1,2,3,4,5]

let cities: string[] = ['London', 'America']

let various: [string, number, boolean] = ['London', 1991, true]


// ? Tuple 
// ! Создайте переменную с типом кортеж из трех элементов: вашего имени, фамилии и возраста, и присвойте переменной соответствующие значения.

let data: [string, string, number] = ['Adlan', 'Saidov', 25]


// ! Создайте кортеж, содержащий несколько ваших любимых цветов и присвойте переменной соответствующие значения

let colors: [string, string, string];
colors = ['blue','red','black']


// ? Never
// ! Напишите функцию, которая никогда не завершается (возвращает never), и вызовите ее.

let nev = () : never => {
    while(true){

    }
}

// ! Попробуйте присвоить переменной типа never какое-либо значение. Что произойдет?

let a: never // не получаетс присвоить что либо

// ! Используйте тип never в качестве возвращаемого типа функции, которая выбрасывает ошибку.

let sms = 'hello'
let err = (err: string) : never => {
    throw new Error(err)
}


// ? Object
// ! Создайте объект, содержащий информацию о вашей любимой книге (название, автор, год издания и т.д.).

let favoriteBook: { title: string | number, author: string, year: number } = {
    title: "Название книги",
    author: "Имя автора",
    year: 2022
};

//  !  Создайте объект, содержащий информацию о вас (имя, фамилия, возраст и т.д.).

let information: { name1: string, surname: string, age: number } = {
    name1: "Adlan",
    surname: "Saidov",
    age: 25
};

// ! Напишите функцию, которая принимает объект и ничего не возвращает.

function obj(AS: Object): void{

}



// ? Any
// ! Создайте переменную типа any и присвойте ей значение вашего любимого цвета.

let color: any = 'Синий'

// ! Создайте список, содержащий элементы разных типов данных (строки, числа, объекты и т.д.), и присвойте его переменной типа any.

let mixedList: any = [
    "Привет",
    42,
    true,
    { Name: "Иван", age: 30 },
    [1, 2, 3],
    null,
    undefined
    ];


// ! Напишите функцию, которая принимает переменную типа any и ничего не возвращает.

function AV(dot: any): void {
    
}


// ? Type
// ! Создайте тип с именем `Person`, который содержит свойства `name` типа `string` и `age` типа `number`.

type Person1 = string | number

let names: Person1 = 'Adlan'
let age: Person1 = 25

// Второй вариант

type Person2 = {
    nams: string,
    ages: number
}

let AS: Person2 = {
    nams: 'Adlan',
    ages: 25
}

// ! Создайте тип с именем Product, который содержит свойства name типа string, price типа number и inStock типа boolean.

type Product = {
    nam: string,
    price: number,
    inStock: boolean
}

let AS2: Product = {
    nam: 'Adlan',
    price: 25,
    inStock: true
}

// ! Создайте тип с именем User, который содержит свойства id типа number, username типа string и email типа string.

type User = {
    id: number,
    username: string,
    email: string
}

let AS3: User = {
    id: 2511235,
    username: 'Wolf',
    email: 'mail@.ru'
}

// ! Создайте тип Account, который содержит свойства id типа number и balance типа number.

type Account = {
    id: number,
    balance: number
}

let AS4: Account = {
    id: 256406,
    balance: 360
}