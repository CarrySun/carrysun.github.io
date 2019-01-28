var OriginTitle = document.title;
var titleTime;
var now = new Date();
var hours = now.getHours();
var timeValue = "(ฅ>ω<*ฅ) ";
if(hours < 10) {
    timeValue += "早安🌞 "
} else if(hours > 20) {
    timeValue += "晚安🌛 "
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
