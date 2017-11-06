$(document).ready(function(){

// $("form").on("submit", function(){
//   $("submit").append("li");
// });

// var toDoList = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < toDoList; i++) {
//   var span = document.createElement("span");
//   var txt = document.
// }

// for(i=0; i<=20; i++){
//   $("h2").append(i + "<br>");
// }
//
// for(i=0; i<=20; i+=2){
//   $("h2").append(i + "<br>");
// }
    // $('#submit').on('click', function(event){
    //
    //   var toAdd = $('#to-do').val();
    //   event.preventDefault();
    //   console.log(event);
    //
    //   console.log(toAdd);
    //   $('#to-do-list').append('<li>' + toAdd + '</li>');
    // });

    //
    // $("#submit").on("click", function(event){
    //   event.preventDefault();
    //   var addItem = $("#to-do").val();
    //   $("#to-do-list").append("<li>" + addItem + "</li>");
    //
    // })

    $('form').on('submit', function(event){
  event.preventDefault();
  var newListItem = "<li>" + $('#todo').val() + "</li>";
  $('#todo-list').append(newListItem);
  $('#todo-list li').on('click', function(){
    $(this).addClass('strike');
  });
  $("input[type=text]").val("");
});
});
