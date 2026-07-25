document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('rolesToggle');
  var more = document.getElementById('rolesMore');
  if (!toggle || !more) return;

  toggle.addEventListener('click', function () {
    var expanded = !more.hidden;
    more.hidden = expanded;
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.textContent = expanded ? 'Show all roles' : 'Show fewer roles';
  });
});
