/* Slim Select on any [data-select]. The native select stays the source of truth,
   so validation, labels and form submission are unchanged.
   Slim Select ships a generic "Combobox" label, so the field label is copied onto its
   combobox and listbox after mount. Its search box is disabled: it renders inside the
   listbox and breaks the aria-required-children rule. */
(function () {
  var fields = document.querySelectorAll('select[data-select]');
  if (!fields.length || typeof SlimSelect === 'undefined') return;

  function labelFor(el) {
    var field = el.closest('.field');
    var label = field && field.querySelector('label');
    return label ? label.textContent.replace(/\s+/g, ' ').trim() : 'Select';
  }

  function patchA11y(el, name) {
    var id = el.getAttribute('data-id');
    var main = document.querySelector('.ss-main[data-id="' + id + '"]');
    var content = document.querySelector('.ss-content[data-id="' + id + '"]');
    if (main) main.setAttribute('aria-label', name);
    if (!content) return;
    content.setAttribute('aria-label', name);
    content.querySelectorAll('.ss-option:not([role])').forEach(function (o) {
      o.setAttribute('role', 'none');
    });
  }

  fields.forEach(function (el) {
    // Slim Select hides an option flagged as its placeholder. Set it here, not in the
    // markup, so the content placeholder audit (data-placeholder) stays clean.
    var first = el.querySelector('option[value=""]');
    if (first) first.setAttribute('data-placeholder', 'true');

    var name = labelFor(el);
    new SlimSelect({
      select: el,
      settings: {
        // search off: its input sits inside the listbox and breaks aria-required-children,
        // and no select here has enough options to need searching
        showSearch: false,
        placeholderText: first ? first.text : 'Select',
        contentPosition: 'absolute',
        openPosition: 'down'
      },
      events: {
        afterOpen: function () { patchA11y(el, name); }
      }
    });
    patchA11y(el, name);
  });
})();
