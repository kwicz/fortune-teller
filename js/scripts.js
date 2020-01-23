$(document).ready(function(){

  $("#start").click(function(event){
    event.preventDefault();
    $("#q1").show();
    $("h1").show();
    $("#start").hide();
  });
  //var numbers = [];


  var lucky = 0;
  var unlucky = 0;
  $(".answer").click(function(){

    console.log($(this).val());
    // var luck = $(this);
    // if (luck === "lucky"){
    //   lucky++;
    // } else {
    //   unlucky++;
    // }
    // $("#q" + questionNumber).hide();
    // questionNumber++;
    // $("#q" + questionNumber).show();
  
  });

});

  
