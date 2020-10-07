const form = document.querySelector("form");
const input = document.getElementById("item");
const ul = document.querySelector("ul");
// let items = [];

// if (localStorage.getItem('items') !== undefined) {
//     items = JSON.parse(localStorage.getItem('items'))
// } else {


// ternary if
let items = (localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : []

form.addEventListener('submit', function (e) {
    items.push(input.value);

    localStorage.setItem('items', JSON.stringify(items));
})

function showitems() {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i])
    
        const li = document.createElement("li");
        li.textContent = items[i];
    
        ul.appendChild(li);
    }
}

function clearItems() {
    localStorage.removeItem('items')

    items = [];

    ul.innerHTML = '';
}

showitems()