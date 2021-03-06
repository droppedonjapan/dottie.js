[![Build Status](https://travis-ci.org/mickhansen/dottie.js.png)](https://travis-ci.org/mickhansen/dottie.js.png)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mickhansen/dottie.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Install
    npm install dottie

## Usage
For detailed usage, check source or tests.

### Get value
Gets nested value, or undefined if unreachable, or a default value if passed.

```js
var values = {
  some: {
    nested: {
        key: 'foobar';
    }
  }
}

dottie.get(values, 'some.nested.key'); // returns 'foobar'
dottie.get(values, 'some.undefined.key'); // returns undefined
dottie.get(values, 'some.undefined.key', 'defaultval'); // returns 'defaultval'
```

### Set value
Sets nested value, creates nested structure if needed

```js
dottie.set(values, 'some.nested.value', someValue);
```

### Transform object
Transform object from keys with dottie notation to nested objects

```js
var values = {
  'user.name': 'Gummy Bear',
  'user.email': 'gummybear@candymountain.com',
  'user.professional.title': 'King',
  'user.professional.employer': 'Candy Mountain'
};
var transformed = dottie.transform(values);

/*
{
  user: {
    name: 'Gummy Bear',
    email: 'gummybear@candymountain.com',
    professional: {
      title: 'King',
      employer: 'Candy Mountain'
    }
  }
}
*/
```

#### With a custom delimiter

```js
var values = {
  'user_name': 'Mick Hansen',
  'user_email': 'maker@mhansen.io'
};
var transformed = dottie.transform(values, { delimiter: '_' });

/*
{
  user: {
    name: 'Mick Hansen',
    email: 'maker@mhansen.io'
  }
}
*/
```

## License

[MIT](https://github.com/mickhansen/dottie.js/blob/master/LICENSE)
