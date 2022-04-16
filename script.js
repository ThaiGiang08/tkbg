var d = new Date().getDay();
if (d!=0) {
	var days = ['HAI','BA','TƯ','NĂM','SÁU','BẢY','CHỦ NHẬT','2','3','4','5','6','7','CN'];
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
