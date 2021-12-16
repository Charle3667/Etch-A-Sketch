const container = document.querySelector('#container');


const black = document.querySelector('#black');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const eraser = document.querySelector("#eraser");
const clear = document.querySelector('#clear');

window.onload=function() {
    fullGrid(128);
};


black.addEventListener('click', () => {
    turnBlack()
})

red.addEventListener('click', () => {
    turnRed()
})

blue.addEventListener('click', () => {
    turnBlue()
})

eraser.addEventListener('click', () => {
    erase()
})

clear.addEventListener('click', () => {
    clearScreen()
})

// The issue with a random color generator function is that each div is know as 'div#column', 
// so giving a event to one of the divs is the same as giving on to all of them. Maybe each div could be assigned a random class.

const gridOne = document.querySelector('#gridOne')
const gridTwo = document.querySelector('#gridTwo')
const gridThree = document.querySelector('#gridThree')

gridOne.addEventListener('click', () => {
    eightBy()
})

gridTwo.addEventListener('click', () => {
    sixtyBy()
})

gridThree.addEventListener('click', () => {
    hundredBy()
})

let clearGrid = function() {
    container.innerHTML = ""
}

let eightBy = function() {
    clearGrid()
    fullGrid(8)
    turnBlack()
}

let sixtyBy = function() {
    clearGrid()
    fullGrid(64)
    turnBlack()
}

let hundredBy = function() {
    clearGrid()
    fullGrid(128)
    turnBlack()
}

let turnBlack = function() {
    const column = document.querySelectorAll('#column');
    column.forEach((div) => {
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        },
        false)
    });
}

let turnRed = function() {
    const column = document.querySelectorAll('#column');
    column.forEach((div) => {
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'red';
        },
        false)
    });
}
let turnBlue = function() {
    const column = document.querySelectorAll('#column');
    column.forEach((div) => {
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'blue';
        },
        false)
    });
}

let erase = function() {
    const column = document.querySelectorAll('#column');
    column.forEach((div) => {
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'white';
        },
        false)
    });
}

let clearScreen = function() {
    const column = document.querySelectorAll('#column');
    column.forEach((div) => {
        div.style.backgroundColor = 'white'
    });
}


// start of code for grid creation

let createRow = function(x) {
    var x = document.createElement('div')
    x.id = 'row';
    container.appendChild(x);
}

let createGridX = function(x) {
    for (i=0; i < x; i++) {
        console.log("First loop " + i)
        createRow(i)
    }
    const rows = document.querySelectorAll('#row')
    return(rows)
}

let createColumn = function(){
    const rows = document.querySelectorAll('#row')
    rows.forEach((row) => {
        var newDiv = document.createElement('div')
        newDiv.id = 'column';
        row.appendChild(newDiv);
    }); 
}

let createGridY = function(x) {
    for(i=0; i<x; i++) {
        createColumn()
    }
}

let fullGrid = function(x) {
    createGridX(x)
    createGridY(x)
}

// end of code for grid creation
