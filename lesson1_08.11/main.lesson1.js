var color = prompt('Какой цвет телефона?');

if (color === 'чёрный') {
    document.write('<img src="../lesson1_08.11/images/black.png" alt="">');
    var memory  = prompt('Какая память телефона вам нужна? Выберити - 4, 6 или 8.');
    if (memory === '4') {
        alert('2000 грн');
    } else if (memory === '6') {
        alert('3000 грн');
    } else if (memory === '8') {
        alert('5000 грн');
    } else {
        alert('нет в наличие такой памяти');
    }
} else if (color === 'золотой') {
    document.write('<img src="../lesson1_08.11/images/gold.png" alt="">');
    var memory  = prompt('Какая память телефона вам нужна? Выберити - 4, 6 или 8.');
    if (memory === '4') {
        alert('2000 грн');
    } else if (memory === '6') {
        alert('3000 грн');
    } else if (memory === '8') {
        alert('5000 грн');
    } else {
        alert('нет в наличие такой памяти');
    }
} else if (color === 'серебреный') {
    document.write('<img src="../lesson1_08.11/images/silver.png alt="">');
    var memory  = prompt('Какая память телефона вам нужна? Выберити - 4, 6 или 8.');
    if (memory === '4') {
        alert('2000 грн');
    } else if (memory === '6') {
        alert('3000 грн');
    } else if (memory === '8') {
        alert('5000 грн');
    } else {
        alert('нет в наличие такой памяти');
    }
} else {
    document.write('<img src="../lesson1_08.11/images/default.png" alt="">');
}

