// const videos = [
//   "/videos/video1.mp4",
//   "/videos/video2.mp4",
//   "/videos/video3.mp4",
//   "/videos/video4.mp4",
//   "/videos/video5.mp4",
//   "/videos/video6.mp4",
//   "/videos/video7.mp4",
//   "/videos/video8.mp4",
//   "/videos/video9.mp4",
//   "/videos/video10.mp4",
//   "/videos/video11.mp4",
//   "/videos/video12.mp4" 
// ]

//Exercise pages array
const images = [
  "image1.html",
  "image2.html",
  "image3.html",
  "image4.html",
  "image5.html",
  "image6.html",
  "image7.html",
  "image8.html",
  "image9.html",
  "image10.html",
  "image11.html",
  "image12.html",
]

//Extension timer button
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
      $("#timer").toggleClass( "turnRed");
      $("#message").text("Get up and move!");
      const idx = [Math.floor(Math.random() * 12)];
      
      //Pop up window once time ends
      chrome.windows.create({url: `${images[idx]}`, type: "popup"});
      // window.open(
      //   chrome.extension.getURL(`${images[idx]}`),
      //   "exercise", 
      //   "width=400, height=400"
      //   );
    }


  }, 500);



});
