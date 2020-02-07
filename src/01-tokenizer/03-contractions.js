const contraction = /([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z]{1,2})$/i

//these ones don't seem to be ambiguous
const easy = {
  ll: 'will',
  ve: 'have',
  re: 'are',
  m: 'am',
  "n't": 'not',
}

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
}

const makeContraction = function(arr, str) {
  return [
    {
      text: str,
      impl: arr[0],
    },
    {
      text: '',
      impl: arr[1],
    },
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

    // regex-based
    let parts = trim.match(contraction)
    if (parts && easy.hasOwnProperty(parts[2])) {
      let arr = [parts[1], easy[parts[2]]]
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
