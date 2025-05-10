function sum (x,y){
    document.write(x+y);
}

sum(2,5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120,54);

function testfunction(){
    var localvar = "ariana";
    alert(localvar);
}
testfunction();

var car={name: "mercedes", 
    color:"red",
    year:2020,
    kilometers:0,
    startengine: function(){alert ("the car is moving!");

    },
    get getkilometers(){
       return this .kilometers;
    
    },
    set setkilometers(km){this.kilometers = km;
}
console.log(car.getkilometers);
car.setkilometers = 100;
console.log(car.getkilometers)

