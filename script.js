const form = document.querySelector("form");
const input = document.getElementById("item");
const ul = document.querySelector("ul");
let items = [];

if (localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'))
}

form.addEventListener('submit', function (e) {
    items.push(input.value);

    localStorage.setItem('items', JSON.stringify(items));
})

for (var i = 0; i < items.length; i++) {
    console.log(items[i])

    const li = document.createElement("li");
    li.textContent = items[i];

    ul.appendChild(li);
}