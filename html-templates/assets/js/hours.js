/* Highlights today's row in an opening hours table (Africa/Lagos). */
(function () {
  var table = document.querySelector('[data-module="hours"]');
  if (!table) return;
  var day = new Date().toLocaleDateString('en-NG', { weekday: 'long', timeZone: 'Africa/Lagos' });
  table.querySelectorAll('tr').forEach(function (row) {
    var cell = row.querySelector('th');
    if (cell && cell.textContent.trim() === day) row.classList.add('is-today');
  });
})();
