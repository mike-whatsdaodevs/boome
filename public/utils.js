const remLayout = () => {
  let rootDoc = document.documentElement,
    resizeEvent =
      "orientationchange" in window ? "orientationchange" : "resize",
    recalc = () => {
      let clientWidth = Math.min(
        Math.max(rootDoc.clientWidth, window.innerWidth),
        428
      );
      if (!clientWidth) return;
      rootDoc.style.fontSize = 16 * (clientWidth / 375) + "px";
    };
  recalc();
  window.addEventListener(resizeEvent, recalc, !1);
  window.addEventListener("DOMContentLoaded", recalc, !1);
};
remLayout()
