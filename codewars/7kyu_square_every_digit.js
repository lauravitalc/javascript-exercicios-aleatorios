function squareDigits(num){
  var split = num.toString();
  var resultado = []
   for(i = 0; i < split.length; i++){
    resultado[i] = split[i] * split[i]
  }
    return parseInt(resultado.join(''))
  }

  console.log(squareDigits(3212))

  /* Melhor resultado: 
  function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
} */