function getMiddle(s)
{
  //Code goes here!
  var pos;
  var len = s.length;
  console.log(s + " ---" +len);
  if(len % 2 == 1){
    pos = s.length / 2;
    len = 1;
  }else {
    pos = s.length / 2 - 1;
    len = 2;
  }

  return s.substring(pos, pos + len)
}