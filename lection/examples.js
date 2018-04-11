function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function isPalindrome(str) {
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++; r--;
    }
    return true;
}

function getLength(array) {
    return array.length;
}

function add(array, item) {
    array.push(item);
}

function getSum(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function bubbleSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
}

bubbleSort();

let results = [];
function checkSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum === total) {
        results.push(arr.slice(0));
    }
}
function find(stack, idx) {
    source[idx] && stack.push(source[idx]);
    checkSum(stack);
    for (let i = idx + 1; i < source.length; i++) {
        source[i] && find(stack, i);
    }
    stack.pop();
}
find([], -1);




let arr = [1,2,3,4,5,6,7,8,9,10];
let search = 8;

function binarySearch(arr, search) {
    let left = 0,
        right = arr.length - 1;

    while (left<right) {
        const mid = Math.floor((left+right) / 2);
        // console.log(mid);
        if (arr[mid]>=search) {
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return arr[right] === search ? right : -1;
}

arr.map(search=>console.log(binarySearch(arr, search)));


const todos = getTodos();
const n = todos.length;

for(let i=0; i < n; i++) {
    document.getElementsByClassName('todo-list')[0].appendChild(renderTodo(todos[i].comment));
}


const todos = getTodos();
const n = todos.length;
const todoListBlock = document.getElementsByClassName('todo-list')[0];

for(let i=0; i < n; i++) {
    todoListBlock.appendChild(renderTodo(todos[i].comment));
}


function multiply(matrixA, matrixB) {
    const matrixC = [];
    for (let i = 0; i < matrixA.length; i++)
        matrixC[i] = [];
    for (let k = 0; k < matrixB[0].length; k++) {
        for (let i = 0; i < matrixA.length; i++) {
            let temp = 0;
            for (let j = 0; j < matrixB.length; j++)
                temp += matrixA[i][j]*matrixB[j][k];
            matrixC[i][k] = temp;
        }
    }
    return matrixC;
}

function decimalToBinary(decimal) {
    if (decimal === 0)
        return '0';

    let binary = '';

    while(decimal > 0) {
        binary = decimal % 2 + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}


function findMax(arr) {
    let max = -Infinity;

    for(let i=0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function renderTodos(todos) {
    const n = todos.length;

    for(let i=0; i < n; i++) {
        document.getElementsByClassName('todo-list')[0]
            .appendChild(renderTodo(todos[i].comment));
    }
}

function renderTodos(todos) {
    const n = todos.length;
    const todoListBlock = document.getElementsByClassName('todo-list')[0];

    for(let i=0; i < n; i++) {
        todoListBlock.appendChild(renderTodo(todos[i].comment));
    }
}


