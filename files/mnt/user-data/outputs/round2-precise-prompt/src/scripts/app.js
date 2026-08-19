document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: function (value) {
        return value.trim().length > 0 ? '' : 'Name is required.';
      }
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: function (value) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim().length === 0) return 'Email is required.';
        if (!pattern.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      }
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: function (value) {
        if (value.trim().length === 0) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      }
    }
  };

  var successEl = document.getElementById('form-success');

  function setFieldError(field, message) {
    field.error.textContent = message;
    if (message) {
      field.input.setAttribute('aria-invalid', 'true');
      field.input.setAttribute('aria-describedby', field.error.id);
    } else {
      field.input.removeAttribute('aria-invalid');
    }
  }

  function validateAll() {
    var firstInvalid = null;
    var isValid = true;

    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      var message = field.validate(field.input.value);
      setFieldError(field, message);
      if (message) {
        isValid = false;
        if (!firstInvalid) firstInvalid = field.input;
      }
    });

    return { isValid: isValid, firstInvalid: firstInvalid };
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    successEl.textContent = '';

    var result = validateAll();

    if (!result.isValid) {
      result.firstInvalid.focus();
      return;
    }

    successEl.textContent = 'Thanks — your message has been sent.';
    form.reset();
    Object.keys(fields).forEach(function (key) {
      setFieldError(fields[key], '');
    });
  });

  // Live re-validation once a field has already been flagged invalid
  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    field.input.addEventListener('input', function () {
      if (field.error.textContent) {
        setFieldError(field, field.validate(field.input.value));
      }
    });
  });
});
