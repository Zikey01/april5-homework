$('#start').on('click', function(){
    game.start();[
})
$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
    question: "What is Fred's Favorite Movie?",
    answers:["Bring it On","Platoon","Saving Private Ryan"],
    correctAnswer:"Saving Private Ryan"
},{
    question:"What is Fred's Favorite Sport?",
    answers:["Football","Basketball","Soccer"],
    correctAnswer:"Football"
},{
    question:"What is Fred's Favorite Travel Destination?",
    answers:["Miami","Orlando","Spain"],
    correctAnswer:"Spain"
},{
    question:"What is Fred's type of food?",
    answers:["Mexican","Italian","Thai","American"],
    correctAnswer:"Thai"
}];

var game = {
    correct:0,
    incorrect:0,
    counter:20,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){<
            counsel.log("Time is up!");
            game.done();
        }
    },
start: function(){
    timer = setInterval(game.countdown,1000);
    $('#subwrapper').prepend('<h2> Time Remaining: <span id="counter">20</span>Second),
    $('#start').remove();

    for(var i=0;i< questions.length;i++){
        $('#subwrapper').append('<h2>' + questions + '</h2>');
        for(var j=0; j< questions[i].answers.length; j++){
            $('#subwrapper').append("<input type='radio' name='question-"+i+"") value=
        }
    }
$('#subwrapper').append('<br><button id="end">DONE</button>')
},
done: function(){
    $.each($('input[name="question-0"]:checked'),function(){

    if($(this).val()==questions[0].correctAnswer){
        game.correct++;

    }else {
        game.incorrect++;
    }
});
$.each($('input[name="question-1"]:checked'),function(){
    if($(this).val()== questions[3].correctAnswer){
        game.correct++;
    }else{
        game.incorrect++;
    }
    console.log(this.value);
});
this.result();
result:function(){};
},
result; function(){
    clearInterval(timer);
$('#subwrapper h2').remove();
$('#subwrapper').html("<h2> All Done!</h2>");
$('#subwrapper').append("<h3> Correct Answers:"+this.correct+"</h3>);
$('#subwrapper').append("<h3> Incorrect Answers:"+this.incorrect+"</h3>);
$('#subwrapper').append("<h3> Unanswered:"+(questions.length-(this.incorrect+this.
}