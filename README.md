# redeem
`redeem` overloads your `require` function with a fallback to global lookup for use in mixed environments.

```
npm install redeem --save
```

## Example

#### overload the existing `require` function
```js
require('redeem')()
```

#### imagine a global
```js
window.foo = 'bar'
```

#### then require elsewhere
```js
module.exports = function() {
  var foo = require('foo')
  console.log(foo)
}
```

## License
MIT
