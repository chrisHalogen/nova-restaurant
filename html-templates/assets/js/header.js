/* Header: solid state once the hero sentinel leaves view. No scroll listener. */
(function () {
  var header = document.querySelector('[data-module="header"]');
  if (!header) return;
  var sentinel = document.querySelector('[data-header-sentinel]');
  if (!sentinel) { header.classList.add('is-scrolled'); return; }
  new IntersectionObserver(function (entries) {
    header.classList.toggle('is-scrolled', !entries[0].isIntersecting);
  }, { rootMargin: '-72px 0px 0px 0px' }).observe(sentinel);
})();
