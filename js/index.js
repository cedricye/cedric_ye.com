var ONE_SECOND = 1000;
	var ONE_DAY = 60 * 60 * 24;
	var timer;

	function dayCountDown () {
		var currentDate = new Date();
		var deadDate = new Date('2073', '9', '15');
		var leftSecond = parseInt((deadDate - currentDate) / ONE_SECOND);
		var leftDay = parseInt(leftSecond / ONE_DAY);

		var leftDaySpan = document.getElementById("left_day");
		var leftSecondSpan = document.getElementById("left_second");

		leftSecondSpan.innerHTML = leftSecond;
		leftDaySpan.innerHTML = leftDay;

	}

		//timer = setInterval(dayCountDown, 1000);
		function init () {
			var WIDTH = window.innerWidth,
				HEIGHT = window.innerHeight,
				groundpic = document.getElementById("groundpic"),
				ground = document.getElementById("ground");

			ground.style.width = WIDTH + "px";
			ground.style.height = HEIGHT + "px";

			groundpic.style.width = WIDTH + 410 + "px";
			groundpic.style.left = -(140 / 1776) * (WIDTH + 410) + "px";
		}

		function registerMouseMoveEvent () {
			var WIDTH = window.innerWidth,			
				groundpic = document.getElementById("groundpic"),
				LEFT = parseInt(groundpic.style.left || groundpic.offsetLeft);

			document.body.addEventListener("mousemove", function (event) {
				var currentX = event.clientX,
					left;

				if(currentX >= WIDTH / 2){
					left = LEFT - (currentX - WIDTH / 2) * ((2 * 188) / WIDTH);
				}else{
					left = LEFT + (WIDTH / 2 - currentX) * ((2 * 140) / WIDTH);
				}

				groundpic.style.left = left + "px";
			})
		}
		init();
		registerMouseMoveEvent();