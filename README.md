# vectr2
Simple 2d vector class in javascript.

[![NPM](https://nodei.co/npm/vectr2.png)](https://www.npmjs.org/package/vectr2)

```bash
npm install vectr2 --save
```



```javascript
Vectr2 = require('vectr2');
var vectorA = new Vectr2(0,0);
var vectorB = new Vectr2(1,2);
```

Project onto another vector.

```javascript
var vectorC = vectorA.project(vectorB);
```

Get the dot product.

```javascript
var dotProd = vectorA.dot(vectorB);
```

Find the angle between two vectors.

```javascript
var theta = vectorA.angle(vectorB);
```
