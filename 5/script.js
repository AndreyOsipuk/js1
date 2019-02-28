//Создание структуры HTML
let table = '<div class="table"></div>';
let wordsWrap = '<div class="wordsWrap"></div>';
let word = '<div class="word"></div>';
let numberWrap = '<div class="numberWrap"></div>';
let number = '<div class="number"></div>';
let chess = '<div class="chess"></div>';
let cell = '<div class="cell"></div>';
$('body').append(table);
$('.table').append(wordsWrap).append(numberWrap).append(chess).append(numberWrap).append(wordsWrap);
for (i = 0; i < 8; i++) {
    $('.wordsWrap').append(word);
}
for (i = 0; i < 8; i++) {
    $('.numberWrap').append(number);
}
for (i = 0; i < 64; i++) {
    $('.chess').append(cell);
}
let letters = 'abcdefgh';
letters = letters.toUpperCase().split('');
let numbers = '12345678'
numbers = numbers.split('');
//Создание массива шахматных фигур в виде HTML кода
let whiteFigure1 = '&#9817;';
let whiteFigure2 = '&#9814; &#9816; &#9815; &#9813; &#9812; &#9815; &#9816; &#9814;';
let blackFigure1 = '&#9823;';
let blackFigure2 = '&#9820; &#9822; &#9821; &#9819; &#9818; &#9821; &#9822; &#9820;';
whiteFigure2 = whiteFigure2.split(' ');
blackFigure2 = blackFigure2.split(' ');
//Создание массивов ячеек
let number1 = $('.number').splice(0, 8);
let number2 = $('.number').splice(8, 8);
let word1 = $('.word').splice(0, 8);
let word2 = $('.word').splice(8, 8);
let whiteFigureblock2 = $('.cell').splice(0, 8);
let whiteFigureblock1 = $('.cell').splice(8, 8);
let blackFigureblock1 = $('.cell').splice(48, 8);
let blackFigureblock2 = $('.cell').splice(56, 8);
//Заполнение цифр на доске
for (i = 0; i < 9; i++) {
    $(number1[i]).html(numbers[i]);
    $(number2[i]).html(numbers[i]).css({
        transform: 'rotate(180deg)'
    });
    $(word1[i]).html(letters[i]).css({
        transform: 'rotate(180deg)'
    });
    $(word2[i]).html(letters[i]);
    $(whiteFigureblock2[i]).html(whiteFigure2[i]);
    $(whiteFigureblock1[i]).html(whiteFigure1);
    $(blackFigureblock1[i]).html(blackFigure1);
    $(blackFigureblock2[i]).html(blackFigure2[i]);
}
//Заполняю ячейки цветами
let check = true;
for (i = 0, j = 0; i < 64; i += 2) {
    if (i % 8 == 0 && i != 0) {
        i--;
        $($('.cell')[i + 1]).addClass('whiteCell');
        continue;
    }
    if ((i + 1) % 8 == 0) {
        $($('.cell')[i]).addClass('blackCell');
        i++;
    }
    $($('.cell')[i]).addClass('blackCell');
    $($('.cell')[i + 1]).addClass('whiteCell');
}
let activeCell;
let beforeCell = $('.cell')[0];
let click = 0;
//Логика перемещения фигур
$($('.cell')).click(function () {
    activeCell = $(this);
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
cursor();

function cursor() {
    for (i = 0; i < $('.cell').length; i++) {
        if ($($('.cell')[i]).html() != '') {
            $($('.cell')[i]).css({
                cursor: 'pointer'
            });
        }
    }
}