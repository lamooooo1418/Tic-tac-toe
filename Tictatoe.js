//Each Sequare on the Board 
let Seq1 = $('#Cell1');
let Seq2 = $('#Cell2');
let Seq3 = $('#Cell3');
let Seq4 = $('#Cell4');
let Seq5 = $('#Cell5');
let Seq6 = $('#Cell6');
let Seq7 = $('#Cell7');
let Seq8 = $('#Cell8');
let Seq9 = $('#Cell9');
//Restart Button 
let Button = $('#Restart')
let Messege = $('#Messege');
let XScore = $('#X');
let OScore = $('#O');
let count = 0;
let OCount = 0;
let Xcount = 0;
let TieCount = 0;
var mySound;
let TieScore = $('#Tie');

Messege.text("o's Turn");
XScore.text('X Wins  :' + Xcount);
OScore.text('O Wins  :  ' + OCount);
TieScore.text('Tie   :  ' + TieCount);



//When Click on Cells it Do the function 
$('.cell').on('click', function() {

        if ($(this).hasClass('o') || $(this).hasClass('x'))
            alert("This is already taken ");
        else if (count % 2 === 0) {
            $(this).text('o');
            $(this).addClass('o');
            count++;
            Messege.text("X's Turn");

        } else if (count % 2 !== 0) {
            //This Represent The current Object .
            $(this).text('x');
            $(this).addClass('x');
            count++;
            Messege.text("O's Turn");
        }
        //If Wins Condition 
        if (Seq1.hasClass('o') && Seq2.hasClass('o') && Seq3.hasClass('o') ||
            (Seq4.hasClass('o') && Seq5.hasClass('o') && Seq6.hasClass('o')) ||
            (Seq7.hasClass('o') && Seq8.hasClass('o') && Seq9.hasClass('o')) ||
            (Seq1.hasClass('o') && Seq5.hasClass('o') && Seq9.hasClass('o')) ||
            (Seq1.hasClass('o') && Seq4.hasClass('o') && Seq7.hasClass('o')) ||
            (Seq3.hasClass('o') && Seq6.hasClass('o') && Seq9.hasClass('o')) ||
            (Seq2.hasClass('o') && Seq5.hasClass('o') && Seq8.hasClass('o')) ||
            (Seq3.hasClass('o') && Seq5.hasClass('o') && Seq7.hasClass('o'))) {
            alert("Congratulation Dear O you Win Hardluck X");
            Messege.text("o's Turn");
            OCount++;

            XScore.text('X Wins  :' + Xcount);
            OScore.text('O Wins  :  ' + OCount);
            TieScore.text('Tie   :    ' + TieCount);

            //Re initilaize Cells .
            remove();

        } else if (Seq1.hasClass('x') && Seq2.hasClass('x') && Seq3.hasClass('x') ||
            (Seq4.hasClass('x') && Seq5.hasClass('x') && Seq6.hasClass('x')) ||
            (Seq7.hasClass('x') && Seq8.hasClass('x') && Seq9.hasClass('x')) ||
            (Seq1.hasClass('x') && Seq5.hasClass('x') && Seq9.hasClass('x')) ||
            (Seq1.hasClass('x') && Seq4.hasClass('x') && Seq7.hasClass('x')) ||
            (Seq3.hasClass('x') && Seq6.hasClass('x') && Seq9.hasClass('x')) ||
            (Seq2.hasClass('x') && Seq5.hasClass('x') && Seq8.hasClass('x')) ||
            (Seq3.hasClass('x') && Seq5.hasClass('x') && Seq7.hasClass('x'))) {
            alert("Congratulation Dear X  you Win Hardluck O ");
            Messege.text("o's Turn");
            Xcount++;
            XScore.text('X Wins  :' + Xcount);
            OScore.text('O Wins  :  ' + OCount);
            TieScore.text('Tie   :    ' + TieCount);




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
            remove();
            count = 0;
            Messege.text("o's Turn");
            TieCount++;
            XScore.text('X Wins  :' + Xcount);
            OScore.text('O Wins  :  ' + OCount);
            TieScore.text('Tie   :    ' + TieCount);
        }
        //For each Cells that I Click on Turn on the sound 
        mySound = new Audio('ClickSound.mp3');
        mySound.play();
    })
    //When you Click To Restart Button It Re initalze it .
$('#Restart').on('click', function() {
    Messege.text("o's Turn");
    XScore.text('X Wins  :' + Xcount);
    OScore.text('O Wins  :  ' + OCount);
    TieScore.text('Tie   :    ' + TieCount);
    remove();
})


const remove = function() {

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