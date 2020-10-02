$("#button").click(function(){
  let count = 25;
  $("#timer").text(count);
  $("#timer").toggleClass( "turnRed");
  $("#message").text("Timer Active!");

  const intervalID1 = setInterval(function() {
    count -= 1;
    $("#timer").text(count);

    if(count === 0) {
      clearInterval(intervalID1);
      $("#timer").toggleClass( "turnRed")
      $("#message").text("Get up and move!")





      




    }


  }, 250);







});