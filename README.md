#﻿jQuery random Plugin v. 1.0

### Usage

```js
$.Random(m,n);
```

where m - is minimal int value and n - is maximal int value

### example

```js
document.write( $.Random(0,10) );
```

this will return a random value from 0 to 10.

### Usage

```js
$(selector).random();
```

### example

```js
$('p').random().remove() );
```

This will remove a random "<p>" element from the set of returned elements defined by the selector.
