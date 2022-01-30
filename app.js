
/************************* HW 13 *********************** */
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
    }
}
function myMap(array, callback) {
    const res = [];
    function forEachCall(n, i, a) {
            res.push(callback(n, i, a));
    }
    myForEach(array, forEachCall);
    return res;
}


/************************* HW 14 *********************** */

function myFilter(array, callbackPredicate) {
    const res = [];
    // function forEachCallback(n, i, a) {
    //         if (callbackPredicate(n, i, a)) {
    //                 res.push(n);
    //         }
    // }
    myForEach(array, (n, i, a) => callbackPredicate(n, i, a) && res.push(n) );
    return res;
}


function myReduce(array, callbackReduce, initial) {
        
    if (initial === undefined) {
            initial = array[0];
            array = array.slice(1);
    }
    let res = initial;
    // function forEachCallack(n, i, a) {
    //          res = callbackReduce(res,n,i,a );       
    // }
    myForEach(array,(n, i, a) => res = callbackReduce(res, n, i, a));
    return res;
}

const ar20 = [13, 17, 20, 23, 2, 40,50];
const arEvenOdd = myFilter(ar20,(n, _i, a) => a.length % 2 == 0 ?
 n % 2 == 0 : n % 2 == 1);
console.log(arEvenOdd);
let res = myReduce(ar20, (res, cur) => res + cur, 0);
console.log(res)
let max = myReduce(ar20,(max, cur)=>cur > max ? cur : max, ar20[0]);
console.log(max);

// reduce with no second argument
res = myReduce(ar20,(res, cur) => res + cur);
max = myReduce(ar20,(max, cur)=>cur > max ? cur : max);
console.log(res);
console.log(max);
