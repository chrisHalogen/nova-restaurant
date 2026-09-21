/* Click to load: video embeds and the map. Nothing third party loads until asked. */
(function () {
  document.querySelectorAll('[data-facade]').forEach(function (el) {
    el.addEventListener('click', function () {
      var src = el.getAttribute('data-facade');
      if (!src) return;
      var frame = document.createElement('iframe');
      frame.src = src;
      frame.loading = 'lazy';
      frame.title = el.getAttribute('data-facade-title') || 'Embedded media';
      frame.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      frame.setAttribute('allowfullscreen', '');
      frame.style.cssText = 'width:100%;height:100%;border:0;position:absolute;inset:0;';
      el.innerHTML = '';
      el.appendChild(frame);
      el.classList.add('is-loaded');
    }, { once: true });
  });
})();
