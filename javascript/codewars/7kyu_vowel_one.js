function vowelOne(s){
    var vogais = s.replace(/[^aeiou]/ig, '0').replace(/[aeiou]/ig, '1')
    return vogais;
  }

  console.log(vowelOne('oi, tudo bem?'))


  // regex vogais: [aeiou]/ig || negação do regex: adicionar ^ 