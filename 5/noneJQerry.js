let letters = 'abcdefgh';
letters = letters.toUpperCase().split('');
let numbers = '12345678'
numbers = numbers.split('');

//Создание массива шахматных фигур в виде HTML кода
let whiteFigure1 = '&#9817;, &#9817;, &#9817;, &#9817;, &#9817;, &#9817;, &#9817;, &#9817;';
let whiteFigure2 = '&#9814;, &#9816;, &#9815;, &#9813;, &#9812;, &#9815;, &#9816;, &#9814;';
let blackFigure1 = '&#9823;, &#9823;, &#9823;, &#9823;, &#9823;, &#9823;, &#9823;, &#9823;';
let blackFigure2 = '&#9820;, &#9822;, &#9821;, &#9819;, &#9818;, &#9821;, &#9822;, &#9820;';
whiteFigure1 = whiteFigure1.split(', ');
whiteFigure2 = whiteFigure2.split(', ');
blackFigure1 = blackFigure1.split(', ');
blackFigure2 = blackFigure2.split(', ');

//Заполнение букв и цифр на доске
let $cell = document.getElementsByClassName('cell');
for (i=1; i<9; i++) {
    $cell[i].innerHTML = letters[i-1];
    $cell[i].style.transform = 'rotate(180deg)';
    $cell[i+10].innerHTML = blackFigure2[i-1]; //Заполнение доски фигурами
    $cell[i+20].innerHTML = blackFigure1[i-1]; //Заполнение доски фигурами
}
for (i=91; i<99; i++) {
    $cell[i].innerHTML = letters[i-91];
    $cell[i-10].innerHTML = whiteFigure2[i-91]; //Заполнение доски фигурами
    $cell[i-20].innerHTML = whiteFigure1[i-91]; //Заполнение доски фигурами
}
for (i=10, j=0; i<89; i+=10, j++) {
    $cell[i].innerHTML = numbers[j];
}
for (i=19, j=0; i<90; i+=10, j++) {
    $cell[i].innerHTML = numbers[j];
    $cell[i].style.transform = 'rotate(180deg)';
}

//Заполняю черные ячейки
for (i=12; i<90; i+=2) { 
    if (i%10 == 0) {
        i--;
        continue;
    }
    if (String(i)[1] == 9) {
        i++;
        continue;
    }
    $cell[i].classList.add('blackCell');
}

//Заполняю белые ячейки
for (j=11; j<90; j+=2) {
    if (j%10 == 0) {
        j--;
        continue;
    }
    if (String(j)[1] == 9) {
        j++;
        continue;
    }
    $cell[j].classList.add('whiteCell');
}

//Удаляю рамки для крайних ячеек
for (i=0; i<100; i++) {
    if (i<10) {
        $cell[i].classList.add('outTable');
    }
    if (i%10 == 0 && i<91) {
        $cell[i].classList.add('outTable');
    }
    if (String(i)[1] == 9) {
        $cell[i].classList.add('outTable');
    }
    if (i>90) {
        $cell[i].classList.add('outTable');
    }
}
let activeCell;
let beforeCell = $cell[0];
let click = 0;
//Логика перемещения фигур
let table = document.getElementsByClassName('table')[0];
table.onclick = function(event) {
    activeCell = event.target;
    if (activeCell.classList.contains('outTable')) {
        return;
    };
    beforeCell.classList.remove('active');
    if (click == 0) {
        if (activeCell.innerHTML != '') {
            activeCell.classList.add('active');
            click = 1;
        }
    } else {
        click = 0;
        if (activeCell.innerHTML == '') {
            activeCell.innerHTML = beforeCell.innerHTML;
            beforeCell.innerHTML = '';
        }
    }
    beforeCell = event.target;
};


