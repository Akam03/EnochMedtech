(function () {
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('yr').textContent = new Date().getFullYear();

  var form = document.getElementById('enquiry');
  var note = document.getElementById('form-note');
  form.addEventListener('submit', function (e) {
    // Until a Formspree form ID is set, fall back to the visitor's email app.
    if (form.action.indexOf('FORM_ID_HERE') !== -1) {
      e.preventDefault();
      var d = new FormData(form);
      var body = ['Name: ' + d.get('name'), 'Organization: ' + d.get('organization'),
        'Phone: ' + d.get('phone'), 'Email: ' + d.get('email'),
        'Interest: ' + d.get('interest'), '', d.get('message')].join('\n');
      window.location.href = 'mailto:contact@enochmedtech.com?subject=' +
        encodeURIComponent('Website enquiry from ' + d.get('name')) +
        '&body=' + encodeURIComponent(body);
      return;
    }
    e.preventDefault();
    note.textContent = 'Sending...';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error();
        form.reset();
        note.textContent = 'Thank you. We will be in touch shortly.';
      })
      .catch(function () {
        note.textContent = 'Something went wrong. Please email contact@enochmedtech.com.';
      });
  });
})();
