var num1 = parseInt(prompt("첫번째 수 입력하기 : "));
var num2 = parseInt(prompt("두번째 수 입력하기 : "));
var result = add(num1, num2);
document.write("결과는 " + result);

function add(a, b) {
    var sum = a + b;
    return sum;
}