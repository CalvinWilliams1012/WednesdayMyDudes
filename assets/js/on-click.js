$(document).ready(function(){

	$("img").on("click", function(){
  	var audio = document.getElementById("audio");
  	if(audio.paused){
  		audio.play();
  	}else{
  		audio.pause();
  		audio.currentTime = 0;
  		audio.play();
  	}

  	var percentRand = Math.floor((Math.random() * 100) + 1);
  	console.log(percentRand+"%");

  	$(new Image()).css({"z-index":"999","position":"absolute","top":percentRand+"%"}).addClass("frog").attr('src','assets/images/transparent-frog.png').appendTo($('body')).show().animate(left,);
	});
});