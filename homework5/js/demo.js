function jsleftin() {
    var inputnum = document.getElementById("input").value;
    var div = document.createElement("div");
    var text = document.createTextNode(inputnum);
    div.className = "num";
    div.appendChild(text);
    var n = document.getElementById("n");
    n.insertBefore(div, n.children[0]);
}

function jsrightin() {
    var inputnum = document.getElementById("input").value;
    var div = document.createElement("div");
    var text = document.createTextNode(inputnum);
    div.className = "num";
    div.appendChild(text);
    var n = document.getElementById("n");
    n.insertBefore(div, n.lastChild);
}
function jsleftout() {

    var delleft = document.getElementById("n");
    var firstnode = delleft.firstElementChild;
    var num = firstnode.innerHTML;
    document.getElementById("input").value = num ;
    delleft.removeChild(firstnode);
}
function jsrightout() {

    var delleft = document.getElementById("n");
    var lastnode = delleft.lastElementChild;
    var num = lastnode.innerHTML;
    document.getElementById("input").value = num ;
    delleft.removeChild(lastnode);
}