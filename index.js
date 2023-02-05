function Delegator(proto, target) {
  if (!(this instanceof Delegator)) return new Delegator(proto, target);
  this.proto = proto;
  this.target = target;
}

Delegator.prototype.access = function (key) {
  const target = this.target;
  Object.defineProperty(this.proto, key, {
    get() {
      return this[target][key];
    },
    set(value) {
      this[target][key] = value;
    },
  });
  return this;
};

Delegator.prototype.getter = function (key) {
  const target = this.target;
  Object.defineProperty(this.proto, key, {
    get() {
      return this[target][key];
    },
    set() {
      throw new Error('property cant not set');
    },
  });
  return this;
};

Delegator.prototype.method = function (key) {
  const target = this.target;
  this.proto[key] = function () {
    return this[target][key].apply(this[target], arguments);
  };
  return this;
};

module.exports = Delegator;
