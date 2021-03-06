const test = require('tape')
const nlp = require('../_lib')

test('is-email:', function (t) {
  ;[
    [`s@s.com`, true],
    [`sasdf@sasdf.com`, true],
    [`sasdf@sasdf.ti`, true],
    [`sasdf@sasdf.t`],
    [`sasdf@sasdft`],
    [`sasdfsasdft.com`],
    [`@sasdft.com`],
    [`_@_.com`, true],
    [`_@_._`],
    [`sas df@sasdf.com`],
    [`sasdf@sa sdf.com`],
  ].forEach(function (a) {
    const term = nlp(a[0]).list[0].terms(0)
    const msg = a[0] + ' is email: ' + a[1]
    t.equal(term.tags['Email'], a[1], msg)
  })
  t.end()
})

test('is-hashtag:', function (t) {
  ;[
    [`#lkjsdf`, true],
    [`#ll`, true],
    [`#22ll`, true],
    [`#_22ll`, true],
    // [`#l`,],
    [`# l`],
    [`l#l`],
  ].forEach(function (a) {
    const term = nlp(a[0]).list[0].terms(0)
    const msg = a[0] + ' is hashtag: ' + a[1]
    t.equal(term.tags['HashTag'], a[1], msg)
  })
  t.end()
})

test('is-url:', function (t) {
  ;[
    [`http://cool.com/fun`, true],
    [`https://cool.com`, true],
    [`https://cool.com/`, true],
    [`https://www.cool.com/`, true],
    [`http://subdomain.cool.com/`, true],
    [`www.fun.com/`, true],
    [`www.fun.com`, true],
    [`www.fun.com/foobar/fun`, true],
    [`www.subdomain.cool.com/`, true],
    [`wwwsubdomain.cool.com/`, true],
    [`woo.br`, true],
    [`woohoo.biz`, true],
    [`woop.org/news`, true],
    [`http://woop.org/news?foo=bar`, true],
    [`http:subdomain.cool.com/`, true],
    [`http://subdomain.cool.com/`, true],
    [`https://en.m.wikipedia.org`, true],
    [`https://en.m.wikipedia.org/wiki`, true],
    [`en.m.wikipedia.org/wiki?`, true],
    [`coolcom`, false],
    [`egg./com`, false],
    [`foo,org`, false],
    [`.com`, false],
    [`.com/path`, false],
  ].forEach(function (a) {
    const term = nlp(a[0]).list[0].terms(0)
    const msg = a[0] + ' is url: ' + a[1]
    t.equal(term.tags['Url'] || false, a[1], msg)
  })
  t.end()
})
