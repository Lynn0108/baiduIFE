function numberTest(text) {
	var regText = /1[358][0-9]{9}/;
	return text.test(regText);
}
function copyTest(text) {
	var regText = /\b(\w+)\b\s+\1\b/;
	return text.test(regText);
}