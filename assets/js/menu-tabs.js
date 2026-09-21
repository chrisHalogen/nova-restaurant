/* Menu tabs: ARIA tabs with arrow keys and deep links (#food, #drinks, #cocktails). */
(function () {
  var root = document.querySelector('[data-module="menu-tabs"]');
  if (!root) return;
  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });

  function select(index, focus, updateHash) {
    tabs.forEach(function (tab, i) {
      var selected = i === index;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      if (panels[i]) panels[i].hidden = !selected;
    });
    tabs[index].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    if (focus) tabs[index].focus();
    if (updateHash) {
      history.replaceState(null, '', '#' + tabs[index].getAttribute('aria-controls'));
      // The panels differ in height, so switching while scrolled down would leave the
      // reader below the new panel and look like nothing happened: scroll back to the
      // tabs. Measure from the panel wrapper, not the tab bar: the bar is sticky and
      // Chrome reports its offsetTop including the stuck shift. Instant, because the
      // document height changes as the panels swap.
      var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 0;
      var wrapper = panels[index] && panels[index].parentElement;
      if (wrapper) {
        var barH = root.getBoundingClientRect().height;
        var y = wrapper.getBoundingClientRect().top + window.scrollY - headerH - barH;
        window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: 'instant' });
      }
    }
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(i, false, true); });
    tab.addEventListener('keydown', function (e) {
      var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (next === null) return;
      e.preventDefault();
      select((next + tabs.length) % tabs.length, true, true);
    });
  });
  var hash = window.location.hash.replace('#', '');
  var start = tabs.findIndex(function (t) { return t.getAttribute('aria-controls') === hash; });
  select(start > -1 ? start : 0, false, false);
})();
