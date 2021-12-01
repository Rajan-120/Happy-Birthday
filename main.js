var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio1");
 var y= document.getElementById("myAudio2");
 var block_image_object;

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
block_image_object = Img;
block_image_object = scaleToWidth(700);
block_image_object = scaleToHeight(510);
block_image_object.set({
top:0,
left:0
});
canvas.add(block_image_object);
});
}

function playSound(){
    y.pause();
	x.play();
}
function playSound2(){
    x.pause();
	y.play();
}