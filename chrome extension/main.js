const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png",
  "/images/image8.png",
  "/images/image9.png",
  "/images/image10.png",
  "/images/image11.png",
  "/images/image12.png",
]

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4",
  "/videos/video7.mp4",
  "/videos/video8.mp4",
  "/videos/video9.mp4",
  "/videos/video10.mp4",
  "/videos/video11.mp4",
  "/videos/video12.mp4" 
]


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

      const image = $('<img />',
             { id: 'image',
               src: images[idx], 
               width: 800,
               height: 800,
             })
             
      window.document.body.appendChild(image);


 



      




    }


  }, 250);







});