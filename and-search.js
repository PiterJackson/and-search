var _ = require('lodash')

// ignore case
includes = function (str1, str2) { 
  if (str1.toLowerCase().indexOf(str2.toLowerCase()) > -1) return str1
}

filterFor = function (list, searchStr)  {
  return _.filter(list, function(str) {
    return includes(str, searchStr)
  })
}

search = function (list, searchTerms) {

  if (searchTerms.length == 0) {
    return list
  }

  else return search(
    // union of keyword results
    filterFor(list, _.first(searchTerms))
    , _.rest(searchTerms))
}

module.exports = search
