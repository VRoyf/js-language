
/*********** Arrays ****************/

const ar = [2, 100, 9, 80];

ar.sort(function (a, b) {
    return a - b;
});

ar.sort((a,b) => a - b);               // Стрелочная функция
console.log(`ar is ${ar.toString()}`);


/********** HW #12 definition 

const arHw = [13, 28, 4, 15, 25, -10, 40, 18, 27];
expected [-10, 4, 28, 40, 27, 25, 17, 15, 13];
to write a comparator which returns < 0 (if 1st less then 2nd); > 0 (if 1st greater then 2nd); == 0 (if 1st = 2nd);

******************************************/

// to add an element/s at the end of array:

ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);
const ar1 = [-9, 30, -52];
ar.push(...ar1); // Соединения массива с массивом
console.log(ar);

//метод Splice для вставки или замены элемента в любом месте
// 1 аргумент - индекс для вставки или замены, 2 аргумент - число удаляемых элементов (если 0 - ничего не удалится), 3 аргумент - собственно элемент для вставки

ar.splice(2,0,123,321);
console.log(ar);

// remove element

let el = ar.pop(); //remove last element and returns it
//el = -57; -57 will be remove from array
el = ar.shift(); //remove first elemet and returns it
//el = 27; 27 will be removed from array
console.log(el, ar);

const matrix1 = [[1,2,3][4,5,6][7,8,9][10,11,12]];
const matrix2 = [[100,20][50,-5][34,28];
function displayMatrix(matrix) {
    for (let i = 0, i < matrix.length, i++){
        let row = ' ';
        for (let j = 0; j < matrix[i].length; j++) {
            row = row + matrix[i][j] + ' '
        }
        console.log(row);
    }
}






