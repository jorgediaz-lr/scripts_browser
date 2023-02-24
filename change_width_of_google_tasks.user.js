// ==UserScript==
// @name        Change width of google tasks
// @namespace   jorgediaz-lr
// @match       https://tasks.google.com/*
// @version     1.0
// @updateURL      https://github.com/jorgediaz-lr/scripts_browser/raw/master/change_width_of_google_tasks.user.js
// @downloadURL    https://github.com/jorgediaz-lr/scripts_browser/raw/master/change_width_of_google_tasks.user.js
// @author      Jorge Díaz (jorgediaz-lr)
// @description 24/02/2023, 14:30:45
// ==/UserScript==

function resize() {
  var div_tlfPm = Array.from(document.querySelectorAll('div.tlfPm:not([processed="true"]'));
  for (var div of div_tlfPm) {
    div.classList.remove("tlfPm");
    div.setAttribute('processed', 'true');
  }

  var div_bRcSk = Array.from(document.querySelectorAll('div.bRcSk:not([processed="true"]'));

  for (var div of div_bRcSk) {
    div.classList.remove("bRcSk");
    div.setAttribute("style","width:800px");
    div.setAttribute("style","max-width:800px");
    div.setAttribute('processed', 'true');
  }

  var div_PV0kIb = Array.from(document.querySelectorAll('div.PV0kIb:not([processed="true"]'));

  for (var div of div_PV0kIb) {
    div.setAttribute("style","width:800px");
    div.setAttribute('processed', 'true');
  }
}

if (window.location.href == "https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1") {
  setInterval(resize, 1000);
}