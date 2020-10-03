const images = [
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    "motivationimages/mot1.png",
    
  ]

const idx = [Math.floor(Math.random() * 12)];

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
        $("#picture").attr("src", `${images[idx]}`)
    } else {
    $("#break-timer").text(count2);
    }
}
setInterval(countDown, 1000)
