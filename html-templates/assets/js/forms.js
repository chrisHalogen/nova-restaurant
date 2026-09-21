/* Forms: validate on blur, submitting and result states.
   Phase A has no backend: submission is simulated so the states can be reviewed. */
(function () {
  document.querySelectorAll('[data-module="form"]').forEach(function (form) {
    var status = form.parentElement.querySelector('[data-form-status]');
    var submit = form.querySelector('[type="submit"]');

    function fieldOf(input) { return input.closest('.field'); }
    function validate(input) {
      var field = fieldOf(input);
      if (!field) return true;
      var ok = input.checkValidity();
      field.classList.toggle('is-invalid', !ok);
      var msg = field.querySelector('.field__error');
      if (msg && !ok) msg.textContent = input.validationMessage;
      input.setAttribute('aria-invalid', ok ? 'false' : 'true');
      return ok;
    }
    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('blur', function () { validate(input); });
      input.addEventListener('input', function () {
        if (fieldOf(input) && fieldOf(input).classList.contains('is-invalid')) validate(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll('input, select, textarea').forEach(function (input) {
        if (!validate(input) && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }
      submit.setAttribute('aria-disabled', 'true');
      submit.dataset.label = submit.textContent;
      submit.textContent = 'Sending';
      window.setTimeout(function () {
        submit.removeAttribute('aria-disabled');
        submit.textContent = submit.dataset.label;
        form.hidden = true;
        if (status) {
          status.classList.add('is-visible');
          status.setAttribute('tabindex', '-1');
          status.focus();
        }
      }, 700);
    });
  });
})();
