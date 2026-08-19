// Extracted validation logic to test in isolation (Node, no DOM needed)
function validateName(value) {
  return value.trim().length > 0 ? '' : 'Name is required.';
}
function validateEmail(value) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value.trim().length === 0) return 'Email is required.';
  if (!pattern.test(value.trim())) return 'Please enter a valid email address.';
  return '';
}
function validateMessage(value) {
  if (value.trim().length === 0) return 'Message is required.';
  if (value.trim().length < 10) return 'Message must be at least 10 characters.';
  return '';
}

var tests = [
  { name: 'Empty submit - name', fn: () => validateName(''), expect: 'Name is required.' },
  { name: 'Empty submit - email', fn: () => validateEmail(''), expect: 'Email is required.' },
  { name: 'Empty submit - message', fn: () => validateMessage(''), expect: 'Message is required.' },
  { name: 'Invalid email - no @', fn: () => validateEmail('not-an-email'), expect: 'Please enter a valid email address.' },
  { name: 'Invalid email - no domain', fn: () => validateEmail('a@b'), expect: 'Please enter a valid email address.' },
  { name: 'Valid email', fn: () => validateEmail('mojisola@example.com'), expect: '' },
  { name: 'Short message', fn: () => validateMessage('hi'), expect: 'Message must be at least 10 characters.' },
  { name: 'Message exactly 10 chars', fn: () => validateMessage('1234567890'), expect: '' },
  { name: 'Valid name', fn: () => validateName('Mojisola'), expect: '' },
  { name: 'Whitespace-only name', fn: () => validateName('   '), expect: 'Name is required.' },
];

var failed = 0;
tests.forEach(function (t) {
  var result = t.fn();
  var pass = result === t.expect;
  if (!pass) failed++;
  console.log((pass ? 'PASS' : 'FAIL') + ' — ' + t.name + ' → got: "' + result + '", expected: "' + t.expect + '"');
});
console.log('\n' + (tests.length - failed) + '/' + tests.length + ' passed');
