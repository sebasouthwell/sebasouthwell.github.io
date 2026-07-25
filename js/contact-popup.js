document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('contactPopupToggle');
  var panel = document.getElementById('contactPopupPanel');
  var closeBtn = document.getElementById('contactPopupClose');
  var navLink = document.getElementById('navContactTrigger');
  var form = document.getElementById('contactForm');
  var successEl = document.getElementById('contactPopupSuccess');
  var errorEl = document.getElementById('contactPopupError');
  var emailBtn = document.getElementById('contactPopupEmailBtn');

  if (!toggle || !panel) return;

  function openPanel() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    var firstField = panel.querySelector('#name');
    if (firstField) firstField.focus();
  }

  function closePanel() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function togglePanel() {
    if (panel.hidden) {
      openPanel();
    } else {
      closePanel();
    }
  }

  toggle.addEventListener('click', togglePanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (navLink) {
    navLink.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPanel();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });

  document.addEventListener('click', function (e) {
    if (panel.hidden) return;
    if (panel.contains(e.target) || toggle.contains(e.target)) return;
    closePanel();
  });

  if (emailBtn && form) {
    emailBtn.addEventListener('click', function () {
      var name = form.querySelector('#name').value.trim();
      var message = form.querySelector('#message').value.trim();
      var subject = name ? 'Portfolio enquiry from ' + name : 'Portfolio enquiry';
      var mailto = 'mailto:' + emailBtn.dataset.email + '?subject=' + encodeURIComponent(subject);
      if (message) mailto += '&body=' + encodeURIComponent(message);
      emailBtn.setAttribute('href', mailto);
    });
  }

  if (form && successEl && errorEl) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      errorEl.hidden = true;

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      var body = new URLSearchParams(new FormData(form));

      fetch(form.action, {
        method: 'POST',
        body: body,
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed: ' + res.status);
          form.hidden = true;
          successEl.hidden = false;
        })
        .catch(function () {
          errorEl.hidden = false;
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
});
