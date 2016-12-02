window.onload = function () {
    var container = document.querySelector('#container');
    var points = document.querySelector('#points').getElementsByTagName('span');
    var displaybox = document.querySelector('#displaybox') 
    var prev = document.querySelector('#prev');
    var next = document.querySelector('#next');
    var no = 1;
    var nextone;
    function animate (offset){
        var newleft = parseInt(displaybox.style.left) + offset;
        var totaltime = 600;
        var inteval = 20;
        var speed = offset/(totaltime/inteval);
        function run() {
            if ((speed < 0 && parseInt(displaybox.style.left) > newleft) || (speed > 0 && parseInt(displaybox.style.left) < newleft)) {
                displaybox.style.left = parseInt(displaybox.style.left) + speed + 'px';
                setTimeout(run,inteval);
            }
            else{
                displaybox.style.left =newleft +'px';
                if (newleft > -800) {
                    displaybox.style.left = -7200 + 'px';
                }
                if (newleft < -7200) {
                    displaybox.style.left = -800 + 'px'; 
                }

            }
        }
        run();
        
    }
    function pointon(){
        for (var i = 0; i < points.length; i++) {
            if (points[i].className =='on') {
                points[i].className ='';
                break;
            }
        }
        points[no - 1].className = 'on' 
    }
    next.onclick = function() {
        if (no == 9) {
            no = 1;
        }
        else{
            no += 1;
        }
        pointon();
        
        if (parseInt(displaybox.style.left) < -7200) {
            displaybox.style.left = -800 + 'px';
        }
        animate(-800)
    }
    prev.onclick = function() {
        
        
        if (no == 1) {
            no = 9;
        }
        else{
            no -= 1;
        }
        pointon();
            if (parseInt(displaybox.style.left) > -800) {
            displaybox.style.left = -7200 + 'px';
        }
        animate(800);
    }
    for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click",function(){
        var thisno = parseInt(this.getAttribute('no'));
        var offset = -800* (thisno - no);
        no = thisno;
        animate(offset);
        pointon();
        });
    }
    function skip (){
        nextone = setInterval(function(){
            next.onclick();
        }
    ,2333);       
    }
    function stop(){
        clearInterval(nextone);
    }
    container.onmouseover = stop();//好气哦这个bug就是de不掉，说好的放上去就停呢
    container.onmouseout = skip();
}