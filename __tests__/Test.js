test('two plus two is four', () =>
{
  var regex = /[0-9]*([0-9])/g;
  const data = '{"data": {"ringer": {"totalAmount": 100}}}';
  var protocol = data.match(regex);
  console.log('=== protocol: ', protocol);
});
