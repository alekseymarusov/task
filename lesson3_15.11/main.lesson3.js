
var arr = Array(13, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
var max = 0;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[0]){
        arr[0] = arr[i];
        max = arr[0];
    } 
}
document.write("наибольшое значение: " + max + '<br>');



var arr = Array(13, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
var min = 0
for (var i = 0; i < arr.length; i++) {
    if(arr[i] < arr[0]){
        arr[0] = arr[i];
       min = arr[0];
    } 
}
document.write("наименьшое значение: " + min + '<br>'); 



var arr = Array(13, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
var sum = 0;
 for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
document.write("сумма чисел: " + sum + '<br>');


var arr = Array(13, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
var middle = sum / arr.length
document.write("среднее арифметическое: " + middle);















    



