javascript:
(function(){

var day = ["一", "二", "三", "四", "五", "六", "日"];
var selectrows = document.getElementsByClassName("x-grid3-row-selected");
kuas_elective
var tt = document.body.children[4].children[6].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0];
function init() {
	for (var i = tt.children.length - 1; i >= 0; i--) {
		for (var j = tt.children[i].children[0].children[0].children[0].children.length - 1; j >= 2; j--) {
			var td = tt.children[i].children[0].children[0].children[0].children[j].children[0];
			if (td.innerHTML !== "<br><br>") {
				td.noclear = true;
				console.log("no clear "+i+" "+j);
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
}
function update() {
	console.log("update");
	clear();
	for (var i = selectrows.length - 1; i >= 0; i--) {
		var cla = selectrows[i].children[0].children[0].children[0];
		var name = cla.children[2].innerText.trim();
		var timestr = cla.children[10].children[0].innerText;
		var time = timestr.match(/\((.)\)(\d)-(\d)/);
		var timed = +day.indexOf(time[1])+2;
		var times = +time[2];
		var timee = +time[3];
		console.log(name+" "+timed+" "+times+" "+timee);
		if (times >= 5) {
			times += 1;
		}
		if (timee >= 5) {
			timee += 1;
		}
		console.log(name+" "+timed+" "+times+" "+timee);
		for (var j = times; j <= timee; j++) {
			tt.children[j].children[0].children[0].children[0].children[timed].children[0].style.color = "red";
			tt.children[j].children[0].children[0].children[0].children[timed].children[0].innerHTML += name+"<br>";
		}
	}
}
init();
document.body.addEventListener("click", update);

})();
