'use strict';
const Text = require('./index');
const tokenize = require('./tokenize');
const Terms = require('./paths').Terms;
const normalize = require('../term/methods/normalize/normalize').normalize;
const tagArr = require('../tags');


//basically really dirty and stupid.
const normalizeLex = function(lex) {
  lex = lex || {};
  return Object.keys(lex).reduce((h, k) => {
    //add natural form
    h[k] = lex[k];
    let normal = normalize(k);
    if (k !== normal) {
      //add it too
      h[normal] = lex[k];
    }
    return h;
  }, {});
};

const extendTags = function(newTags) {
  console.log(newTags);
  tagArr.addTags(newTags);
  console.log(tagArr.allTags());
};

//build a new pos-tagged Result obj from a string
const fromString = (str, lexicon, tagSet) => {
  let sentences = tokenize(str);

  //LS 13-03-17: include multiword lexicon entries in lexicon without white spaces or hypens
  for (var key in lexicon) {
    var noSpaceOrHypenKey = key.replace(/-|\s|[.]/g,"");

    if(noSpaceOrHypenKey != key)
    {
      lexicon[noSpaceOrHypenKey] = lexicon[key];
    }
  }

  if (tagSet) {
    extendTags(tagSet);
  }

  //make sure lexicon obeys standards
  lexicon = normalizeLex(lexicon);
  let list = sentences.map((s) => Terms.fromString(s, lexicon));
  //extend tagset for this ref

  let r = new Text(list, lexicon, null, tagSet);
  //give each ts a ref to the result
  r.list.forEach((ts) => {
    ts.refText = r;
  });
  return r;
};
module.exports = fromString;
