/* Bridge between the docs page and an embedded tool iframe that opts in with
   `data-theme-sync` (e.g. assets/datacuration_helpers/*.html):

   - pushes the page's Material colour scheme in, and re-pushes on toggle
       -> iframe receives { type: "dc-theme", scheme: "default" | "slate" }
       -> iframe may ask for it with { type: "dc-theme-request" }
   - grows the iframe to its content height so it never scrolls internally
       -> iframe sends { type: "dc-height", px: <number> }
*/
document.addEventListener("DOMContentLoaded", function () {
  var frames = [].slice.call(document.querySelectorAll("iframe[data-theme-sync]"));
  if (!frames.length) return;

  function currentScheme() {
    return document.body.getAttribute("data-md-color-scheme") || "default";
  }
  function pushTheme(frame) {
    try {
      frame.contentWindow.postMessage(
        { type: "dc-theme", scheme: currentScheme() }, "*");
    } catch (e) { /* iframe not ready yet */ }
  }
  function pushThemeAll() { frames.forEach(pushTheme); }

  frames.forEach(function (f) {
    f.addEventListener("load", function () { pushTheme(f); });
  });

  window.addEventListener("message", function (e) {
    var msg = e.data;
    if (!msg) return;
    if (msg.type === "dc-theme-request") {
      pushThemeAll();
      return;
    }
    if (msg.type === "dc-height" && typeof msg.px === "number") {
      var target = null;
      for (var i = 0; i < frames.length; i++) {
        if (frames[i].contentWindow === e.source) { target = frames[i]; break; }
      }
      if (!target && frames.length === 1) target = frames[0];
      if (target) {
        var next = Math.max(120, Math.round(msg.px));
        if (Math.abs((parseInt(target.style.height, 10) || 0) - next) > 2) {
          target.style.height = next + "px";
          target.style.minHeight = "0";      // let it shrink too
        }
      }
    }
  });

  new MutationObserver(pushThemeAll).observe(document.body, {
    attributes: true, attributeFilter: ["data-md-color-scheme"]
  });
  pushThemeAll();
});
