// function printnames (){
//     document.write("Ron");
//     document.write("<br>");
//     setTimeout(function () { document.write("Bjaush"); } ,3000  );
// }
// printnames ();

var colors= ['red', 'green','blue', 'purple'];
function changeColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

var names = ['lora', 'ilma','elma','erona','nita'];
function changenames(){
    document.querySelector('p').innerHTML= names[Math.floor(Math.random()*names.length)]
}

setInterval(changeColor, 1000);
setInterval(changenames, 500);
