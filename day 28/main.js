// for loop
let text1="";

for(let i = 0; i<10 ; i++){
    text1+="the number is "+ i + "<br>";
}

document.getElementById("demo1").innerHTML = text1;

const car=["bmw", "audi", "toyota", "ford", "honda", "kia", ];

    let text  ="";
    for (let i = 0; i<car.length;i++){
        text += car[i] +"<br>";
    }
    document.getElementById("demo2").innerHTML= text;

    // For/in

    const person = {name:"Valmir", lastname:"Gashi", age:10};

    let txt ="";

    for (let x in person){
        txt += person[x] + " ";
    }
    document.getElementById("demo3").innerHTML=txt;
    
    // for off
    const ds = ["html", "css", "js", "php", "mysql"];
    let text4 ="";

    for (let x of ds){
        text4 += x+ "<br>";
    }
        document.getElementById("demo4").innerHTML=text4;

// for off 2
let language ="javascript";
let text6 ="";
for (let x of language){
    text6 += x + "<BR>";
    }
    document.getElementById("demo6").innerHTML=text6;



        // while loop
        let text5 ="";
        let i = 0;
        while(i<10){
            text5+="the number is "+ i + "<br>";
            i++;
        }
        document.getElementById("demo5").innerHTML=text5;
