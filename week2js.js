// answer 1
function addition (firstnum,secondnum,thirdnum) 
 { 
	let sum = firstnum + secondnum + thirdnum; 
 	return sum; 
 } 
 console.log(addition(1,2,3)); 

 // answer 2
  function colorCar(color1) 
 { 
 	console.log(`a ${color1} car`); 
 } 
 colorCar("red"); 

 // answer 3
var car = {long:"100", width:"200", wight:"500kg"};
 function cartype(as) 
 { 
 let ii = Object.keys(as).length 
 console.log(ii); 
 for (i=0;i<ii;i++) 
 { 
 console.log(Object.getOwnPropertyNames(as)[i]+"="+ as[Object.keys(as)[i]]); 
 } 
 } 
 cartype(car);  

 // answer number 4 
 function vehicleType(color2,code) 
 { 
 	if (code == 1) 
 	{ 
 		console.log(`a ${color2} car`); 
 	} 
 	else if (code == 2) 
 	{ 
 		console.log(`a ${color2} motorbike`); 
 	} 
 } 
 vehicleType("blue",2); 
 vehicleType("red",1); 

 // answer number 5 
 3 == 3 ? console.log("true") : console.log("false"); 

 // answer number 6 
 function vehicleusd(color3,code3,age) 
 { 
 	if (code3 == 1 && age > 0 ) 
 	{ 
 		console.log(`a ${color3} used car`); 
 	} 
 	else if (code3 == 1 && age <= 0 ) 
 	{ 
 		console.log(`a ${color3}  new car`); 
 	} 
 	else if (code3 == 2 && age > 0 ) 
 	{ 
 		console.log(`a ${color3} used motorbike`); 
 	} 
 		else if (code3 == 2 && age <= 0 ) 
 	{ 
 		console.log(`a ${color3} new motorbike`); 
 	} 
 } 
 vehicleusd("blue",1,5); 
 vehicleusd("blue",1,0); 
 vehicleusd("red",2,5); 
 vehicleusd("red",2,0); 

 // answer number 7 
 var listvehicles=["motorbike", "caravan", "bike","car"]; 
 // answer number 8 
 console.log(listvehicles[2]); 
 // answer number 9 
 function vehicle2(color,age,order) 
 { 
 	if (age>0) 
 	{ 
 	console.log("a "+ color+" new "+listvehicles[order]); 
 	} 
 	else 
 	{ 
 	console.log("a "+ color+" used "+listvehicles[order]); 
 	 
 	} 
 } 
 vehicle2("green", 3, 1); 

// answer number 10 
// answer number 11 
var adv="Amazing Joe's Garage, we service ";
var adv1=listvehicles[0];
 for ( let j=1;j<listvehicles.length-1;j++)
 {
 	var adv1= adv1 + ", " + listvehicles[j];
 }
var adv2= " and " + listvehicles[listvehicles.length-1];
console.log(adv + adv1 + adv2);

// answer number 12 
 var empty = {}; 
 // answer number 13 
 var obj1 = { 
        	 a: 1, 
        	 b: 'this is the letter b', 
         	 c: { foo: 'what is a foo anyway', 
             	 bar: [1,2,3,4], 
           		 } 
     		} 
     
 var obj2 = { 
		       a: '1', 
		       b: 'this is the letter b', 
		       c: { foo: 'what is a foo anyway', 
		              bar: [1,2,3,4], 
       				 } 
     		} 
 // let obj3=obj1 
 //     console.log(Object.is(obj1,obj3)); 
     function comp(ob1,ob2) 
     { 
 	
 		if (ob1 === ob2) { 
 		console.log("obj1 === obj2 is true"); 
		 } 
		 else { 
 		console.log("obj1 === obj2 is false"); 
		 } 
 
	 }
comp(obj1,obj2); 
function comp1(object1,object2) 
     { 
 		if (object1 == object2) { 
 		console.log("obj1 == obj2 is true"); 
		 } 
		 else { 
 		console.log("obj1 == obj2 is false"); 
		 } 
		}
comp1(obj1,obj2);

// answer number 14 
 function foo(func) { 
    func();
     } 
      
 function bar() { 
        console.log("Hello, I am bar!"); 
     } 
 foo(bar); 
// answer number 15
 var x = [1,2,3]; 
 var y = [1,2,3]; 
 var z = y; 

 console.log(x == y); 
 console.log(x === y); 
 console.log(z == y); 
 console.log(z == x); 

 // answer number 16
  var o1 = { foo: 'bar' };
  var o2 = { foo: 'bar' };
  var o3 = o2; 
  console.log("o2 and o3 befor changing o2");
console.log(o2);
  console.log(o3);
  o2={foo:'bar2'};
  console.log("o2 and o3 after changing o2");
console.log(o2);
  console.log(o3);

console.log("o1 and o3 befor changing o1");
console.log(o1);
  console.log(o3);
  o1={foo:'bar1'};
  console.log("o1 and o3 after changing o1");
console.log(o1);
  console.log(o3);


  let barbar = 42; 
console.log(typeof typeof barbar);
console.log("it is print the typeof of word number")

 

