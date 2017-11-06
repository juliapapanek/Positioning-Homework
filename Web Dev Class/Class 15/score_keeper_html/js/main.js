var score = 0;

$("#increase-5").on("click", function(){
  score+=5;
  changeScore();
});

$("#decrease-5").on("click", function(){
  score-=5;
  changeScore();
});

$("#submit-custom-score").on("click", function(){
  score = $("#custom-score").val();
  changeScore();
});

function changeScore(){
  $("#score").text(score +" Points");
}

function changeScore(){
  if (score < 0){
    return false;
  } else {
    $("#score").text(score);
  }
}}
