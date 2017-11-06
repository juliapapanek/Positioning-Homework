// Create a variable to keep track of which image we are currently on.

// if the image number is less than 3, i want to increment up by 1, if not, i want to start at the first one which is 0
// there are a total of 4 images, image 1 has an index of 0, etc

// replacing a current image with the image that's at the index that we want to show
// target current image and hide it and then use the eq method to bring in or show the next image

// use console.log to make sure things are working as you expect (shows you what the variable is at)


var imageNumber = 0;

$("#next").on("click", function () {
  if(imageNumber < 3){
    imageNumber+=1;
  } else { 
    imageNumber=0;
  }
  console.log(imageNumber);
  $("img").hide();
  $("img").eq(imageNumber).show();
});

$("#previous").on("click", function(){
  if(imageNumber > 0){
    imageNumber-=1;
  } else {
    imageNumber=3;
  }
  console.log(imageNumber);
  $("img").hide();
  $("img").eq(imageNumber).show();
})
