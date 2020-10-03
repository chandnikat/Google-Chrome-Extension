


const images = [
  "image1.html",
  "image2.html",
  "image3.html",
  "image4.html",
  "image5.html",
  "image6.html",
  "image7.html",
  "image8.html",
]

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
      
      // const image = $('<img />',
      //        { id: 'image',
      //          src: images[idx], 
      //          width: 800,
      //          height: 800,
      //        })
      chrome.windows.create({url: `${images[idx]}`, type: "popup"})       
             


 



      




    }


  }, 50);







});