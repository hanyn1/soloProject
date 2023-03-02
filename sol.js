var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var canvas_parents=document.querySelectorAll('.canvas-parent');
var parent_height=canvas_parents.clientHeight;
var parent_width=canvas_parents.clientWidth;

canvas.height=parent_height;
canvas.width=parent_width;
context.textAlign="center";
context.textBaseLine="middle";
context.fillText('click in this area',canvas.height /2 , canvas.width / 2);

var start=document.getElementById('start')
var time_text=document.getElementById('time-text')


var gameStatus={
    STOP:1,
    START:2,
}
var statusa=gameStatus.STOP;

function get_random_time(min,max){
      var result=Math.floor(Math.random()*Math.floor(max))+min;
      result=result*1000
      console.log(result)
      return result
    }
    
//change from red to green
function timeout1_function(time){
    timeout1=setTimeout(function(){
        canvas.style.background="rgb(78,197,78)"
        var date1=new Date();
        time_now=date1.getTime();
        canvas.addEventListener('click',function(){
            var date2=new Date();
            time_later=date2.getTime();
            play_time=(time_later - time_now)
            text_time.innerHTML=play_time + 'ms'
        })
    },time)
}
function timeout2_function(time){
    timeout2=setTimeout(function(){
        end_game();
    },time)
}

function start_game(){
    var change_time=get_random_time(1,6)
    var end_time=change_time+5000
    statusa=gameStatus.START
    canvas.style.background="rgb(206,63,63)"
    
    timeout1_function(change_time);
    timeout2_function(end_time);

}
function end_game(){
    clearTimeout(timeout1);
    clearTimeout(timeout2)
    canvas.style.background="rgb(237,255,177)";
    start.innerHTML='start Game';
    statusa=gameStatus.STOP
}



start.addEventListener('click',function(){
    if(statusa===gameStatus.START){
         end_game();
    }else{
        start_game();
        this.innerHTML='stop the game'
    }
})
canvas.addEventListener('click',function(){
    end_game()
})