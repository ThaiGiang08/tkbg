var d = new Date().getDay();
if (d!=0) {
	var days = ['HAI','BA','TƯ','NĂM','SÁU','BẢY','CHỦ NHẬT'];
	var day = days[d-1];
	var inputText = document.getElementById(day);
	var index = 8
	if (index >= 0) {
		innerHTML = "<mark>" + day + " </mark>";
		inputText.innerHTML = innerHTML;
	}
	day = days[d-1];
	var inputText = document.getElementById(day);
}

<script type="text/javascript">
<!--
if (screen.width <= 699) {
document.location = "mobile.html";
}
//-->
</script>
