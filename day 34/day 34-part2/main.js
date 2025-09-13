var circle=document.getElementById("circle"); 
var showTime=document.getElementById("time"); 
var timeStart= new Date ().getTime();

function showcircle(){
circle.style.display='block';
 circle.style.top=Math.random()*500 + 'px';
 circle.style.left=Math.random()*900 + 'px';
 circle.style.backgroundColor=randomcolor();
 timeStart = new Date().getTime();
}
showcircle();

circle.onclick = function(){
    circle.style.display = 'none';
    setTimeout(showcircle, 1000);
    var timeend = new Date().getTime();
    var time = (timeend-timeStart)/1000;
    showTime.innerHTML= time+'s';
}
function randomcolor(){
    var s = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i<6;i++){
        color = color + s[Math.floor(Math.random()*16)]
    }
    return color;
}