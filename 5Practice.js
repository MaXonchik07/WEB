document.addEventListener('DOMContentLoaded', function () {
  const acclink = document.getElementById('user');
  let uname = localStorage.getItem('savedName');
  if(!uname){
    uname = prompt("Пожалуйста, представьтесь:");
    if(uname != ""){
      localStorage.setItem('savedName', uname);
      alert(`Приветствую, ${uname}!`);
    }
    else{
      uname = "Account";
      localStorage.setItem('savedName', uname);
    }
  }
  acclink.textContent = uname;
});
const theme = document.getElementById('themebtn');
function changeTheme(){
  const grad = document.querySelector('.gradient');
  const back = document.querySelector('.imag1');
  document.body.classList.toggle('dark');
  grad.classList.toggle('gradient-dark');
  back.classList.toggle('imag1-dark');

  if(document.body.classList.contains('dark')){
    theme.textContent = 'Светлая тема';
  } 
  else{
    theme.textContent = 'Темная тема';
  }
}
theme.addEventListener('click', changeTheme);
const questions = [
  "Какое из этих мест считается одним из новых семи чудес света?",
  "Какой вид транспорта считается самым быстрым для межконтинентальных путешествий?",
  "В какой стране находится город Венеция?",
  "Что обычно нужно сделать перед поездкой за границу?",
  "Как называется популярное туристическое место в Египте, известное своими пирамидами?",
  "Какой сезон считается наиболее популярным для отдыха на море в Европе?",
  "Какой документ обязательно нужен для международных поездок?",
  "Что такое туристический путеводитель?",
  "Какая страна славится своей кухней, включая пиццу и пасту?",
  "В какой стране есть чудо света?"
];
const options = [
  ["Эйфелева башня", "Мачу-Пикчу", "Колизей", "Статуя Свободы"],
  ["Поезд", "Самолёт", "Автомобиль", "Корабль"],
  ["Италия", "Франция", "Греция", "Испания"],
  ["Купить сувениры", "Забронировать отель на месте", "Обменять деньги после приезда", "Получить визу или проверить документы"],
  ["Луксор", "Гиза", "Каирский зоопарк", "Александрия"],
  ["Зима (декабрь-февраль)", "Осень (сентябрь-ноябрь)", "Лето (июнь-август)", "Весна (март-май)"],
  ["Водительское удостоверение", "Медицинская карта", "Свидетельство о рождении", "Заграничный паспорт или виза"],
  ["Карта города без описаний", "Специальный чемодан для путешествий", "Специальный чемодан для путешествий", "Книга или приложение с информацией о достопримечательностях и маршрутах"],
  ["Франция", "Россия", "Япония", "Италия"],
  ["Египет", "Монголия", "США", "Испания"]
];
const canswer = [
  "Мачу-Пикчу",
  "Самолёт",
  "Италия",
  "Получить визу или проверить документы",
  "Гиза",
  "Лето (июнь-август)",
  "Заграничный паспорт или виза",
  "Книга или приложение с информацией о достопримечательностях и маршрутах",
  "Италия",
  "Египет"
];
for(let i = 0; i < questions.length; i++){
  const q = document.createElement('div');
  q.innerHTML = `<h4>${i + 1}. ${questions[i]}</h4>`;
  for(let j = 0; j < options[i].length; j++) {
    const inp = document.createElement('label');
    inp.innerHTML = `<input type="radio" name="q${i}" value="${options[i][j]}"> ${options[i][j]}`;
    q.appendChild(inp);
    q.appendChild(document.createElement('br'));
  }
  document.getElementById('quest').appendChild(q);
}
const savedAnsw = localStorage.getItem('saveAnswer');
let result = '';
document.getElementById('check').onclick = function(){
  let score = 0;
  for(let i = 0; i < questions.length; i++){
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const answer = selected ? selected.value : null;
    if(answer == canswer[i]){
      score++;
      result += `<p>Вопрос ${i + 1}: верно</p>`;
    } 
    else{
      result += `<p>Вопрос ${i + 1}: неправильно. Ваш ответ: "${answer || '---'}". Правильный: "${canswer[i]}"</p>`;
    }
  }
  localStorage.setItem('saveAnswer', result);
  document.getElementById('res').innerHTML = `<h3>Результаты:</h3>${result}<p>Правильных: ${score}/${questions.length}</p>`;
};
if(window.innerWidth > 491){
  document.getElementById('user').onclick = function(){
    const okno = document.createElement('answ');
    okno.className = 'dialog';
    if(savedAnsw){
      okno.innerHTML = `<h3>Результаты теста</h3>${savedAnsw}<button id="close">Закрыть</button>`;
    }
    else{
      okno.innerHTML = `<h3>Результаты теста</h3>${result}<button id="close">Закрыть</button>`;
    }
    document.body.appendChild(okno);
    document.getElementById('close').onclick = function(){
      document.body.removeChild(okno);
    };
  };
}
else{
  document.getElementById('user1').onclick = function(){
    const okno = document.createElement('answ');
    okno.className = 'dialog';
    if(savedAnsw){
      okno.innerHTML = `<h3>Результаты теста</h3>${savedAnsw}<button id="close">Закрыть</button>`;
    }
    else{
      okno.innerHTML = `<h3>Результаты теста</h3>${result}<button id="close">Закрыть</button>`;
    }
    document.body.appendChild(okno);
    document.getElementById('close').onclick = function(){
      document.body.removeChild(okno);
    };
  };
}
