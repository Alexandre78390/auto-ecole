function swap() {
	var btn = document.getElementById("button");
	var sheet = document.getElementById("defaultSheet");
	if (btn.innerHTML == "Mode nuit") {
		btn.innerHTML = "Mode jour";
		btn = sheet.setAttribute("href", "css/nuit.css");
	} else {
		btn.innerHTML = "Mode nuit";
		btn = sheet.setAttribute("href", "css/style.css");
	}
}