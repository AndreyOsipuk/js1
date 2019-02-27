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
let $cell = $('.cell');
for (i=1; i<9; i++) {
    $($cell[i]).html(letters[i-1]).css({transform: 'rotate(180deg)'});
    $($cell[i+10]).html(blackFigure2[i-1]); //Заполнение доски фигурами
    $($cell[i+20]).html(blackFigure1[i-1]); //Заполнение доски фигурами
}
for (i=91; i<100; i++) {
    $($cell[i]).html(letters[i-91]);
    $($cell[i-10]).html(whiteFigure2[i-91]); //Заполнение доски фигурами
    $($cell[i-20]).html(whiteFigure1[i-91]); //Заполнение доски фигурами
}
for (i=10, j=0; i<100; i+=10, j++) {
    $($cell[i]).html(numbers[j]);
}
for (i=19, j=0; i<100; i+=10, j++) {
    $($cell[i]).html(numbers[j]).css({transform: 'rotate(180deg)'});
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
    $($cell[i]).addClass('blackCell');
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
    $($cell[j]).addClass('whiteCell');
}

//Удаляю рамки для крайних ячеек
for (i=0; i<100; i++) {
    if (i<10) {
        $($cell[i]).addClass('outTable');
    }
    if (i%10 == 0 && i<91) {
        $($cell[i]).addClass('outTable');
    }
    if (String(i)[1] == 9) {
        $($cell[i]).addClass('outTable');
    }
    if (i>90) {
        $($cell[i]).addClass('outTable');
    }
}
let activeCell;
let beforeCell = $cell[0];
let click = 0;
//Логика перемещения фигур
$($cell).click(function() {
    activeCell = $(this);
    if (activeCell.hasClass('outTable')) {
        return;
    };
    $(beforeCell).removeClass('active');
    if (click == 0) {
        if (activeCell.html() != '') {
            activeCell.addClass('active');
            click = 1;
        }
    } else {
        click = 0;
        if (activeCell.html() == '') {
            activeCell.html(beforeCell.html());
            beforeCell.html('');
        }
    }
    beforeCell = $(this);
    cursor();
});
let whiteCell = $('.whiteCell');
let blackCell = $('.blackCell');
cursor();
function cursor() {
    for (i=0; i<$('.whiteCell').length; i++) {
        if ($(whiteCell[i]).html() != '') {
            $(whiteCell[i]).css({cursor: 'pointer'});
        }
    }
    for (i=0; i<$('.blackCell').length; i++) {
        if ($(blackCell[i]).html() != '') {
            $(blackCell[i]).css({cursor: 'pointer'});
        }
    }
}