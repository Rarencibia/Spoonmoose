var i = 0; // start point
var image = [];
var time = 3000;
// image list

image[0] = "images/bernieShirt.jpg";
image[1] = "images/picturesFrame.jpg";
image[2] = "images/luigiCandle.jpg";

//change image

function changeImg() {
  document.slide.src = image[i];
  if(i < image.length -1){
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', time);

}


window.onload = changeImg;
