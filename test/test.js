var test = require('tape')
var andsearch = require('../and-search.js')

var notes = [
  'very cool note',
  'things good and pending',
  'my client work',
  'assorted notes on trout',
  'mighty casey has just struck trout'
]

test('search for trout', function (t) {
  t.plan(1)
  var results = andsearch(notes, ['trout'])
  t.deepEquals(['assorted notes on trout', 'mighty casey has just struck trout'], results)
})

test('search for Trout AND casey', function (t) {
  t.plan(1)
  var results = andsearch(notes, ['Trout', 'casey'])
  t.deepEquals(['mighty casey has just struck trout'], results)
})
