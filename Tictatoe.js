console.log("I'm Working!!");

let Seq1 = $('#1');
let Seq2 = $('#2');
let Seq3 = $('#3');
let Seq4 = $('#4');
let Seq5 = $('#5');
let Seq6 = $('#6');
let Seq7 = $('#7');
let Seq8 = $('#8');
let Seq9 = $('#9');
let Button = $('#Restart')
let count = 0;
let OCount = 0;
let Xcount = 0;
$('.cell').on('click', function() {
    if ($(this).hasClass('o') || $(this).hasClass('x'))
        alert("This is already taken ");
    else if (count % 2 === 0) {
        $(this).text('o');
        $(this).addClass('o');
        count++;


    } else if (count % 2 !== 0) {
        $(this).text('x');
        $(this).addClass('x');
        count++;
    }
    if (Seq1.hasClass('o') && Seq2.hasClass('o') && Seq3.hasClass('o') ||
        (Seq4.hasClass('o') && Seq5.hasClass('o') && Seq6.hasClass('o')) ||
        (Seq7.hasClass('o') && Seq8.hasClass('o') && Seq9.hasClass('o')) ||
        (Seq1.hasClass('o') && Seq5.hasClass('o') && Seq9.hasClass('o')) ||
        (Seq1.hasClass('o') && Seq4.hasClass('o') && Seq7.hasClass('o')) ||
        (Seq3.hasClass('o') && Seq6.hasClass('o') && Seq9.hasClass('o')) ||
        (Seq2.hasClass('o') && Seq5.hasClass('o') && Seq8.hasClass('o')) ||
        (Seq3.hasClass('o') && Seq5.hasClass('o') && Seq7.hasClass('o'))) {
        alert("Congratulation Dear O you Win Hardluck X");

        OCount++;


        $(Seq1).text('');
        Seq1.removeClass('x');
        Seq1.removeClass('o');
        $(Seq2).text('');
        Seq2.removeClass('x');
        Seq2.removeClass('o');

        $(Seq3).text('');
        Seq3.removeClass('x');
        Seq3.removeClass('o');

        $(Seq4).text('');
        Seq4.removeClass('x');
        Seq4.removeClass('o');

        $(Seq5).text('');
        Seq5.removeClass('x');
        Seq5.removeClass('o');

        $(Seq6).text('');
        Seq6.removeClass('x');
        Seq6.removeClass('o');


        $(Seq7).text('');
        Seq7.removeClass('x');
        Seq7.removeClass('o');


        $(Seq8).text('');
        Seq8.removeClass('x');
        Seq8.removeClass('o');


        $(Seq9).text('');
        Seq9.removeClass('x');
        Seq9.removeClass('o');
        count = 0;

    } else if (Seq1.hasClass('x') && Seq2.hasClass('x') && Seq3.hasClass('x') ||
        (Seq4.hasClass('x') && Seq5.hasClass('x') && Seq6.hasClass('x')) ||
        (Seq7.hasClass('x') && Seq8.hasClass('x') && Seq9.hasClass('x')) ||
        (Seq1.hasClass('x') && Seq5.hasClass('x') && Seq9.hasClass('x')) ||
        (Seq1.hasClass('x') && Seq4.hasClass('x') && Seq7.hasClass('x')) ||
        (Seq3.hasClass('x') && Seq6.hasClass('x') && Seq9.hasClass('x')) ||
        (Seq2.hasClass('o') && Seq5.hasClass('o') && Seq8.hasClass('o')) ||
        (Seq3.hasClass('x') && Seq5.hasClass('x') && Seq7.hasClass('x'))) {
        alert("Congratulation Dear X  you Win Hardluck O ");
        Xcount = 0;
        $(Seq1).text('');
        Seq1.removeClass('x');
        Seq1.removeClass('o');

        $(Seq2).text('');
        Seq2.removeClass('x');
        Seq2.removeClass('o');

        $(Seq3).text('');
        Seq3.removeClass('x');
        Seq3.removeClass('o');

        $(Seq4).text('');
        Seq4.removeClass('x');
        Seq4.removeClass('o');

        $(Seq5).text('');
        Seq5.removeClass('x');
        Seq5.removeClass('o');

        $(Seq6).text('');
        Seq6.removeClass('x');
        Seq6.removeClass('o');


        $(Seq7).text('');
        Seq7.removeClass('x');
        Seq7.removeClass('o');


        $(Seq8).text('');
        Seq8.removeClass('x');
        Seq8.removeClass('o');


        $(Seq9).text('');
        Seq9.removeClass('x');
        Seq9.removeClass('o');
        count = 0;
    }
    if (count === 9) {
        alert("Tie Game ");
        $(Seq1).text('');
        Seq1.removeClass('x');
        Seq1.removeClass('o');

        $(Seq2).text('');
        Seq2.removeClass('x');
        Seq2.removeClass('o');

        $(Seq3).text('');
        Seq3.removeClass('x');
        Seq3.removeClass('o');

        $(Seq4).text('');
        Seq4.removeClass('x');
        Seq4.removeClass('o');

        $(Seq5).text('');
        Seq5.removeClass('x');
        Seq5.removeClass('o');

        $(Seq6).text('');
        Seq6.removeClass('x');
        Seq6.removeClass('o');


        $(Seq7).text('');
        Seq7.removeClass('x');
        Seq7.removeClass('o');


        $(Seq8).text('');
        Seq8.removeClass('x');
        Seq8.removeClass('o');


        $(Seq9).text('');
        Seq9.removeClass('x');
        Seq9.removeClass('o');
        count = 0;
    }
})

$('#Restart').on('click', function() {
    $(Seq1).text('');
    Seq1.removeClass('x');
    Seq1.removeClass('o');

    $(Seq2).text('');
    Seq2.removeClass('x');
    Seq2.removeClass('o');

    $(Seq3).text('');
    Seq3.removeClass('x');
    Seq3.removeClass('o');

    $(Seq4).text('');
    Seq4.removeClass('x');
    Seq4.removeClass('o');

    $(Seq5).text('');
    Seq5.removeClass('x');
    Seq5.removeClass('o');

    $(Seq6).text('');
    Seq6.removeClass('x');
    Seq6.removeClass('o');


    $(Seq7).text('');
    Seq7.removeClass('x');
    Seq7.removeClass('o');


    $(Seq8).text('');
    Seq8.removeClass('x');
    Seq8.removeClass('o');


    $(Seq9).text('');
    Seq9.removeClass('x');
    Seq9.removeClass('o');
    count = 0;








})