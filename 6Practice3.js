function area(a, b) {
    alert(a * b / 2)
}
function randTwo() {
    let a = Math.floor(50 * Math.random());
    alert(a);
}
function hours() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    alert(hour + ':' + min + ':' + sec);
    setInterval(hours, 1000);
}
let t = 1;
function replaceImage() {
    const pic = document.getElementById('one');
    if (t == 1) {
        pic.src = "images/2.png";
        pic.style.border = "2px solid black";
        pic.style.width = "250px";
        t = -1;
    }
    else {
        pic.src = "images/1.png";
        pic.style.border = "2px solid green";
        pic.style.widows = "300px";
        t = 1;
    }
}
// const cars = [
//     { image: 'images/Koenigsegg Jesko Absolut.jpeg', title: 'car 1', text: 'description 1' },
//     { image: 'images/ferrari_296 GTB.webp', title: 'car 2', text: 'description 2' },
//     { image: 'images/Bugatti Veyron Super Sport.webp', title: 'car 3', text: 'description 3' },
// ];
// document.getElementById('butt').addEventListener('click', function () {
//     const container = document.getElementById('container');
//     const car = cars[Math.floor(Math.random() * cars.length)];
//     const div = document.createElement('div');
//     div.className = 'car';
//     const img = document.createElement('img');
//     img.src = car.image;
//     const title = document.createElement('h2');
//     title.textContent = car.title;
//     const text = document.createElement('p');
//     text.textContent = car.text;
//     div.appendChild(img);
//     div.appendChild(title);
//     div.appendChild(text);
//     container.appendChild(div);
// });

let user = localStorage.getItem('user');
function usernamee() {
    if (user) {
        alert(`Привет, ${user}!`);
    } else {
        const login = prompt("Пожалуйста, представьтесь:");
        if (login) {
            localStorage.setItem('user', login);
        }
    }
}

function test() {
    const q = [
        "Сколько параметров у функции splice?",
        "Можно ли объявить массив как: arr = []?",
        "Cколько типов данных в JS?",
        "Как проверить равенство по типу и значению?",
        "Какая функция добавляет элемент в конец массива?"
    ];
    const a = [
        "3",
        "Нет",
        "8",
        "===",
        "push()"
    ];
    const start = document.getElementById('start');
    const result = document.getElementById('res');
    start.onclick = function() {
        let res = '';
        let score = 0;
        for (let i = 0; i < q.length; i++) {
            const answer = prompt(`${i + 1}. ${q[i]}`);
            const canswer = a[i].toLowerCase();
            if (answer === canswer) {
                score++;
            }
            res += `<p>${i + 1}. ${q[i]}Ваш ответ: ${answer || '---'} , ${answer === canswer ? 'Верно' : 'Неверно'}; Правильный: ${a[i]}</p>`;
        }
        result.innerHTML = `Результат: ${score} из ${q.length}` + res;
    };
}

// test()
// usernamee()
// hours();
// area(121, 51);
// randTwo();
