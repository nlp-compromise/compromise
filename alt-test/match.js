let arr = [
  ['toronto', '#City'],
  ['mexico', '#Country'],
  ['Jamaica', '#Country'],
  ['legendary', '#Adjective'],
  ['above', '#Adjective'],
  ['moderate', '#Adjective'],
  ['extreme', '#Adjective'],
  ['august', '#Month'],
  ['saturday', '#WeekDay'],
  ['really', '#Adverb'],
  ['each', '#Determiner'],
  ['voila', '#Expression'],
  ['new england', '#Place'],
  ['hers', '#Possessive'],
  ['onto', '#Preposition'],
  ['blvd', '#Place'],
  ['belgian', '#Demonym'],
  ['cactus', '#Singular'],
  ['cacti', '#Plural'],
  ['economy', '#Noun'],
  ['engineer', '#Noun'],
  ['clothing', '#Noun'],
  ['duran duran', '#Organization'],
  ['american express', '#Organization'],
  ['brotherhood', '#Noun'],
  ['oakland athletics', '#SportsTeam'],
  ['jamie', '#Person'],
  ['claire', '#FemaleName'],
  ['arthur', '#MaleName'],
  ['¥', '#Currency'],
  ['pence', '#Currency'],
  ['seven', '#Value'],
  ['seventeen', '#Value'],
  ['twenty', '#Value'],
  ['thousand', '#Value'],
  ['eighteenth', '#Value'],
  ['tbsp', '#Unit'],
  ['wrote', '#PastTense'],
  ['write', '#Verb'],
  ['survive', '#Verb'],
  ['attempt', '#Verb'],
  ["mc'adams", 'LastName'],
  ['Müller', '#LastName'],
  ['muller', '#LastName'],
  ['425-1231', '#PhoneNumber'],
  ['823-425-1231', '#PhoneNumber'],
  ['823 425-1231', '#PhoneNumber'],
  ['(823) 425-1231', '#PhoneNumber'],
  ['+1-123-444-5655', '#PhoneNumber'],
  ['invest', '#Verb'],
  ['investing', '#Verb'],
  [`wallys'`, 'Possessive'],
  // [`JDI University'`, 'Organization'],
  ['ocean', '#Noun'],
  ['shiver', '#Verb'],
  [`flanders'`, 'Possessive'],
  [`chillin'`, 'Gerund'],
  [`'cool'`, 'Adjective'],
  ['MMMCMXXIII', '#RomanNumeral'],
  // ['MIMMCMXXIII', '#Acronym'], //invalid roman numeral
  ['c.e.o', '#Acronym'],
  ['MDMA', '#Acronym'],
  ['unless', '#Condition'],
  //
  ['great', '#Adjective'],
  ['walked', '#PastTense'],
  ['singing', '#Gerund'],
  ['funniest', '#Superlative'],
  ['sillier', '#Comparative'],
  ['the', '#Determiner'],
  ['iraqi', '#Demonym'],
  ['december', '#Date'],
  ['fifth', '#Value'],
  ['suddenly', '#Adverb'],
  ['shanghai', '#City'],
  ['google', '#Organization'],
  ['wash', '#Infinitive'],
  ['rewash', '#Infinitive'],
  ['re-wash', '#Infinitive'],
  ['re-washed', '#PastTense'],
  ['rewashed', '#PastTense'],
  ['rewashes', '#PresentTense'],
  ['rewashing', '#Gerund'],
  ['repurchase', '#Infinitive'],
  ['re-purchase', '#Infinitive'],
  ['unpurchase', '#Infinitive'],
  ['purchased', '#PastTense'],
  ['unpurchasing', '#Gerund'],
  ['unpurchases', '#PresentTense'],
  ['resolve', '#Infinitive'],
  ['restructure', '#Infinitive'],
  ['reconcile', '#Infinitive'],
  ['repeat', '#Infinitive'],
  // more

  ['John is pretty', '#Person #Copula #Adjective'],
  ['John was lofty', '#Person #Copula #Adjective'],
  ['John Smith was lofty', '#FirstName #LastName #Copula #Adjective'],
  ['asdfes was lofty', '#Noun #Copula #Adjective'],
  ['asdfes lksejfj was lofty', '#Noun #Noun #Copula #Adjective'],
  ['Spencer Kelly is in Canada', '#Person #Person #Copula #Preposition #Place'],
  ['He is in Canada', '#Pronoun #Copula #Preposition #Place'],
  ['5 red roses', '#Value #Adjective #Noun'],
  ['3 trains', '#Value #Noun'],
  ['3 trainers', '#Value #Noun'],
  ['5 buses', '#Value #Noun'],
  ['101010101010101010101010101010101010101010', '#NumericValue'],

  ['walk the walk', '#Verb #Determiner #Noun'],
  ['Peter the man', '#Person #Determiner #Noun'],
  // ['book the flight', '#Verb #Determiner #Noun'],

  ['one dream', '#Value #Singular'],
  ['two dreams', '#Value #Plural'],

  // modal verbs
  ['can buy', '#Modal #Verb'],
  ['he can', '#Pronoun #Verb'],
  ['the can', '#Determiner #Noun'],

  ['will earn', '#Modal #Verb'],
  ['they will', '#Pronoun #Verb'],
  ['the will', '#Determiner #Noun'],

  ['may leave', '#Modal #Verb'],
  ['they may', '#Pronoun #Verb'],
  ['this may', '#Determiner #Noun'],

  //slang, contractions
  ['u r nice', '#Pronoun #Copula #Adjective'],
  ['canadian bacon', '#Demonym #Noun'],
  ['canadian dollar', '#Currency #Currency'],

  //possessive rules
  ["john lkjsdf's", '#Person #Possessive'],
  ["john lkjsdf's house", '#Person #Possessive #Noun'],
  ["john Lkjsdf's house", '#Person #Possessive #Noun'],
  ["john Lkjsdf's House", '#Person #Possessive #Noun'],
  ["mark's question mark", '#Possessive #Noun #Noun'],

  //question-words
  ['who is good?', '#QuestionWord #Copula #Adjective'],
  ['which is good?', '#QuestionWord #Copula #Adjective'],
  // ['bacon which is good', '#Noun #Pronoun #Copula #Adjective'],
  // ['bacon which really is good', '#Noun #Pronoun #Adverb #Copula #Adjective'],
  // ['Douglas who really is good', '#Person #Pronoun #Adverb #Copula #Adjective'],

  //web text things
  ['lkj@fun.com', '#Email'],
  ['j@f.ti', '#Email'],
  ['j@ti', '#Noun'],
  ['@ti', '#AtMention'],
  ['#funtimes', '#HashTag'],
  ['http://fun.com/cool?fun=yes', '#Url'],
  ['#cool fun.com @cooman', '#HashTag #Url #AtMention'],

  //determiner-corrections
  ['this rocks dude', '#Determiner #Verb #Noun'],
  ['that rocks dude', '#Determiner #Verb #Noun'],
  ['the rocks dude', '#Determiner #Plural #Noun'],
  ['these rocks dude', '#Determiner #Plural #Noun'],
  ['those rocks dude', '#Determiner #Plural #Noun'],
  ['the test string', '#Determiner #Noun #Noun'],

  //people
  ['John swim', '#Person #Verb'],
  ['John, John', '#Person #Person'],
  ['John, you', '#FirstName #Pronoun'],
  ['John you', '#MaleName #Pronoun'],
  ['you John you', '#Pronoun #Person #Pronoun'],
  // ['10 + 9', '#Value #Symbol #Value'],
  // ['2 * 90 = 180', '#Value #Symbol #Value #Symbol #Value'],
  // ['one - seventy-six', '#Value #Symbol #Value'],
  ['The stream runs', '#Determiner #Noun #Verb'],
  ['The stream really runs', '#Determiner #Noun #Adverb #Verb'],
  ['The nice stream really runs', '#Determiner #Adjective #Noun #Adverb #Verb'],

  ['he is walking', '#Pronoun #Copula #Gerund'],
  ['walking is fun', '#Activity #Copula #Adjective'],
  ["walking's great", '#Activity #Copula #Adjective'],
  ['jack cheered', '#Person #PastTense'],
  ['jack guarded', '#Person #PastTense'],
  ['jack is guarded', '#Person #Copula #Adjective'],
  ['jack seems guarded', '#Person #Verb #Adjective'],
  //more
  ['there are reasons', '#Noun #Copula #Plural'],
  ['there were many walks', '#Noun #Copula #Adjective #Plural'],
  ['there were the walks', '#Noun #Copula #Determiner #Noun'],

  ['it was fixed', '#Noun #Copula #PastTense'],
  ['it will be boxed', '#Noun #Verb #Verb #PastTense'],
  //ambiguous adverbs
  ['it was pretty', '#Noun #Copula #Adjective'],
  ['it was pretty cool', '#Noun #Copula #Adverb #Adjective'],
  // ['it was really pretty cool', '#Noun #Copula #Adverb #Adverb #Adjective'],
  ['it was just', '#Noun #Copula #Adjective'],
  ['it was just gorgeous', '#Noun #Copula #Adverb #Adjective'],

  ['butterfly', '#Singular'],
  ['he blamed the girl', '#Pronoun #PastTense #Determiner #Singular'],
  ['his fine', '#Possessive #Noun'],

  //acronyms
  // ['contracted AIDS', '#PastTense #Acronym'],
  ['contacted nbc', '#PastTense #Acronym'],
  ['UNESCO', '#Acronym'],
  ['NAFTA', '#Acronym'],

  ['city/town', '#Noun #Noun'],
  ['boyfriend to Jane', '#Noun #Conjunction #Person'],
  // ['boyfriend of Jane', '#Noun #Conjunction #Person'],
  ['his fines', '#Possessive #Noun'],
  ['100+ rumours', '#Value #Plural'],
  ['John & John,', '#Noun #Noun #Noun'],
  // ['i am gutted', '#Noun #PastTense #Adjective'],
  ['N.V.,', '#Noun'],

  // verb suffixes
  ['lied', '#PastTense'],
  ['lies', '#PresentTense'],
  ['owed', '#PastTense'],
  ['owes', '#PresentTense'],
  ['aced', '#PastTense'],
  ['vied', '#PastTense'],
  ['vies', '#PresentTense'],
  ['husked', '#PastTense'],
  ['husks', '#PresentTense'],
  ['masked', '#PastTense'],
  ['planned', '#PastTense'],
  ['hummed', '#PastTense'],

  // numberrange
  ['it was 1-2 kg woooh', '#Noun #PastTense #NumberRange #NumberRange #NumberRange #Unit #Expression'],
  ['1-1', '#NumberRange #NumberRange #NumberRange'],
  ['12-12', '#NumberRange #NumberRange #NumberRange'],
  ['123-123', '#NumberRange #NumberRange #NumberRange'],
  ['1234-1234', '#Noun'],

  ['bakes', '#PresentTense'],
  ['fakes', '#PresentTense'],
  ['makes', '#PresentTense'],
  ['mistakes', '#PresentTense'],
  ['overtakes', '#PresentTense'],
  ['remakes', '#PresentTense'],
  ['retakes', '#PresentTense'],
  ['forsakes', '#PresentTense'],
  ['shakes', '#PresentTense'],
  ['snakes', '#PresentTense'],
  ['takes', '#PresentTense'],
  ['undertakes', '#PresentTense'],

  ['baked', '#PastTense'],
  ['faked', '#PastTense'],
  ['maked', '#PastTense'],
  ['mistaked', '#PastTense'],
  ['overtook', '#PastTense'],
  ['remaked', '#PastTense'],
  ['retaked', '#PastTense'],
  ['forsaked', '#PastTense'],
  ['shaked', '#PastTense'],
  ['snaked', '#PastTense'],
  ['took', '#PastTense'],
  ['undertook', '#PastTense'],

  //phrasal verb tense
  ['head-over', '#PresentTense #Particle'],
  ['head-under', '#PresentTense #Particle'],
  ['haze-over', '#PresentTense #Particle'],
  ['hazed-over', '#PastTense #Particle'],
  ['headed-over', '#PastTense #Particle'],
  ['heading-under', '#Gerund #Particle'],
  ['healing-over', '#Gerund #Particle'],

  //abbreviations
  [
    'col. Patrick said march and feb. etc.',
    ['Abbreviation #Person #PastTense #Month #Conjunction #Abbreviation #Abbreviation'],
  ],
  [`i met April O'neil`, '#Pronoun #PastTense #Person #Person'],

  // adjectives
  ['germans are nice', '#Demonym #Verb #Adjective'],
  ['Iraqis are nice', '#Plural #Copula #Adjective'],
  ['canadians are nice', '#ProperNoun #Verb #Adjective'],
  ['thom is smart', '#ProperNoun #Verb #Adjective'],

  // [`ANA, ENA, CCP etc.`, '#Acronym #Acronym #Acronym #Abbreviation'],
  [`as disgusting as`, '#Preposition #Adjective #Preposition'],
  [`more disgusting than`, '#Adverb #Adjective #Preposition'],
  [`was so nausiating`, '#Copula #Adverb #Adjective'],
  [`extremely moving`, '#Adverb #Adjective'],
  [`each promising image`, '#Determiner #Adjective #Singular'],
  [`this reckoning`, '#Determiner #Noun'],
  [`it was redefining`, '#Pronoun #Copula #Adjective'],
  [`it was a redefining moment`, '#Pronoun #Copula #Determiner #Adjective #Noun'],
  [`he is redefining art`, '#Pronoun #Copula #Verb #Noun'],
  [`revealing his guts`, '#Verb #Possessive #Plural'],
  // [`the ruling party`, '#Determiner #Adjective #Singular'],
  [`i found it isolating`, '#Noun #PastTense #Noun #Adjective'],
  // [`promising to leave`, '#Gerund #Conjunction #Verb'],
  [`distressing us`, '#Gerund #Noun'],
  [`loving you`, '#Gerund #Noun'],
  [`it was disgusting`, '#Pronoun #Copula #Adjective'],
  [`dark green`, '#Adverb #Adjective'],
  [`kinda sparkly`, '#Adverb #Adjective'],
  [`quite stunning`, '#Adverb #Adjective'],
  [`slowly stunning`, '#Adverb #Verb'],
  [`quite awfully stunning`, '#Adverb #Adverb #Adjective'],
  [`quite awfully swimming`, '#Adverb #Adverb #Verb'],
  ['is doing well', '#Copula #Gerund #Adverb'],
  ['well, no.', '#Expression #Negative'],
  ['he is well', '#Pronoun #Copula #Adjective'],
  ['is well made', '#Copula #Adverb #Adjective'],
  ['at some point', '#Preposition #Determiner #Noun'],
  ['to a point', '#Conjunction #Determiner #Noun'],

  // infinitive-noun
  [`a tv show`, '#Determiner #Noun #Noun'],
  [`send me a currency report.`, '#Infinitive #Pronoun #Determiner #Noun #Noun'],
  // [`a close watch on`, '#Determiner #Adjective #Noun #Preposition'],
  [` a surgery date of`, '#Determiner #Noun #Noun #Preposition'],
  [`A girl hit a boy.`, '#Determiner #Noun #Infinitive #Determiner #Noun'],
  [`a auto repair shop.`, '#Determiner #Noun #Noun #Noun'],
  // timezones
  ['Morocco Standard Time', '#Timezone #Timezone #Timezone'],
  ['GMT+9', '#Timezone'],
  ['3pm EST', '#Time #Timezone'],
  ['3pm eastern time', '#Time #Timezone #Timezone'],
  ['pacific standard time', '#Timezone #Timezone #Timezone'],
  ['korea daylight time', '#Timezone #Timezone #Timezone'],
  // urls
  ['https://www.f3schools.com', '#Url'],
  ['https://f3scho0ls.com', '#Url'],
  ['https://www.fu4bar.f3scho0ls.com', '#Url'],
  ['http://compromise.cool', '#Url'],
  ['http://a.jp', '#Url'],
  // hyphens
  ['cartoon-ish', '#Adjective'],
  ['over-joyous', '#Adjective'],
  ['walk-able', '#Adjective'],
  ['trans-national', '#Adjective'],
  ['re-create', '#Verb'],
  ['micro-computer', '#Noun'],

  // contractions
  // 't
  ["we ain't", 'we are not'],
  ["she ain't", 'she is not'],
  ["she really ain't", 'she really is not'],
  ["we really ain't", 'we really are not'],
  ["the hotels really ain't", 'the hotels really are not'],
  ["the boxer really ain't", 'the boxer really is not'],
  // 's
  [`spencer's buritto`, `spencer's buritto`],
  [`spencer's walked`, `spencer has walked`],
  [`spencer's nice`, `spencer is nice`],
  // 'd
  [`i'd really walked`, `i had really walked`],
  [`i'd really see`, `i would really see`],
  [`how'd she do`, `how did she do`],
]
module.exports = arr
