$(document).ready(function(){
    animateIMG();
    
});
 

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateIMG(){
    var newq = makeNewPosition();
    var oldq = $('img').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('img').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateIMG();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;// control the speed here 

    var speed = Math.ceil(greatest/speedModifier);
    return speed;

}
