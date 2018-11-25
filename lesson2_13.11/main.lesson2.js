var memory = [8, 16, 32, 64, 128];
var price = 0;
 
 while (true) {
     memory = prompt('выберите память');
     if (memory === '8') {
         price = 5000;
         break;
     }
     if (memory === '16') {
         price = 7000;
         break;
     }
     if (memory === '32') {
         price = 10000;
         break;
     }
     if (memory === '64') {
         price = 15000;
         break;
     }if (memory === '128') {
         price = 22000;
         break;
     }
 }
 
 document.write('<h1>' + memory + ' гб. памяти: ' + price + ' грн.</h1>')

