var pages = [
	["1st test", 5, 8],
	["2nd test", 16, 57],
	["3rd test", 3, 4],
	["Final test", 26, 42],
	["Results"]
];

var pb = ["NO", "NO"];

var rgb = 0;
var tb = 0;

function init() {
	selectImage(pages[0], true, -1);
}

function selectImage(page, first, override) {

	var imgId = page[1 + (override == -1
		? Math.floor(Math.random() * (page.length - 1)) : override)];

	if (first) {
		_id("img_main").src = "images/" + imgId + ".jpg";
	}
	else {

		fade(_id("img_main"), "out");
		setTimeout(function () {

			_id("img_main").src = "images/" + imgId + ".jpg";
			setTimeout(function () {

				fade(_id("img_main"), "in");

			}, 500);
		}, 500);
	}
}

function fade(btnElement, fading) {
	_id("img_main").className = "fade-" + fading;
}

function setPage(inc) {

	var current = pages.map(function (element) { return element[0]; })
		.indexOf(_id("header_title").innerHTML);

	var page = current + inc;

	_id("btn_back").style.visibility = (page === 0) ? "hidden" : "visible";
	_id("btn_next").style.visibility = (page === 4) ? "hidden" : "visible";

	_id("header_title").innerHTML = pages[page][0];

	if (inc > 0) {

		switch (current) {

			case 0:

				if (_id("img_main").src.indexOf("5.jpg") != -1) {

					if (_id("inputans").value == "2") {
						rgb++;
					}
					else if (_id("inputans").value != "5") {
						rgb++;
						tb++;
					}
				}
				else {

					if (_id("inputans").value == "3") {
						rgb++;
					}
					else if (_id("inputans").value != "8") {
						rgb++;
						tb++;
					}
				}

				break;

			case 1:

				if (_id("img_main").src.indexOf("16.jpg") != -1) {

					if (_id("inputans").value != "16") {
						rgb++;
						tb++;
					}
				}
				else {

					if (_id("inputans").value == "35") {

						rgb++;
					}
					else if (_id("inputans").value != "57") {

						rgb++;
						tb++;
					}
				}

				break;

			case 2:

				if (_id("img_main").src.indexOf("3.jpg") != -1) {

					if (_id("inputans").value != "3") {
						rgb++;
						tb++;
					}
				}
				else if ((_id("inputans").value == "4") || (_id("inputans").value == "5")) {

					rgb++;
				}

				break;

			case 3:

				if (_id("img_main").src.indexOf("26.jpg") != -1) {

					if (_id("inputans").value == "2") {
						pb[1] = "YES";
					}
					else if (_id("inputans").value == "6") {
						pb[0] = "YES";
					}
					else if (_id("inputans").value != "26") {

						pb = ["YES", "YES"];
						tb++;
					}
				}
				else {

					if (_id("inputans").value == "4") {
						pb[1] = "YES";
					}
					else if (_id("inputans").value == "2") {
						pb[0] = "YES";
					}
					else if (_id("inputans").value != "42") {

						pb = ["YES", "YES"];
						tb++;
					}
				}

				break;
		}
	}

	var imgs = pages[page];
	if (page == 2) {
		selectImage(imgs, false, 0 + (rgb > 0));
	}
	else if (page == 4) {

		_id("landingPage").style.visibility = "hidden";
		_id("inputans").style.display = "none";

		_id("table_main").style.display = "none";
		_id("result").style.display = "inline";

		_id("pt").innerHTML = tb.toString();
		_id("prg").innerHTML = rgb.toString();
		_id("pr").innerHTML = pb[0];
		_id("pg").innerHTML = pb[1];
	}
	else {
		selectImage(imgs, false, -1);
	}

	_id("inputans").value = "";
}

function reset() {
	window.location.reload();
}

function _id(id) {
	return document.getElementById(id);
}