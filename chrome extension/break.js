//motivational quote image array
const images = [
    "motivationimages/mot0.png",
    "motivationimages/mot2.png",
    "motivationimages/mot3.png",
    "motivationimages/mot4.png",
    "motivationimages/mot5.png",
    "motivationimages/mot6.png",
    "motivationimages/mot7.png",
    "motivationimages/mot8.png",
    "motivationimages/mot9.png",
    "motivationimages/mot10.png",
    "motivationimages/mot11.png",
    "motivationimages/mot12.png",
    "motivationimages/mot13.png",
    "motivationimages/mot14.png",
    "motivationimages/mot15.png",
    "motivationimages/mot16.png",
    
  ]

//Randomizer for generating motivational quote image
const idx = [Math.floor(Math.random() * 16)];

//Count down function:
let count2 = 5;
 $("#break-timer").text(count2);
 $("#break-timer").toggleClass( "turnRed");
 $("#break-message").text("Break Time!");

function countDown (){
    count2 = count2 -1;
    if(count2 <0){
        $("#break-timer").toggleClass( "turnRed");
        $("#break-message").text("Back to work!");
        $("#break-status").text("Click to Exit")
        $("#picture").attr("src", `${images[idx]}`)

    } else {
    $("#break-timer").text(count2);
    }
}
setInterval(countDown, 2500)

// Exit out of window button
$("#break-button").click(function() {
     console.log("I was clicked");
     window.close()
});
