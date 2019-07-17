/** return a flat array of Term objects */
exports.terms = function(n) {
  let terms = [this.pool.get(this.start)]
  if (this.length === 0) {
    return []
  }
  for (let i = 0; i < this.length - 1; i += 1) {
    let id = terms[terms.length - 1].next
    if (id === null) {
      console.warn('linked-list broken')
      break
    }
    let term = this.pool.get(id)
    terms.push(term)
  }
  if (n !== undefined) {
    return terms[n]
  }
  return terms
}

/** return a deep-copy of this phrse  */
exports.clone = function() {
  //how do we clone part of the pool?
  let terms = this.terms()
  let newTerms = terms.map(t => t.clone())
  //connect these new ids up
  newTerms.forEach((t, i) => {
    //add it to the pool..
    this.pool.add(t)
    if (newTerms[i + 1]) {
      t.next = newTerms[i + 1].id
    }
    if (newTerms[i - 1]) {
      t.prev = newTerms[i - 1].id
    }
  })
  return this.buildFrom(newTerms[0].id, newTerms.length)
}

/** return last term object */
exports.lastTerm = function() {
  let terms = this.terms()
  return terms[terms.length - 1]
}

/** quick lookup for a term id */
exports.hasId = function(id) {
  let terms = this.terms()
  return terms.find(t => t.id === id) !== undefined
}

/** produce output in the given format */
exports.out = function(options = {}) {
  let terms = this.terms()
  return terms.reduce((str, t, i) => {
    options.last = i === terms.length - 1
    return str + t.out(options)
  }, '')
}

/** return json metadata for this phrase */
exports.json = function(options = {}) {
  return this.terms().map(t => t.json(options))
}