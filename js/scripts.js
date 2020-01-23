function sum(total, num) {
  return total + num;
}

$(document).ready(function(){

  $("#start").click(function(event){
    event.preventDefault();
    $("#q1").show();
    $("h1").show();
    $("#start").hide();
  });
  
  var numbers = [];
  var counter = 1;
  $(".answer").click(function(){

    var answer = ($(this).val());
    numbers.push(answer);

    if (counter < 5){
    $("#q" + questionNumber).hide();
    // questionNumber++;
    // $("#q" + questionNumber).show();
    } else {
     var total = numbers.reduce(sum);
     if total >= 4 {
       console.log("you are unlucky");
     } else if total <= 1 {
       console.log("you are lucky!");
     } else {
       console.log("you are neither lucky nor unlucky")
     }
    }
  });

});

  
    // var luck = $(this);
    // if (luck === "lucky"){
    //   lucky++;
    // } else {
    //   unlucky++;
    // }