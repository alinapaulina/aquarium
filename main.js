$(document).ready(function() {
 startBubble('#bubble1')
 startBubble('#bubble2')
 startBubble('#bubble3')
 startBubble('#bubble4')
 startBubble('#bubble5')
 onClickBubble('#bubble1')
 onClickBubble('#bubble2')
 onClickBubble('#bubble3')
 onClickBubble('#bubble4')
 onClickBubble('#bubble5')
 
});


function startBubble(id) {
    var xPos = Math.floor(Math.random() * $(window).width());
    var Speed = Math.floor(Math.random() * 1000) + 5000;
    var yPos = $(window).height();
    $(id).css({
        'top': yPos,
        'left': xPos
    });
    $(id).fadeIn();
    $(id).animate({
        'top': -400,
        'left': xPos
    }, Speed, function(){
        startBubble(id);
    });
};

function onClickBubble(id) {
    $(id).click(function(){
        $(this).stop();
        $(this).fadeOut(300, function(){
            startBubble(id);
        });
    });
};




$(document).ready(function(){
    Move('#fish1')
    Move('#fish2')
    Move('#fish3')
})



function Move(id) {
    var y = Randomize(0, $(document).height() - 290);
    var Speed = Math.floor(Math.random() * 1000) + 4000;
    var x = Randomize(0, $(document).width() - 290);
    $(id).animate({
        top: y
        , left: x
    }, Speed, function () {
        Move(id)
    });
};

function Randomize(min, max) {
    return Math.random() * (max - min) + min;
};



$('#fish3').hover(function () {
    $(this).stop(true);
    moveToRandom($(this));
    Move('#fish3');
});

function moveToRandom(id) {
    var a = Randomize(0, $(document).height() - 290);
    var b = Randomize(0, $(document).width() - 290);
    $('#fish3').animate({
        top: a,
        left: b
    });
};


$(document).click(function () {
    var Speed = 300;
    $('#fish2').stop(true);
    $('#fish2').animate({
        left: event.pageX - 10,
        top: event.pageY - 10
    },Speed, function(){
        Move('#fish2');
    })
});

