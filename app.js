/********************* Objects  ***********/

const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
console.log(`person1 == person2 is ${person1 == person2}`);   // false потому что разные объекты, хоть и с одинаковыми значениями
console.log(`"123" == 123 is ${"123"==123}`);                // true потому что дабл= сравнивает только значения 
console.log(`"123" === 123 is ${"123"===123}`);             // false потому что 3= сравнивает и значения и тип данных ("123" - это стринг, 123 - намбер)

// рекомендуется использовать 3=

console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === 
        JSON.stringify(person2)}`);

console.log(JSON.stringify(person1));
console.log(`name of person1 is ${person1.name}`);
console.log(`person1 lives in city ${person1.address.city}`);
Object.keys(person1).forEach(k => console.log(k));                // Фунцкия для получения ключей объекта (и их распечатка). Ключи в данном случае: ай-ди, имя, адресс
Object.values(person1).forEach(v => console.log(v))              // Функция для получения значений ключей
Object.entries(person1).forEach(e => console.log(e))            // Массив масивов (или ключ + его значение данного объекта)

function createPerson(id, name, address) {
    return {id, name, address}
}
function createAddress(city, street) {
    //return {city: city, street: street} <=> return {city, street}     Оба варианта рабочие
    return {city, street}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
    createPerson(123, "Kolya", createAddress("Tel-Aviv","Dizengoff"))
]



