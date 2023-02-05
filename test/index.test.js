const delegate = require('..');

test('.getter(name)', () => {
  const obj = {};
  obj.request = {
    get type() {
      return 'type/html';
    },
  };
  delegate(obj, 'request').getter('type');
  expect(obj.type).toEqual(obj.request.type);
});
