/* Drawer: open/close, focus trap, Escape, scroll lock. */
(function () {
  var drawer = document.querySelector('[data-module="drawer"]');
  var toggle = document.querySelector('[data-drawer-open]');
  if (!drawer || !toggle) return;
  var closeBtn = drawer.querySelector('[data-drawer-close]');
  var lastFocused = null;

  function focusables() {
    return drawer.querySelectorAll('a[href], button:not([disabled])');
  }
  function open() {
    lastFocused = document.activeElement;
    drawer.classList.add('is-open');
    drawer.removeAttribute('inert');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-locked');
    var f = focusables();
    if (f.length) f[0].focus();
    document.addEventListener('keydown', onKeydown);
  }
  function close() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('inert', '');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused) lastFocused.focus();
  }
  function onKeydown(e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    var f = focusables();
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  drawer.setAttribute('inert', '');
  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });
})();
