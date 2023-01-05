function holler(){
    console.log("HEY YOU");
}

const whisper = function(){
    console.log("shhhh");
}

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function power(x,y){
    return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

function doMath(a,b,mathFunc){
    return mathFunc(a,b);
}

doMath(30,25, function(a,b){
    console.log(a ** b);
})

function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
        console.log(func(a,b));
    }
}

// ----------------------- FOR EACH -----------------//

const colors = ['teal', 'cyan', 'peach', 'purple'];

colors.forEach(function(val){
    console.log(val.toUpperCase());
})

// const prices = [30.99, 19.99, 2.50, 99.0];
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// })
// console.log(total);

const prices = [30.99, 19.99, 2.50, 99.0];
let total = 0;
for (let price of prices){
    total += price;
}
console.log(total);


console.log(null);


houses = ['brick', 'wood', 'stone'];
function myForEach (arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}

myForEach(houses, function(house, i){
    console.log(house.toUpperCase(), 'at index of', i);
});

houses.forEach(function(houses, i){
    console.log(houses.toUpperCase(), 'at index of', i);
})

// -------------------- MAP ------------------------//

const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function(num){
    return num * -1;
});

const doubles = numbers.map(function(num){
    return num * 2;
})

doubles
negatives

/////////////

const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'feed the chickens',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'low'
    },
    {
        id: 4,
        text: 'mow the lawn',
        priority: 'very high'
    }
];

const todoText = todos.map(function(todo){
    return todo.text;
})

todoText

// const links = Array.from(document.querySelectorAll('a'));
// const urls = links.map(function(a){
//     return a.href;
// });

// -------------------- Writing Map ------------------- //

//Use map to transform an array into another array of the same length//
//Does not overwrite existing array. Only returns a new copy//


function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++){
        const val = mappedArray.push(callback(arr[i], i, arr));
        mappedArray.push(val);
    }
    return mappedArray
};

myMap([1,2,3], function(val){
    return val * 3;
})

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function(str,index){
    return str.repeat(index);
})
console.log("lol".repeat(4));
priorityMap;
repeatedStrings;

// --------------------------Filter------------------------//

//Creates new array, loops through array, runs callback on each value//
//If callback = True, value pushed to new array ---- If callback = False, value not pushed//

let letters = ['a', 'b', 'c', 'b', 'c'];

letters.filter(function(value, index, array){
    return value === 'b';
});

const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapueatics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    ',psuedopsuedopoparthyroidism',
    'unimaginatively'
];

const longWords = words.filter(function(word){
    return word.length >= 20;
});

longWords;
words;

const cOrUWords = words.filter(function(word){
    return word[0] === 'u' || word[0] === 'c';
});

cOrUWords


const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}

const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)) return true;
    }
    return false;
}

const containsVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word){
    return !containsVowel(word);
});

containsVowel
noVowels


// ----------------------- Map & Filter -------------------------------//

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
Array.from(allCheckboxes)[0].checked;

const checked = Array.from(allCheckboxes).filter(function(box){
    console.log(box.checked);
    return box.checked;
})

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})

// -------------------- Writing filter ------------------------------//

function myFilter(arr, callback){
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const shorties = myFilter(words, function(word){
    return word.length <= 10;
})

console.log("hi")