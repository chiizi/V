var v = {}

v.lex = function(code) {
  var tokens = []
  var token = ""
  var inQuotes = false
  var escaped = false
  var next = false
  var ws = false
  var nl = false
  for (var i = 0; i < code.length; i++) {
    if (next) {
      
    }
    if (!escaped) {
      if (inQuotes) {
        if (code[i] == "\"") {
          inQuotes = false
          next = true
        }
      } else {
        if (/^(,|\.\.\.|<--|<-\||<-|=|:|\^|&|\||is(nt)?|<<|>>|-|\+|%|\/|\*|\*\*|\/\/|_|\.)/gm.test(code)) {
          tokens.push(/^(,|\.\.\.|<--|<-\||<-|=|:|\^|&|\||is(nt)?|<<|>>|-|\+|%|\/|\*|\*\*|\/\/|_|\.)/gm.exec(code))
          code = code.replace(/^(,|\.\.\.|<--|<-\||<-|=|:|\^|&|\||is(nt)?|<<|>>|-|\+|%|\/|\*|\*\*|\/\/|_|\.)/gm, "")
          next = true
        }
      }
    }
    token += code[i]
  }
}
v.parse = function(code) {
  code = this.lex(code)
}
v.exec = function(code) {
  code = this.parse(code)
}
