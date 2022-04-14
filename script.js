var d = new Date().getDay();
if (d!=0) {
	var days = ['THỨ HAI','THỨ BA','THỨ TƯ','THỨ NĂM','THỨ SÁU','THỨ BẢY','CHỦ NHẬT'];
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
