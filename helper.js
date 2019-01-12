javascript:
(function(){

var tt = document.getElementsByClassName("x-grid3-body")[document.getElementsByClassName("x-grid3-body").length-1];
var allrows = document.getElementsByClassName("x-grid3-row");

function init() {
	for (var i = tt.children.length - 1; i >= 0; i--) {
		for (var j = tt.children[i].children[0].children[0].children[0].children.length - 1; j >= 2; j--) {
			var td = tt.children[i].children[0].children[0].children[0].children[j].children[0];
			if (td.innerHTML !== "<br><br>") {
				td.noclear = true;
			}
		}
	}
}
function clear() {
	for (var i = tt.children.length - 1; i >= 0; i--) {
		for (var j = tt.children[i].children[0].children[0].children[0].children.length - 1; j >= 2; j--) {
			var td = tt.children[i].children[0].children[0].children[0].children[j].children[0];
			if (td.noclear !== true) {
				td.innerHTML = "";
			}
		}
	}
	for (var j = 0; j < allrows.length; j++) {
		allrows[j].children[0].style.background = "";
	}
}
function update() {
	clear();

	var day = ["一", "二", "三", "四", "五", "六", "日"];
	var selectrows = document.getElementsByClassName("x-grid3-row-selected");
	for (var i = selectrows.length - 1; i >= 0; i--) {
		var cla = selectrows[i].children[0].children[0].children[0];
		var name = cla.children[2].innerText.trim();
		var timestr = cla.children[10].children[0].innerText;
		var time = timestr.match(/\((.)\)(\d)-(\d)/);
		var timed = +day.indexOf(time[1])+2;
		var times = +time[2];
		var timee = +time[3];
		if (times >= 5) {
			times += 1;
		}
		if (timee >= 5) {
			timee += 1;
		}
		for (var j = times; j <= timee; j++) {
			tt.children[j].children[0].children[0].children[0].children[timed].children[0].style.color = "red";
			tt.children[j].children[0].children[0].children[0].children[timed].children[0].innerHTML += name+"<br>";
		}
		for (var j = 0; j < allrows.length; j++) {
			if (selectrows[i] == allrows[j]) {
				continue;
			}
			if (!allrows[j].children[0].children[0].children[0].children[0].children[0].classList.contains("x-grid3-col-checker")) {
				console.log("break");
				break;
			}
			var timestr = allrows[j].children[0].children[0].children[0].children[10].children[0].innerText;
			var time = timestr.match(/\((.)\)(\d)-(\d)/);
			if (time === null) {
				continue;
			}
			var timed2 = +day.indexOf(time[1])+2;
			var times2 = +time[2];
			var timee2 = +time[3];
			if (times2 >= 5) {
				times2 += 1;
			}
			if (timee2 >= 5) {
				timee2 += 1;
			}
			if (timed == timed2 && !(timee < times2 || times > timee2)) {
				allrows[j].children[0].style.background = "#ffcccc";
			}
		}
	}
}
init();
if (window.isBindListener === undefined) {
	document.body.addEventListener("click", update);
	window.isBindListener = true;
}

})();
