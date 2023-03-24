// 오늘 날짜와 기준 날짜 설정하기
var now = new Date();
var firstDay = new Date("2023-01-01");

//만난지 N일 되는날 계산
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";


// 만난지 N일 되는 날 구하기!
function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);

    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var day = someday.getDate();

    document.querySelector("#date"+ days).innerText = year + "년 " + month + "월 " + day + "일 ";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);