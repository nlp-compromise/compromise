const test = require('tape')
const nlp = require('../_lib')

test('named-object-match:', function(t) {
  let arr = [
    ['the dog played', [{ word: 'the' }, { tag: 'Noun', capture: 'target' }, { word: 'played' }], 'dog'],
    ['the dog played', [{ word: 'dog', capture: 'target' }], 'dog'],
    ['the dog played', [{ tag: 'Verb', capture: 'target' }], 'played'],
  ]

  arr.forEach(function(a) {
    const doc = nlp(a[0])
      .match(a[1])
      .named()

    const msg = a[0] + ' matches ' + JSON.stringify(a[1]) + ' ' + a[2]
    t.equal(doc.text(), a[2], msg)
  })

  t.end()
})