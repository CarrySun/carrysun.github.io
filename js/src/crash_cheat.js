var OriginTitle = document.title;
var titleTime;
var now = new Date();
var hours = now.getHours();
var timeValue = "(ฅ>ω<*ฅ) ";
if (hours > 7 && hours < 9) {
  timeValue += "早安 ☀️ ";
} else if (hours > 8 && hours < 11) {
  timeValue += "上午好 ☁️ ";
} else if (hours > 11 && hours < 13) {
  timeValue += "中午好 ☕️ ";
} else if (hours > 13 && hours < 18) {
  timeValue += "下午好 ☕️ ";
} else {
  timeValue += "晚安 🌙 ";
}

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    // $('[rel="icon"]').attr("href", "/img/TEP.ico");
    document.title = timeValue;
    clearTimeout(titleTime);
  } else {
    // $('[rel="icon"]').attr("href", "/favicon.ico");
    document.title = OriginTitle;
    titleTime = setTimeout(function() {
      document.title = OriginTitle;
    }, 2000);
  }
});
