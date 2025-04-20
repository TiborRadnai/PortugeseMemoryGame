let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let listItem = document.querySelectorAll('.list-item');

btn.onclick = function() {
    sidebar.classList.toggle('active');
}

function activeLink() {
    listItem.forEach(item =>
    item.classList.remove('active'));
    this.classList.add('active');
}

listItem.forEach(item =>
item.onclick = activeLink);