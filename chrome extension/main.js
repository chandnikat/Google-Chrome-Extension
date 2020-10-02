$("#button").click(function(){
  let count = 30;
  $("#timer").text(count);
  $("#message").text("Timer Active!")

  const set = setInterval(function() {
    count -= 1;
    $("#timer").text(count);

    if(count === 0) {
      clearInterval(set);
      $("#message").text("get up and move!!!!!!")





      




    }










  }, 200);
});