/* Cookie consent: opt in, nothing loads before a choice. Stores the choice locally. */
(function () {
  var KEY = 'nova-consent';
  var banner = document.querySelector('[data-module="consent"]');
  if (!banner) return;
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function hide() { banner.classList.remove('is-visible'); }
  if (!saved()) banner.classList.add('is-visible');
  banner.querySelectorAll('[data-consent]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      store(btn.getAttribute('data-consent'));
      hide();
    });
  });
  document.querySelectorAll('[data-consent-reopen]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      banner.classList.add('is-visible');
    });
  });
})();
