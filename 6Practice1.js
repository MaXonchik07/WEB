//1)
// let y = "ds";
// if(typeof(y)=='string'){
//     alert("It's String")
// }
// else if(typeof(y)=='boolean'){
//     alert("It's Boolean")
// }
// else if(typeof(y)=='number'){
//     alert("It's Number")
// }

//2)
// let x = prompt("Какой твой знак зодиака?")
// switch(x){
//     case "Овен":
//         alert("Добрый вечер");
//         break;
//     case "Стрелец":
//         alert("Добрый день");
//         break;
//     case "Рак":
//         alert("Доброе утро");
//         break;
// }

//3)
// let n = prompt("Введите число:")
// let k = 0;
// let i = 0;
// for(; i <= n; i++){
//     k+=i;
// }
// alert(k);

// while(i<n){
//     i++;
//     k+=i;
// }
// alert(k);

// do{
//     i++;
//     k+=i;
// }
// while(i<n);
// alert(k)

//4)
// for(let i = 0; i <= 15; i++){
//     if(i%2==0){
//         alert(i + " - Чётное число")
//     }
//     else{
//         alert(i + " - Нечётное число");
//     }
// }

//5)
// let b;
// while(true){
//     b = prompt("Введите число больше 5");
//     if(b==null){
//         break;
//     }
//     else if(b>5){
//         break;
//     }
// }

//6)
// let s = 5;
// let c = s;
// for(let i = 0; i <= c; i++){
//     for(let j = 0; j < i; j++){
//         s += "*";
//     }
//     s += "\n";
// }
// alert(s);