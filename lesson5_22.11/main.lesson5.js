 /*--------Задание 2--------*/

var characters = [
{ 'name': 'barney', 'age': 36 },
{ 'name': 'fred', 'age': 40 }
];

function pluck(arr, key) {
  var out = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i][key]) out.push(arr[i][key]);
  }
  return out;
}

console.log(pluck(characters, 'name'));

						
 /*--------Задание 3--------*/

// function map(fn, array) {
//     var array2 = [];
//  for(var i=0; i<array.length; i++){
//   array2[i] = fn(array[i]);
//  }
//  return array2;
// }