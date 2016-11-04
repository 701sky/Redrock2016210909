var num = 0;
function jsq(num) {
    document.getElementById('fa').value += num;

}
function dengyu() {
    document.getElementById('fa').value = 
    eval(document.getElementById('fa').value);
}
function qingchu() {
    document.getElementById("fa").value = null;
}
function tuige() {
    var equation = document.getElementById("fa")
    equation.value = equation.value.substring(0,equation.value.length - 1);

}
function onload() {
    document.getElementById('fa').focus();
}
function baifenzhi(){
    document.getElementById('fa').value = document.getElementById('fa').value*0.01;
}