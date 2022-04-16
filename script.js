var d = new Date().getDay();
if (d!=0) {
	var days = ['Hai','Ba','Tư','Năm','Sáu','Bảy','Chủ nhật'];
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
