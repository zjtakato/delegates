```javascript
const delegate = require('@zjtakato/delegates');

 const obj = {};
  obj.request = {
    get type() {
      return 'type/html';
    },
  };
  // 访问obj的type属性会从obj的request对象属性上面去获取
  delegate(obj, 'request').getter('type');
  console.log(obj.type) // type/html
```