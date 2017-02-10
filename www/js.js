
// Vars

var svg = document.querySelector('svg');
var select = document.getElementById('select');
var tlStars = new TimelineMax();
var tlСonstellations = new TimelineMax({paused: true});

// Set

TweenMax.set([
	'#goat', '#owl', '#raccoon', '#bear'
	], {
		css: {
			visibility: 'visible'
		}
	});

TweenMax.set(['#goat *', '#owl *', '#raccoon *', '#bear *'], {transformOrigin: 'center'});
TweenMax.set(['#owl *', '#raccoon *', '#bear *'], {scale: 0});

// Timelines

function constellation(newVal, oldVal) {

	tlСonstellations
		.to(oldVal, 1.2, {
			scale: 1,
			transformOrigin: 'center',
			ease: Power4.easeIn
		})

		.to(oldVal + ' path', 1.2, {
			scale: 0
		}, '-=.6')

		.to(oldVal + ' circle', .6, {
			scale: 0,
			ease: Bounce.easeIn
		}, '-=1.2')

		.staggerTo(newVal + ' path', .3, {
			scale: 1
		}, .02)
	
		.to(newVal + ' circle', 1.2, {
			scale: 1,
			ease: Bounce.easeOut
		}, '-=.4')

		.to(newVal, 1.4, {
			scale: 1.06,
			transformOrigin: 'center',
			ease: Power2.easeInOut
		}, '-=.54')
}

TweenMax.to('#Objects', 4, {
		y: -40,
		ease: Power1.easeInOut,
		repeat: -1,
		yoyo: true
	});

tlStars
	.staggerTo('#stars circle', 10, {
		cycle: {
			x: random,
			y: random
		},
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut
	})

// Select

var oldVal;

select.addEventListener('focus', function() {
	oldVal = this.value;
});

var arr = ["#goat","#owl","#raccoon","bear"];

select.addEventListener('change', function() {
	constellation(arr[1], oldVal);
	tlСonstellations.play();
	this.blur();
})

// Helpers

function random(i) {
	return (Math.random() * 2 - 1) * (i + 120);
};


setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
}, 2000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();

}, 4000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();

}, 6000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	arr[3].blur();

}, 8000);
setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
	arr[0].blur();

}, 10000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();
	arr[1].blur();

}, 12000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();
	arr[2].blur();

}, 14000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	arr[3].blur();

}, 16000);
setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
	arr[0].blur();

}, 18000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();
	arr[1].blur();

}, 20000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();
	arr[2].blur();

}, 22000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	arr[3].blur();

}, 24000);
setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
	arr[0].blur();

}, 26000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();
	arr[1].blur();

}, 28000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();
	arr[2].blur();

}, 30000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	arr[3].blur();

}, 32000);

function k(){
    document.getElementById('signup').style.display="none";
    document.getElementById('logf').style.display="block";
    document.getElementById('logg').style.display="block";
}

function b(){
    document.getElementById('login').style.display="none";
    document.getElementById('signf').style.display="block";
    document.getElementById('signg').style.display="block";
}
function p(){
    document.getElementById('signup').style.display="block";
    document.getElementById('logf').style.display="none";
    document.getElementById('logg').style.display="none";
    document.getElementById('login').style.display="block";
    document.getElementById('signf').style.display="none";
    document.getElementById('signg').style.display="none";
}

function x(){
    document.getElementById('nav').style.display="block";
    document.getElementById('nav').className="animated slideInLeft";
}
function x2(){
    document.getElementById('nav').className="animated slideOutLeft";
}
setTimeout(function(){ 
    document.getElementById('nav').style.display="none"
    ; }, 1000);
function sh(){
    document.getElementById('backed').style.display="block";
    document.getElementById('allback').className="animated fadeOut";
}

function user(){
    document.getElementById('user').style.display="block";
    document.getElementById('user').className="animated slideInLeft";
    document.getElementById('name').innerHTML="USER";
}
function motor(){
    document.getElementById('motor').style.display="block";
    document.getElementById('motor').className="animated slideInLeft";
    document.getElementById('name').innerHTML="MOTOR";
}

