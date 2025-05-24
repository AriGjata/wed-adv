var progammingLanguages = ['javascript','php','java'];

console.log(progammingLanguages );

progammingLanguages.push('php');  

progammingLanguages.pop(); 

progammingLanguages.unshift('c#'); 

progammingLanguages.shift();

console.log(progammingLanguages );

var progammingLanguages1 = ["c#","python","javascript","php","java"];

progammingLanguages1.splice (1,4, "ruby" )

console.log(progammingLanguages1 );

console.log(Math.floor(Math.random()*10));

var students = ['student 1', 'student 2']

var [s1, s2] = students;

console.log(s1);

console.log(s2);

var qytetet = ['podujeva','prishtina','peja','prizreni'];
+
var [q1, ,q3 ,q4] = qytetet;

console.log(q1);
console.log(q3);
console.log(q4);
