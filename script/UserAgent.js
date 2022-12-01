let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
    hasTouchScreen = true;
    } else {
    const UA = navigator.userAgent;
    hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
}

if (hasTouchScreen) {
    var btn = document.querySelector(".install-btn");
    btn.classList.add("show");
} else {
    var qr = document.querySelector(".install-qr");
    qr.classList.add("show");
}