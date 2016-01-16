kuree
======

curry module

# Usage

```bash
npm install kuree
```

```js
var kuree = require('kuree');

function sum(a, b, c) {
  return a + b + c;
}

kuree(sum)(1, 2, 3);
kuree(sum)(1)(2)(3);
kuree(sum)(1, 2)(3);

```