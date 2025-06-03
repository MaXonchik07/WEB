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



// hours();
// area(11, 51);
// randTwo();
