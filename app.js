class Person {
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    getId() {
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    toString() {
        return `id: ${this.#id}; name: ${this.#name};`
    }
}

const person = new Person(345000355, 'Mosya');
console.log(`person is ${person}`); 

class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
        super(id, name); // вызов конструктора класса Person
        this.#salary = salary;
    }

    computeSalary() {
        return this.#salary;
    }
    toString() {
        return super.toString() + ` salary : ${this.#salary}`
    }
}

const person2 = new Employee(410555333, "Sara", 5000);
console.log(`person2 is ${person2}`); 

class Child extends Person {
    #kindergarten
    constructor(id, name, kindergarten) {
        super(id, name);
        this.#kindergarten = kindergarten;
    }
    getKindergarten() {
        return this.#kindergarten;
    }
    toString() {
        return super.toString() + ` kindergarten : ${this.#kindergarten}`
    }

}

const child = new Child(323232, "Melo4", "Berezka");
console.log(`child is ${child}`); 

class WageEmployee extends Employee {
    #hours
    #wage
    constructor(id, name, salary, hours, wage) {
        super(id, name, salary);
        this.#hours = hours;
        this.#wage = wage;
    }
    getHours() {
        return this.#hours;
    }
    getWage(){
        return this.#wage;
    }

    computeSalary() {
        return super.computeSalary() + this.#hours * this.#wage;
    }

    toString() {
        return `id: ${this.getId()}; name: ${this.getName()}; salary: ${this.computeSalary()}; `
    }
}

const person3 = new WageEmployee(321, 'Asaf', 3500, 12, 5 );
console.log(`person3 is ${person3}`); 

const persons = [
    new Child(969, 'Oktane', 'Apex'),
    new Child(787, 'Pathfinder', 'ApexLegends'),
    new Child(313, 'Loba', 'Apex'),
    new Employee(345345, 'Rabotnik', 15000),
    new WageEmployee(221221, 'Kablan', 1000, 15, 100)
]

function countOfPersonType(persons, type) {              // возвращает пёрсонов определённого типа
    return getPersonsType(persons, type).length;  
}

function getPersonsType(persons, type) {                // 
    return persons.filter(p => p.constructor.name === type);
}

function computeSalaryBudget(persons) {
    const allEmployees = persons.filter(p => !!p.computeSalary);
    const salaryValues = allEmployees.map(p  => p.computeSalary());
    return salaryValues.reduce((res, cur) => res + cur)
}

function countChildrenKindergarten(persons, kindergarten) {
    const allChildren = getPersonsType(persons, "Child");
    return allChildren.reduce((res, cur) => cur.getKindergarten() === kindergarten ? res + 1 : res, 0)
}

const type = "WageEmployee"
const kindergarten = "Apex";
let expected = 1;
console.log(`function countOfPersonType for type ${type} expects ${expected} ... - actual result is ${countOfPersonType(persons, type)}`);
expected = 17500;
console.log(`function computeBudget expects ${expected} ... - actual result is ${computeSalaryBudget(persons)}`);
expected = 2;
console.log(`function countChildrenKindergarten for kindergarten ${kindergarten} expects ${expected} ... - actual result is ${countChildrenKindergarten(persons, kindergarten)}`)
function testOutput(fun, expected) {
    console.log(`function: ${fun.name} ; expects result: ${expected} ... - actual result is ${fun()}`)
}
testOutput(countOfPersonType.bind(undefined,persons,'Child'), 3)