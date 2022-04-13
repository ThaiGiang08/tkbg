var d = new Date().getDay();
if (d!=0) {
	var days = ['Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
	var day = days[d-1];
	var inputText = document.getElementById(day);
	var index = 7;
	if (index >= 0) {
		innerHTML = "<mark>" + day + " </mark>";
		inputText.innerHTML = innerHTML;
	}
	day = days[d-1];
	var inputText = document.getElementById(day);
}
