const contraction = /([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z]{1,2})$/i
const hasNegative = /n't$/

const known = {
  "won't": ['will', 'not'],
  wont: ['will', 'not'],
  "can't": ['can', 'not'],
  cant: ['can', 'not'],
  cannot: ['can', 'not'],
  "shan't": ['should', 'not'],
  dont: ['do', 'not'],
  dun: ['do', 'not'],
  wanna: ['want', 'to'],
  gonna: ['going', 'to'],
  im: ['i', 'am'],
  alot: ['a', 'lot'],
  ive: ['i', 'have'],
  imma: ['I', 'will'],

  "where'd": ['where', 'did'],
  whered: ['where', 'did'],
  "when'd": ['when', 'did'],
  whend: ['when', 'did'],
  // "how'd": ['how', 'did'], //'how would?'
  // "what'd": ['what', 'did'], //'what would?'
  howd: ['how', 'did'],
  whatd: ['what', 'did'],
  // "let's": ['let', 'us'], //too weird

  //multiple word contractions
  dunno: ['do', 'not', 'know'],
  brb: ['be', 'right', 'back'],
  gtg: ['got', 'to', 'go'],
  irl: ['in', 'real', 'life'],
  tbh: ['to', 'be', 'honest'],
  imo: ['in', 'my', 'opinion'],
  til: ['today', 'i', 'learned'],
  rn: ['right', 'now'],
  twas: ['it', 'was'],
  '@': ['at'],
}

//these ones don't seem to be ambiguous
const simple = {
  ll: 'will',
  ve: 'have',
  re: 'are',
  m: 'am',
  "n't": 'not',
}

const makeContraction = function(arr, str) {
  // console.log(arr)
  let after = str.match(/\s+$/) || []
  after = after[0] || ''
  str = str.replace(/\s+$/, '')
  // console.log(str.match(/^(\s?)([^ ]+)(\s?)$/))
  if (arr.length === 3) {
    return [
      { text: str, impl: arr[0] },
      { text: '', impl: arr[1] },
      { text: '', impl: arr[2], after: after },
    ]
  }

  return [
    { text: str, impl: arr[0] },
    { text: '', impl: arr[1], after: after },
  ]
}

const simpleContractions = function(terms) {
  let all = []
  terms.forEach(str => {
    let trim = str.trim()

    // direct mapping
    if (known.hasOwnProperty(trim) === true) {
      let arr = known[trim]
      all = all.concat(makeContraction(arr, str))
      return
    }

    if (hasNegative.test(trim) === true) {
      // console.log(term.text)
      let main = trim.replace(hasNegative, '')
      all = all.concat(makeContraction([main, 'not'], str))
      return
    }

    // regex-based
    let parts = trim.match(contraction)
    if (parts && simple.hasOwnProperty(parts[2])) {
      let arr = [parts[1], simple[parts[2]]]
      all = all.concat(makeContraction(arr, str))
      return
    }
    all.push({
      text: str,
    })
  })
  return all
}
module.exports = simpleContractions
