
console.log (BailaComoJuanaLaCubana)

//METODO STRING 1

var str="compadre, compreme un coco, compadre no compro coco, porque como poco coco como, poco coco, compro";

console.log(str.endsWith("compadre"));
console.log(str.endsWith("compreme"));
console.log(str.endsWith("coco", 22));
console.log(str.endsWith("porque"));
console.log(str.endsWith("como"));
console.log(str.endsWith("compro"));

//METODO STRING 2

var calificacionA="Aprueba"
var calificacionB="Raspando"
VentanaCalifica=window.open('https://partyart.com/products/globo-gigante-carita-feliz-amarillo-1-pza', 'ventana1', 'width = 300, height = 300' );

VentanaCalifica.calificaCalificacionB = calificacionB;
VentanaCalifica.calificaCalificacionA = calificacionA;

alert('calificaCalificacionB en ventanaCalifica es' + VentanaCalifica.calificacionB );
alert('calificaCalificacionA en ventanaCalifica es' + VentanaCalifica.calificacionA );

//METODO STRING 3

String.fromCharCode(2,2,1,2,3,4,5,6,8)

//METODO STRING 4
var cadenaGatos="francisca la perra ladra por las noches";

console.log("El carácter en el índice 0 es '" + cadenaGatos.charAt(0) + "'")
console.log("El carácter en el índice 2 es '" + cadenaGatos.charAt(2) + "'")
console.log("El carácter en el índice 15 es '" + cadenaGatos.charAt(15) + "'")
console.log("El carácter en el índice 16 es '" + cadenaGatos.charAt(16) + "'")
console.log("El carácter en el índice 17 es '" + cadenaGatos.charAt(17) + "'")
console.log("El carácter en el índice 31 es '" + cadenaGatos.charAt(31) + "'")
console.log("El carácter en el índice 999 es '" + cadenaGatos.charAt(999) + "'")

//METODO STRING 5

var cadenaGatos="aqui estan los gatos mas gatos y los gatos mas gordos "


document.write("<P>las veces que los gatos comen al dia " +
   cadenaGatos.indexOf("g"))         

document.write("<P>las veces que destruyen las cosas en el dia " +
   cadenaGatos.lastIndexOf("a"))   

document.write("<P>los momentos que se dejan acariciar en el dia " +
   cadenaGatos.indexOf("tos"))   

document.write("<P>las veces que hacen popo al dia " +
   cadenaGatos.lastIndexOf("mas"))

//METODO STRING 6
const ciudad = 'Bogota D,C';

console.log(ciudad.toLocaleUpperCase('en-US'));
console.log(ciudad.toLocaleUpperCase('TR'));


//METODO STRING 7
var worldString = 'verde, Negro,';

console.log(worldString.fontcolor('green') +  ' shreck es color?');
console.log(worldString.fontcolor('black') + ' pelicula los hombres de?');

//METODO STRING 8

var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>

//METODO STRING 9

var hotText = 'Juasna';
var URL = 'https://www.google.com/search?ei=QB8GX97tH4G1gge7hIzgAg&q=google&oq=google&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIGCAAQChBDMgQIABBDMgoIABCxAxCDARBDMgcIABCxAxBDMgQIABBDMgUIABCxAzIECAAQQzIECAAQQzIHCAAQsQMQQzoCCAA6CAgAELEDEIMBUJPA3QpY5dPdCmDl2N0KaABwAHgAgAG-BYgBrhWSAQsyLTIuMS4wLjIuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjejfnSsr7qAhWBmuAKHTsCAywQ4dUDCAw&uact=5';
console.log('Click to return to ' + hotText.link(URL));

//METODO AYYAY 1
let estudiantes = ["Juana y su cuarteto","la del ojo mezquino", "el de la pierna repetida"]
console.log(estudiantes.length)


//METODO ARRAY FUNCIONA CUANDO EL CONSOLE SE ACABA DE ABRIR 2

const arraysando = ['a', 'b', 'c', 'd', 'e'];
console.log(arraysando.copyWithin(5,0,0,0,5));
console.log(arraysando.copyWithin(0,4,0,4,0));
console.log(arraysando.copyWithin(0,0,3,0,0));
console.log(arraysando.copyWithin(0,2,0,2,0));
console.log(arraysando.copyWithin(1, 0, 0,1));
console.log(arraysando.copyWithin(1,2,3,2,1));
console.log(arraysando.copyWithin(5,4,3,2,1));

//METODO ARRAY 3

var arrep = [1, 2, 3, 4,5,6,7,8,9,10];
arrep.map(x => [x * 2]); 
arrep.flatMap(x => [x * 2]);
arrep.flatMap(x => [[x * 2]]);


//METODO ARRAY 4

var juanana = ['arroz', 'con', 'pollo', 'huevo'];

console.log('juanana antes: ' + juanana);
var eliminado = juanana.shift(); 
console.log('juanana después: ' + juanana); 
console.log('Elemento eliminado: ' + eliminado); 


//METODO ARRAY 5

const a = [4,3,2,1,0];
console.log(a); 
a.reverse();
console.log(a); 

//METODO ARRAY 6
function compareNumbers(a, b) {
   return a - b;
 } var numeros = [4, 2, 5, 1, 3];
 numeros.sort(function(a, b) {
   return a - b;
 });




