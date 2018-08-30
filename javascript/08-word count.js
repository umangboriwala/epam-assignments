function countWords(str) {
  // ...
  var s = str;
  s = s.replace(/[\.\,\;\:\!\?\(\)\&]/g, ' ');
	var re = /\S+/ig;
	var m, word;
	var count = 0;
	while ((m = re.exec(s)) != null) {
		word = m[0];
		count++;
	}
  return count;
}