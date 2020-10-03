console.log("JS working?!?")
let count2 = 5;
 $("#break-timer").text(count2);
 $("#break-timer").toggleClass( "turnRed");
 $("#break-message").text("Timer Active!");

function countDown (){
    count2 = count2 -1;
    if(count2 <0){
        $("#break-timer").toggleClass( "turnRed");
        $("#break-message").text("Back to work!");
    } else {
    $("#break-timer").text(count2);
    }
}
setInterval(countDown, 1000)
