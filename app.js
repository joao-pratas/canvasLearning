function draw(){
	var canvas = document.getElementById('container');
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		animateAd(canvas, ctx);
	} else {
		document.write('Your browser does not support canvas design.');
	}
}

function animateAd(frame, context){
	context.fillStyle = 'rgb(0,0,0,0.7)';
	context.fillRect(10, 10, 50, 50);
}