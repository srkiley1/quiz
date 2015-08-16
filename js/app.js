$(document).ready (function(){

 var i=0;
 var correct=0;
 var completed=0;

function Question(number, question, choice1,choice2,choice3,choice4,correct_answer) {
  this.message= "Please calculate";
  this.number= number;
  this.question= question;
  this.choice1= choice1;
  this.choice2= choice2;
  this.choice3= choice3;
  this.choice4= choice4;
  this.correct_answer=correct_answer;
  }


  var question_array= new Array();
   
   //initialize question array
  question_array[0]= new Question(1,"What is 10 + 4?","10","14","20","16","14");
  question_array[1]= new Question(2,"What is 20-9?","11","10","21","10","11");
  question_array[2]= new Question(3,"What is 3 x 7?","21","4","15","25","21");
  question_array[3]= new Question(4,"What is 8/2?","7","2","8","4","4");
  
  $(".icons-below").hide();
  $(".main-questions").hide();
  $(".last_page").hide();

 
//start game

  $('html').on('click','#btn-start',function(){
	 $(".introduction-section").hide();
  //first question
  
	  $('.list-design').empty();

   
  var html= '<li><question_array[i]"></li>'+
    '<li style="margin-top:1em">Please Calculate</li>'+
    '<li>'+question_array[i].question+'</li>'+  
      '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice1+'">'+
      question_array[i].choice1+'</input></li>'+
       '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice2+'">'+
      question_array[i].choice2+'</input></li>'+
       '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice3+'">'+
      question_array[i].choice3+'</input></li>'+
       '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice4+'">'+
      question_array[i].choice4+'</input></li>'+
        '<li><button type="submit" id="btn-submit">Submit</button></li>';
   
	$('.list-design').append(html);
	 $(".main-questions").show();
	  $(".icons-below").show();
 
	});
//remaining questions
  var answer_val="";
 
 $('html').on('click','#btn-submit',function(event){
            var msg="Wrong";
          event.preventDefault();
          
           answer_val=$('input[name=answer-choice]:checked').val();

  //submit answer only if radio button checked
          if(typeof (answer_val) != "undefined")
          {
            completed++;
      var a=question_array[i].correct_answer;
           if ( answer_val=== a)
           {
            
            correct++;
            msg="Correct";
           }
        alert("Your answer is "+msg);
    $("#completed_field").val("Completed: "+completed+" of 4");
      $("#score_field").val("Score: "+correct+" of 4");
    //game done show last page
          if(i==4)
           {
            
      $("#finalscore_field").val("Score: "+correct+" of 4");
    $(".icons-below").hide();
  $(".main-questions").hide();
$(".last_page").show();

 }    
    
    if (i<4)
    { 
         i++;
          html="";
             
$('.list-design').empty();
         var html= '<li><img src"'+
   question_array[i].img+
   '" style="width:20em"></li>'+
      '<li style="margin-top:1em">Please calculate</li>'+
      '<li>'+question_array[i].question+'</li>'+  
      '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice1+'">'+
      question_array[i].choice1+'</input></li>'+
       '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice2+'">'+
      question_array[i].choice2+'</input></li>'+
       '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice3+'">'+
      question_array[i].choice3+'</input></li>'+
       '<li><input type="radio" name="answer-choice" value="'+question_array[i].choice4+'">'+
      question_array[i].choice4+'</input></li>'+
        '<li><button type="submit" id="btn-submit">Submit</button></li>';
  $('.list-design').append(html);
   $(".main-questions").show();
    $(".icons-below").show();
  }
 }     
});

//retry game
$('html').on('click','#btn-retry',function(event){
   i=0;
    correct=0;
    completed=0;
      $("#completed_field").val("Completed: "+completed+" of 5");
     $("#score_field").val("Score: "+correct+" of 5");
    $(".icons-below").hide();
  $(".main-questions").hide();
   $(".last_page").hide();
    $(".introduction-section").show();

 });
});