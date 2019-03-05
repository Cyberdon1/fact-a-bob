//var number = 5
var total = 1
var factorial = function(number) {
  for (i = number; i > 0; i -= 1) {
    total *= i;
    //console.log(total);
  }
return total
};
//factorial(number);







$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    //debugger;
    var number = parseInt($("input#number").val());
    var result = factorial(number);
    $("#result").text(result);



    $("#result").show();
  });
});
