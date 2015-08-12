# and-search

a simple "and" search in javascript.

## example

```javascript
var andsearch = require('and-search')

var notes = [
  'very cool note',
  'things good and pending',
  'my client work',
  'assorted notes on trout',
  'mighty casey has just struck trout'
]

andsearch(notes, ['Trout', 'casey'])
//  ['mighty casey has just struck trout']

```
