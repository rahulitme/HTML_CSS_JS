var a = 0;
 var id=setInterval(Animation, 1000);

     function Animation() {
  a = a + 10;
  if(a == 100)
  {
    clearInterval(id);
  }
  else{

  

  var target = document.getElementsByTagName("h1")[0];
  target.style.fontSize,screenLeft = a + 'px';
}
     }
