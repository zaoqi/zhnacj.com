//中南财经网
//Copyright (C) 2017  zaoqi

//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU Affero General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU Affero General Public License for more details.

//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see [http://www.gnu.org/licenses/].
function hereDoc(func) {
	return func.toString().split(/\n/).slice(1, -1).join('\n');
}
function download(url) {
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}
function downloadAndWrite(url) {
	document.write("<div id=\"DAW_" + encodeURIComponent(url) + "\"></div>");
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("DAW_" + encodeURIComponent(url)).innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.send();
}
document.write(hereDoc(function(){/*
<style type="text/css">
* {
	margin: 0px;
	padding: 0px;
}
</style>
*/}));