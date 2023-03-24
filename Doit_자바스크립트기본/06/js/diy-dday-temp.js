var now = new Date();
var firstDay = new Date("2023-03-23");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector('#accent').innerText = passedDay + "일";

function calcDate(days) {
    var future = firstDay.getTime() + days * (24*60*60*1000);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();

    document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일 ";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
