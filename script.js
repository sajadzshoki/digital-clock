function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if ((h == 12)) {
    h = 0;
  }
  if (h > 12) {
    h -= 12;
    session = "PM";
  }

  h = (h < 10 ? '0' + h : h);
  m = (m < 10 ? '0' + m : m);
  s = (s < 10 ? '0' + s : s);

  var time = `${h} : ${m} : ${s} ${session}`;
  document.getElementById("myClock").innerHTML = time;
}
setInterval(showTime, 1000);
// setInterval : do smth after a time we say to it
// setTimeout : do smth after a time we say to it *just once*