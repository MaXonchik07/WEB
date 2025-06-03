//1)
// const man=[];
// const duck = ['Donald', 'Scrudg', 10, 5, 'Misha'];
// const cat = new Array();
// alert(duck[4]);
// duck[4] = "Alex";
// alert(duck[4]);
// duck.forEach(function(item, index){
//     alert(`${index}-${item}`);
// });
// for(let i = 0; i < 5; i++){
//     console.log(duck[i]);
// }

//2)
// const nums = [12, 6534, 31, 'dog', 'Slender'];
// let c = prompt("Введите номер операции");
// switch(c){
//     case '1':
//         let e = prompt("Введите элемент для массива");
//         nums.unshift(e);
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
//     case '2':
//         let r = prompt("Введите элемент для массива");
//         nums.push(r);
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
//     case '3':
//         nums.shift();
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
//     case '4':
//         nums.pop();
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
//     case '5':
//         let x = prompt("Введите элемент для массива");
//         let y = prompt("Введите индекс элемента");
//         nums.splice(y,0,x);
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
//     case '6':
//         let index = prompt("Введите индекс элемента массива");
//         nums.splice(index,1,);
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
//     case '7':
//         let elem = prompt("Введите новый элемент массива");
//         let ind = prompt("Введите индекс элемента массива");
//         nums.splice(ind, 1, elem);
//         for(let i = 0; i < nums.length; i++){
//             console.log(nums[i]);
//         }
// }