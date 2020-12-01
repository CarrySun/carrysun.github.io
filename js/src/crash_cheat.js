var OriginTitle = document.title;
var titleTime;
var now = new Date();
var hours = now.getHours();
var a = "";
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  a = "";
}
function showPosition(position) {
  a =
    "Latitude: " +
    position.coords.latitude +
    "Longitude: " +
    position.coords.longitude;
}
var timeValue = "(ฅ>ω<*ฅ) ";
if (hours > 0 && hours <= 3) {
  timeValue += "拂晓 🌕 ";
} else if (hours > 3 && hours <= 6) {
  timeValue += "黎明 🌖 ";
} else if (hours > 6 && hours <= 9) {
  timeValue += "清晨 🌗 ";
} else if (hours > 9 && hours <= 12) {
  timeValue += "上午 🌘 ";
} else if (hours > 12 && hours <= 15) {
  timeValue += "中午 🌑 ";
} else if (hours > 15 && hours <= 18) {
  timeValue += "下午 🌒 ";
} else if (hours > 18 && hours <= 21) {
  timeValue += "傍晚 🌓 ";
} else if (hours > 21 && hours <= 00) {
  timeValue += "午夜 🌔  ";
}
var arr1 = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥"
];
var arr2 = ["拂晓", "黎明", "清晨", "上午", "中午", "下午", "傍晚", "午夜"];

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
