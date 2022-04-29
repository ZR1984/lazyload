var viewHeight = document.documentElement.clientHeight;
function lazyloadFuc() {
  var elem = document.querySelectorAll("img[data-original][lazyload]");
  Array.prototype.forEach.call(elem, function (item, index) {
	var rect;
	if (item.dataset.original === "") return;
	rect = item.getBoundingClientRect();
	if (rect.bottom >= 0 && rect.top < viewHeight) {
	  let img = new Image();
	  img.src = item.dataset.original;
	  img.onload = function () {
		item.src = img.src;
		item.removeAttribute("lazyload");
		item.removeAttribute("data-original");
	  };
	}
  });
}
lazyloadFuc();
document.addEventListener("scroll", lazyloadFuc);